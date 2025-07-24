'use client';


import Navbar from '@/components/Navbar';
import ContactForm from '@/components/ContactForm';



export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="bg-background pt-28 pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-foreground">Contact Us</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Get in touch with our team for inquiries, quotes, or technical support.
            </p>
          </div>
          
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground">Get in Touch</h2>
                <dl className="mt-10 space-y-4 text-base leading-7 text-muted-foreground">
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Address</span>
                      <svg className="h-7 w-6 text-muted-foreground" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </dt>
                    <dd>
Gat No. 232/6, Near Pranay Stamping Company B, D.G.P. Nagar, Ambad Link Road, Navnath Nagar, Ambad, Nashik -422010.
</dd>
                  </div>
                  
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Email</span>
                      <svg className="h-7 w-6 text-muted-foreground" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </dt>
                    <dd>
                      <a className="hover:text-foreground" href="mailto:saiwiremesh21@gmail.com">
                        saiwiremesh21@gmail.com
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Contact Form */}
              <div className="bg-card/40 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-border">
                <h2 className="text-2xl font-bold tracking-tight text-foreground mb-8">Send us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}