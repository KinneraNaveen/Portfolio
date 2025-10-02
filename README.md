# Kinnera Naveen - Portfolio Website

> A modern, high-performance portfolio website showcasing full-stack development and AI/ML expertise

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://kinneranaveen.dev)
[![Build Status](https://img.shields.io/badge/Build-Passing-success)](#)
[![Performance](https://img.shields.io/badge/Lighthouse-95+-brightgreen)](#)
[![License](https://img.shields.io/badge/License-MIT-blue)](#license)

## Features

### Modern Design & UX
- **Glass Morphism UI** with stunning visual effects
- **Dark/Light Mode** with system preference detection
- **Responsive Design** optimized for all devices
- **Custom Cursor** for enhanced desktop experience
- **Smooth Animations** powered by Framer Motion
- **Interactive Elements** with hover effects and micro-interactions

### Performance & Accessibility
- **95+ Lighthouse Score** across all metrics
- **Core Web Vitals** optimized (LCP < 2.5s, FID < 100ms, CLS < 0.1)
- **WCAG 2.1 AA Compliant** with proper semantic HTML
- **Error Boundaries** for graceful error handling
- **Performance Monitoring** with real-time metrics
- **SEO Optimized** with meta tags and structured data

### Interactive Features
- **Scroll Progress Indicator** showing page progress
- **Testimonials Carousel** with smooth transitions
- **Project Filtering** by category (Full-Stack, AI/ML)
- **Enhanced Contact Form** with validation and feedback
- **Back to Top** button with smooth scrolling
- **Loading States** and success/error feedback

## Tech Stack

### Frontend
- **React 18** - Latest React with concurrent features
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library

### Development & Build
- **PostCSS** - CSS processing with autoprefixer
- **ESLint** - Code linting and quality assurance
- **Modern JavaScript** - ES2022+ features
- **Component Architecture** - Reusable and maintainable code

### Performance & Monitoring
- **Bundle Optimization** - Code splitting and lazy loading
- **Image Optimization** - WebP format with fallbacks
- **Performance API** - Real-time metrics tracking
- **Error Tracking** - Comprehensive error boundaries

## Sections Overview

| Section | Description | Features |
|---------|-------------|----------|
| **Hero** | Dynamic introduction | Animated text, floating elements, role rotation |
| **About** | Personal background | Stats counter, highlights grid, CTA buttons |
| **Skills** | Technical expertise | Categorized skills, proficiency levels, animations |
| **Education** | Academic journey | Timeline component, achievements |
| **Projects** | Portfolio showcase | Category filtering, detailed cards, live demos |
| **Testimonials** | Client feedback | Interactive carousel, ratings |
| **Contact** | Get in touch | Enhanced form, validation, social links |

## Quick Start

### Prerequisites
- **Node.js** v16.0.0 or higher
- **npm** v7.0.0 or higher (or **yarn** v1.22.0+)

### Installation

```bash
# Clone the repository
git clone https://github.com/kinneranaveen/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173 in your browser
```

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation with theme toggle
│   ├── ProjectCard.jsx # Enhanced project cards
│   ├── ContactForm.jsx # Advanced contact form
│   ├── ScrollProgress.jsx # Scroll indicator
│   └── ...
├── sections/           # Page sections
│   ├── HeroSection.jsx
│   ├── AboutSection.jsx
│   ├── ProjectsSection.jsx
│   ├── TestimonialsSection.jsx
│   └── ...
├── styles/             # Global styles
│   ├── global.css      # Tailwind + custom styles
│   └── animations.css  # Custom animations
├── assets/             # Static assets
└── App.jsx            # Main application component
```

## Customization Guide

### **Colors & Theming**

Edit `tailwind.config.js` to customize the color palette:

```javascript
colors: {
  primary: {
    500: '#0ea5e9',  // Main brand color
    // ... other shades
  },
  accent: {
    500: '#d946ef',  // Accent color
    // ... other shades
  }
}
```

### **Content Updates**

1. **Personal Information**: Update `src/sections/AboutSection.jsx`
2. **Projects**: Modify the projects array in `src/sections/ProjectsSection.jsx`
3. **Skills**: Edit skill categories in `src/sections/SkillsSection.jsx`
4. **Contact Info**: Update contact details in `src/sections/ContactSection.jsx`

### **Adding New Sections**

1. Create component in `src/sections/`
2. Import and add to `src/App.jsx`
3. Add navigation link in `src/components/Navbar.jsx`

## Performance Metrics

| Metric | Score | Target |
|--------|-------|--------|
| **Performance** | 95+ | > 90 |
| **Accessibility** | 100 | > 95 |
| **Best Practices** | 100 | > 90 |
| **SEO** | 100 | > 90 |
| **First Contentful Paint** | < 1.5s | < 2.5s |
| **Largest Contentful Paint** | < 2.0s | < 2.5s |
| **Cumulative Layout Shift** | < 0.05 | < 0.1 |

## Deployment

### **Netlify (Recommended)**

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Configure custom domain (optional)

### **Vercel**

1. Connect your GitHub repository
2. Vercel auto-detects Vite configuration
3. Deploy with zero configuration

### **Manual Deployment**

```bash
# Build for production
npm run build

# The dist/ folder contains the built application
# Upload contents to your web server
```

## Environment Variables

Create `.env.local` for custom configuration:

```env
VITE_CONTACT_FORM_ENDPOINT=your_form_endpoint
VITE_ANALYTICS_ID=your_analytics_id
VITE_SITE_URL=https://yourdomain.com
```

## Browser Support

- **Chrome** 90+
- **Firefox** 88+
- **Safari** 14+
- **Edge** 90+
- **Mobile browsers** with modern JavaScript support

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact & Support

**Kinnera Naveen**
- **Email**: [kinneranaveen237@gmail.com](mailto:kinneranaveen237@gmail.com)
- **LinkedIn**: [Kinnera Naveen](https://linkedin.com/in/kinnera-naveen-1786ab2b6/)
- **GitHub**: [kinneranaveen](https://github.com/kinneranaveen)
- **Portfolio**: [kinneranaveen.dev](https://kinneranaveen.dev)

## Acknowledgments

- **Framer Motion** for amazing animations
- **Tailwind CSS** for utility-first styling
- **React Team** for the incredible framework
- **Vite Team** for the blazing-fast build tool
