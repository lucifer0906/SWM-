import Link from 'next/link';

const navigation = {
  main: [
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
  ],
  social: [],
  platforms: [],
};

export default function Footer() {
  return (
    <footer className="bg-card shadow-inner border-t border-border" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
          {/* Navigation Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Navigation</h3>
            <ul role="list" className="mt-6 space-y-4">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <h3 className="text-2xl font-bold text-foreground mb-4">SWM</h3>
            </Link>
            <p className="text-sm text-muted-foreground mb-6">
              Leading manufacturer of high-precision wire mesh products for filter-making industries.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} SWM. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 