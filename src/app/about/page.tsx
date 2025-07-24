'use client';

import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';

const values = [
  {
    name: 'Quality First',
    description: 'We maintain the highest standards in our manufacturing processes and product quality.',
  },
  {
    name: 'Customer Focus',
    description: 'Building long-term relationships through exceptional service and support.',
  },
  {
    name: 'Innovation',
    description: 'Continuously improving our products and processes to meet evolving industry needs.',
  },
  {
    name: 'Sustainability',
    description: 'Committed to environmentally responsible manufacturing practices.',
  },
];

const clients = [
  {
    initials: 'SI',
    name: 'SIEVES INDIA',
    subtitle: 'Sieve & Filter Manufacturing',
    description: 'Supplying high-grade stainless steel woven mesh for their precision industrial sieving equipment.',
  },
  {
    initials: 'SS',
    name: 'SICO SOL Industrial Equipment',
    subtitle: 'Industrial Equipment Supplier',
    description: 'Providing durable Galvanized Iron (G.I.) chain link fencing for facility security and asset protection.',
  },
];

export default function About() {
  return (
    <>
      <Navbar />
      <div className="bg-background pt-24">
        <div className="relative isolate">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-6xl lg:mx-0">
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                About SWM
              </h1>
              <p className="mt-6 text-lg leading-9 text-muted-foreground">
              Sai Wire Mesh was born out of decades of real-world manufacturing experience. Our founders spent over 30 years working on the shop floors of various industries, mastering the tools, processes, and standards that define industrial excellence. With a deep understanding of what quality truly means, they started this company with a single vision: to provide reliable, high-quality wire mesh products to businesses that value performance, durability, and affordability. Today, Sai Wire Mesh proudly serves factories and industries that require trustworthy materials, backed by people who have been on the other side of the production line.
              </p>
            </div>
          </div>
        </div>

        {/* Values section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-accent">Our Values</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What Drives Us
            </p>
          </div>
          <div className="mx-auto mt-16">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {values.map((value) => (
                <motion.div
                  key={value.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex flex-col"
                >
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                    {value.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                    <p className="flex-auto">{value.description}</p>
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>

        {/* Team section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-base font-semibold leading-7 text-accent">TRUSTED BY</h2>
<p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
  Our Valued Partners
</p>
          </div>
          <ul
  role="list"
  className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2"
>
  {clients.map((client) => (
    <motion.li
      key={client.name}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-card/40 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-border"
    >
      <div className="h-16 w-16 rounded-full bg-card flex items-center justify-center border border-border">
        <span className="text-2xl font-semibold text-muted-foreground">
          {client.initials}
        </span>
      </div>
      <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-foreground">
        {client.name}
      </h3>
      <p className="text-sm font-semibold leading-6 text-muted-foreground">{client.subtitle}</p>
      <p className="mt-4 text-sm leading-6 text-muted-foreground">{client.description}</p>
    </motion.li>
  ))}
</ul>
        </div>

        {/* Certifications section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 pb-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-base lg:text-center font-semibold leading-7 text-accent">Quality Assurance</h2>
          </div>
          <div className="flex justify-center mt-10">
            <div className="max-w-2xl w-full p-8 rounded-2xl shadow-lg border border-border bg-card">
  <h3 className="text-4xl font-bold mb-8 text-foreground">Our Commitment to Quality</h3>
  <p className="text-lg text-muted-foreground whitespace-pre-line">
At Sai Wire Mesh, quality isn&apos;t just a checkbox, it&apos;s our foundation.
With over 30 years of firsthand experience in manufacturing, our founders have instilled a deep commitment to precision and durability in every product we deliver.
We follow time-tested practices, thorough inspections, and material-grade checks to ensure that every mesh meets the functional and structural demands of industrial use.
<br />
<span className='font-semibold text-accent'>While we’re currently operating without formal certifications, we aim to achieve them soon, further reinforcing the standards we already uphold every day.</span>
  </p>
</div>
          </div>
        </div>
      </div>
    </>
  );
} 