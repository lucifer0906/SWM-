'use client';

import { motion } from 'framer-motion';

import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { TextReveal } from '@/components/ui/text-reveal';
import { SparklesText } from '@/components/ui/sparkles-text';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { AnimatedButton } from '@/components/ui/animated-button';
import { BackgroundBeams } from '@/components/ui/background-beams';

const features = [
  {
    title: 'Precision Manufacturing',
    description: 'State-of-the-art manufacturing facilities ensuring consistent quality and precise specifications for every mesh product.',
    className: 'md:col-span-2',
    image: '/images/1.jpg'
  },
  {
    title: 'Factory Grade Pricing',
    description: 'Competitive pricing that supports your margins.',
    className: 'md:col-span-1',
    image: '/images/2.jpg'
  },
  {
    title: 'Custom Solutions',
    description: 'Tailored wire mesh solutions designed to meet specific industry requirements and applications.',
    className: 'md:col-span-1',
    image: '/images/3.jpg'
  },
  {
    title: 'Industry Experience',
    description: '40+ years of excellence serving automotive, pharmaceutical, food processing, and water treatment sectors.',
    className: 'md:col-span-2',
    image: '/images/4.jpg'
  }
];

const industries = [
  {
    name: 'Automotive',
    description: 'Precision filters for automotive manufacturing',
    icon: '&#x1F697;'
  },
  {
    name: 'Pharmaceutical',
    description: 'High-grade mesh for medical filtration',
    icon: '&#x1F48A;'
  },
  {
    name: 'Food Processing',
    description: 'Food-safe mesh solutions',
    icon: '&#x1F371;'
  },
  {
    name: 'Water Treatment',
    description: 'Filtration systems for water purification',
    icon: '&#x1F4A7;'
  },
  {
    name: 'Aerospace',
    description: 'Specialized mesh for aerospace applications',
    icon: '&#x2708;'
  },
  {
    name: 'Chemical',
    description: 'Chemical-resistant filtration solutions',
    icon: '&#x1F9D0;'
  },
  {
    name: 'Mining',
    description: 'Heavy-duty screening solutions',
    icon: '&#x26CF;'
  },
  {
    name: 'Oil & Gas',
    description: 'High-performance filtration systems',
    icon: '&#x1F6E2;'
  }
];

interface InfiniteLoopSliderProps {
  children: React.ReactNode;
  duration: number;
  reverse?: boolean;
}

const InfiniteLoopSlider: React.FC<InfiniteLoopSliderProps> = ({ children, duration, reverse = false }) => {
  return (
    <motion.div
      initial={{ x: reverse ? "-100%" : "0%" }}
      animate={{ x: reverse ? "0%" : "-100%" }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
      className="flex gap-4 whitespace-nowrap"
    >
      {children}
      {children}
    </motion.div>
  );
};

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative bg-background">
        {/* Hero Section (theme-aware) */}
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-0">
          <BackgroundBeams />
          <div className="relative z-10 text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <TextReveal text="SAI WIRE MESH" className="text-4xl md:text-6xl font-bold text-foreground mb-4" />
              <SparklesText text="Trusted Wire Mesh Solutions" className="text-2xl md:text-4xl text-accent" />
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="max-w-3xl mx-auto text-lg text-muted-foreground mb-12"
            >
               Sai Wire Mesh is built on 30+ years of hands-on experience. Founded by two seasoned professionals from the manufacturing industry, we deliver high-quality wire mesh products tailored for factories, contractors, and industrial needs.
            </motion.p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <AnimatedButton href="/products">
                Explore Products
              </AnimatedButton>
              <AnimatedButton href="/contact" variant="outline">
                Get in Touch
              </AnimatedButton>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="py-16 px-4 relative">
          <BackgroundBeams />
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-base font-semibold leading-7 text-accent uppercase tracking-wide">Why Choose Us</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Excellence in Every <span className="text-accent">Mesh</span>
              </p>
              <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
                Delivering precision and quality in wire mesh manufacturing 
              </p>
            </div>
            <BentoGrid className="gap-4">
              {features.map((feature, i) => (
                <BentoGridItem
                  key={i}
                  title=""
                  description={feature.description}
                  className={`${feature.className} group`}
                  header={
                    <div className="relative h-[280px] w-full overflow-hidden rounded-lg">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={i < 2}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-background/30 rounded-lg" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                      </div>
                    </div>
                  }
                />
              ))}
            </BentoGrid>
          </div>
        </section>

        {/* Global Presence Section */}
        <section className="py-15 relative">
          <BackgroundBeams />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="w-full">
                <h2 className="text-4xl font-bold mb-4 text-foreground mt-8 md:mt-16">National Presence</h2>
                <p className="text-lg text-muted-foreground mb-1 mt-1">
                  Our wire mesh solutions are trusted by industries across the nation, meeting diverse needs with precision and reliability.
                </p>
                <div className="aspect-square max-w-[400px] mx-auto flex items-center justify-center">
                </div>
              </div>
              <div className="w-full bg-card/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-4">Industries We Serve</h3>
                <div className="relative w-full overflow-hidden">
                  <div className="flex flex-col gap-4">
                    <div className="relative overflow-hidden">
                      <div className="mask-gradient">
                        <InfiniteLoopSlider duration={30}>
                          {industries.slice(0, 4).map((industry) => (
                            <div
                              key={industry.name}
                              className="flex-none w-60 sm:w-64 bg-card/30 backdrop-blur-sm rounded-lg p-3 sm:p-4 mx-2 border-l-4 border-accent hover:shadow-lg transition-shadow"
                            >
                              <div className="text-2xl mb-2">{industry.icon}</div>
                              <h4 className="text-base font-semibold text-accent mb-1">{industry.name}</h4>
                              <p className="text-xs text-muted-foreground line-clamp-2">{industry.description}</p>
                            </div>
                          ))}
                        </InfiniteLoopSlider>
                      </div>
                    </div>
                    <div className="relative overflow-hidden">
                      <div className="mask-gradient">
                        <InfiniteLoopSlider duration={30} reverse={true}>
                          {industries.slice(4).map((industry) => (
                            <div
                              key={industry.name}
                              className="flex-none w-60 sm:w-64 bg-card/30 backdrop-blur-sm rounded-lg p-3 sm:p-4 mx-2 border-l-4 border-accent hover:shadow-lg transition-shadow"
                            >
                              <div className="text-2xl mb-2">{industry.icon}</div>
                              <h4 className="text-base font-semibold text-accent mb-1">{industry.name}</h4>
                              <p className="text-xs text-muted-foreground line-clamp-2">{industry.description}</p>
                            </div>
                          ))}
                        </InfiniteLoopSlider>
                      </div>
                    </div>
                  </div>
                </div>
                <style jsx>{`
                  .mask-gradient {
                    mask-image: linear-gradient(
                      to right,
                      transparent,
                      black 20%,
                      black 80%,
                      transparent
                    );
                    -webkit-mask-image: linear-gradient(
                      to right,
                      transparent,
                      black 20%,
                      black 80%,
                      transparent
                    );
                  }
                `}</style>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-10 overflow-hidden">
          <BackgroundBeams />
          <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl font-bold mb-8 text-foreground">Ready to Transform Your Industry?</h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Let&apos;s discuss how our precision wire mesh solutions can enhance your manufacturing process.
            </p>
            <AnimatedButton href="/contact" size="lg">
              Start Your Journey
            </AnimatedButton>
          </div>
        </section>
      </div>
    </>
  );
}
