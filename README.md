# Sai Wire Mesh – Business Website

## Project Description
Sai Wire Mesh (SWM) is a business website for a fine wire mesh manufacturing company. The site showcases the company’s values, team, products, and commitment to quality, providing essential information for potential clients and partners. Built with modern web technologies, it delivers a professional, responsive, and SEO-friendly experience.

## Features
- **Company Overview:** About page with company history, values, and team.
- **Product Listings:** Dedicated section for products and specifications.
- **Contact Form:** Easy way for customers to reach out (if implemented).
- **Responsive Design:** Optimized for desktop and mobile devices.
- **Modern UI:** Clean, accessible, and visually appealing interface.
- **SEO Optimized:** Follows best practices for discoverability.
- **Performance:** Fast load times and optimized assets.

## Folder & File Structure
```
swm-website/
├── public/                # Static assets (images, SVGs, favicon, etc.)
│   ├── images/            # Product and team images
│   └── ...
├── src/
│   ├── app/               # Next.js app directory
│   │   ├── about/         # About page
│   │   ├── contact/       # Contact page
│   │   ├── products/      # Products page
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page
│   ├── components/        # Reusable React components
│   │   ├── Navbar.tsx     # Navigation bar
│   │   ├── Footer.tsx     # Footer
│   │   └── ...
│   ├── lib/               # Utility functions
│   └── ...
├── package.json           # Project metadata and dependencies
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── next.config.ts         # Next.js configuration
└── ...
```

## Technologies Used
- **Next.js** (React framework for SSR/SSG)
- **React** (UI library)
- **TypeScript** (type safety)
- **Tailwind CSS** (utility-first CSS framework)
- **Framer Motion** (animations)
- **Node.js** (runtime)
- **PostCSS** (CSS processing)

## Installation & Local Development
1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd swm-website
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. **Open in browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## SEO Best Practices Followed
- Semantic HTML structure for accessibility and SEO
- Descriptive page titles and meta descriptions (customize in layout/page files)
- Optimized images with proper alt text
- Clean, crawlable URLs
- Fast load times and responsive design
- Use of Next.js for server-side rendering (SSR) and static site generation (SSG)

## Deployment Instructions

### Local Production Build
1. **Build the app:**
   ```bash
   npm run build
   # or
   yarn build
   ```
2. **Start the production server:**
   ```bash
   npm start
   # or
   yarn start
   ```

### Deploying to a Live Domain (e.g., GoDaddy)
1. **Choose a hosting provider:**
   - For static export: Use Vercel, Netlify, or similar for seamless Next.js deployment.
   - For custom domain (e.g., GoDaddy):
     - Deploy to Vercel/Netlify and point your GoDaddy DNS to the hosting provider.
     - Or, use a VPS/server, upload the `.next` build, and run with Node.js.
2. **Set up environment variables (if any).**
3. **Update DNS records:**
   - In GoDaddy, set an A record or CNAME to your hosting provider’s address.
4. **Verify deployment:**
   - Visit your domain to ensure the site is live.

## Known Issues
- No formal certifications listed yet (see About page for details).
- Contact form may require backend/API setup for full functionality.
- Some images may use placeholder URLs; update as needed.

## Contribution Instructions
1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Commit your changes with clear messages.
4. Open a pull request describing your changes.
5. Ensure code follows project conventions and passes linting/tests.

## License

This project is licensed under the [MIT License](LICENSE). 