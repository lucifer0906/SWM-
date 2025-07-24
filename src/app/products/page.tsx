'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'Hollander Weave Stainless Steel Mesh',
    description: 'Engineered for superior performance in demanding filtration and sieving applications. Our 316L grade stainless steel mesh offers exceptional durability and resistance to corrosion.',
    category: 'wire',
    imageUrl: '/images/3.jpg',
    specifications: {
      material: 'Stainless Steel 316L Grade',
      weaveType: 'Plain Dutch / Hollander Weave',
      meshCount: '24/110 (Other specifications available on request)',
    },
    applications: [
      'Sieving & Filtration',
      'Pharmaceutical',
      'Food & Beverage',
    ],
  },
  {
    id: 2,
    name: 'Galvanized Chain Link Fencing',
    description: 'Versatile and durable fencing solutions for security, perimeter, and enclosure needs. Our Galvanized Iron (G.I.) chain link is built to withstand the elements and provide reliable protection.',
    category: 'chain',
    imageUrl: '/images/Chain Link Fence.jpg',
    specifications: {
      material: 'Galvanized Iron (G.I.) Wire',
      height: 'Up to 10 feet (Customizable)',
      wireGauge: '8, 10, 11, 12, 14, 16',
      meshSize: '1x1 inch to 4x4 inch',
    },
    applications: [
      'Security Fencing',
      'Perimeter Barriers',
      'Industrial Sites',
      'Agricultural',
      'Poultry Enclosures',
    ],
  },
];

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'wire', name: 'Wire Mesh' },
  { id: 'chain', name: 'Chain Link' },
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const router = useRouter();

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <>
      <Navbar />
      <div className="bg-background pt-20 overflow-x-hidden w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none">
            <h1 className="text-4xl font-bold tracking-tight text-foreground">Our Products</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Explore our range of high-precision wire mesh products designed for various industrial applications.
            </p>

            {/* Category filter */}
            <div className="mt-8 flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium whitespace-nowrap ${
                    selectedCategory === category.id
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-card text-muted-foreground hover:bg-card/80'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Product grid */}
            <div className="mt-16 space-y-12">
              {filteredProducts.map((product, idx) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="rounded-2xl bg-card shadow-lg overflow-hidden p-2 border border-border"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2 ${idx % 2 === 0 ? 'lg:flex-row-reverse' : ''} items-stretch`}>
                    {/* Product Image */}
                    <div className={`relative w-full aspect-[2/1] overflow-hidden rounded-xl ${idx % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                      <Image
                        src={product.imageUrl || '/next.svg'}
                        alt={product.name}
                        fill
                        className="object-cover object-center rounded-xl"
                      />
                    </div>
                    {/* Product Details */}
                    <div className="p-6 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">{product.name}</h3>
                        <p className="mb-4 text-sm text-muted-foreground">{product.description}</p>
                        <div className="mb-2">
                          <h4 className="font-semibold text-base text-foreground">Specifications:</h4>
                          <ul className="text-sm text-muted-foreground">
  {Object.entries(product.specifications).map(([key, value]) => (
    <li key={key}>
      {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}: {value}
    </li>
  ))}
</ul>
                        </div>
                        <div className="mb-2">
                          <h4 className="font-semibold text-base text-foreground">Applications:</h4>
                          <div className="flex flex-wrap gap-2">
                            {product.applications.map((app) => (
                              <span
                                key={app}
                                className="inline-flex items-center rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent"
                              >
                                {app}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="mt-4 w-max rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                        onClick={() => router.push('/contact')}
                      >
                        Request Quote
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 