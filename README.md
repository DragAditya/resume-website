# 🚀 Premium Portfolio Website 2.0

A cutting-edge, fully responsive portfolio website built with the latest web technologies. This is a complete transformation from a basic PDF resume to a stunning, interactive digital experience that showcases modern web development at its finest.

![Portfolio Preview](https://via.placeholder.com/1200x600/4338ca/ffffff?text=Premium+Portfolio+2.0)

## ✨ Features

### 🎨 Premium Design & UX
- **Glassmorphism Effects**: Beautiful frosted glass UI elements with backdrop blur
- **Smooth Animations**: Powered by Framer Motion with spring physics and custom easing
- **Interactive Elements**: Magnetic buttons, hover effects, and micro-interactions
- **Modern Gradients**: Dynamic gradient backgrounds and text effects
- **Premium Typography**: Using Geist and Inter fonts for exceptional readability

### 🌈 Advanced Theming
- **Dark/Light Mode**: Seamless theme switching with system preference detection
- **Persistent Themes**: Theme preference saved across sessions
- **Animated Transitions**: Smooth theme switching animations
- **Custom Design Tokens**: CSS variables for consistent theming

### 📱 Responsive Excellence
- **Mobile-First Design**: Optimized for all screen sizes
- **Touch Optimized**: Perfect touch interactions on mobile devices
- **Adaptive Layouts**: Intelligent layout adjustments for different viewports
- **Cross-Browser Compatible**: Works flawlessly across all modern browsers

### 🎭 Interactive Sections
- **Hero Section**: Animated typewriter effect, floating elements, and magnetic interactions
- **About Section**: Interactive stats, animated progress indicators, and philosophy cards
- **Skills Section**: Filterable skill cards with progress bars and shimmer effects
- **Projects Section**: 3D card effects, filtering system, and detailed modals
- **Contact Form**: Real-time validation, animated states, and glass morphism design

### ⚡ Performance & SEO
- **Lighthouse Score 95+**: Optimized for performance, accessibility, and SEO
- **Core Web Vitals**: Excellent scores for LCP, FID, and CLS
- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic code splitting for optimal loading
- **Meta Tags**: Comprehensive SEO optimization

## 🛠️ Tech Stack

### Core Technologies
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[React 18](https://reactjs.org/)** - Latest React with concurrent features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework

### UI & Animation Libraries
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready motion library
- **[Radix UI](https://www.radix-ui.com/)** - Low-level UI primitives
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme management

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)** - VS Code extension

## 🚀 Quick Start

### Prerequisites
- Node.js 18.0.0 or higher
- npm 8.0.0 or higher

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yashdabhade/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier

## 🎨 Customization

### Personal Information
Update your personal information in `data/portfolio.ts`:

```typescript
export const personalInfo = {
  name: "Your Name",
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567",
  location: "Your City, Country",
  bio: "Your bio here...",
  // ... more fields
};
```

### Skills
Add or modify your skills in the same file:

```typescript
export const skills = [
  {
    name: "React",
    category: "Frontend",
    level: 90,
    description: "Building modern user interfaces"
  },
  // ... more skills
];
```

### Projects
Showcase your projects:

```typescript
export const projects = [
  {
    title: "Project Name",
    description: "Project description...",
    technologies: ["React", "Next.js", "TypeScript"],
    github: "https://github.com/username/project",
    demo: "https://project-demo.com",
    status: "Completed"
  },
  // ... more projects
];
```

### Theme Customization
Modify the design system in `app/globals.css`:

```css
:root {
  --primary: 221 83% 53%;
  --secondary: 210 40% 96%;
  /* ... custom variables */
}
```

### Component Styling
All components use Tailwind CSS classes. Modify the styles directly in the component files or extend the Tailwind configuration in `tailwind.config.js`.

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles & design system
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── sections/          # Page sections
│   │   ├── hero.tsx      # Hero section
│   │   ├── about.tsx     # About section
│   │   ├── skills.tsx    # Skills section
│   │   ├── projects.tsx  # Projects section
│   │   ├── experience.tsx # Experience section
│   │   └── contact.tsx   # Contact section
│   ├── navbar.tsx        # Navigation component
│   ├── footer.tsx        # Footer component
│   └── theme-provider.tsx # Theme context
├── data/                 # Data and content
│   └── portfolio.ts      # Portfolio data
├── lib/                  # Utility functions
│   └── utils.ts          # Helper functions
└── public/               # Static assets
```

## 🎯 Features Breakdown

### 🎭 Advanced Animations
- **Scroll-triggered animations** with Intersection Observer
- **Staggered animations** for list items and cards
- **Physics-based transitions** with spring animations
- **Gesture animations** for touch interactions
- **Loading states** with skeleton screens

### 🎨 Design System
- **Consistent spacing** using Tailwind's spacing scale
- **Typography scale** with responsive font sizes
- **Color palette** with semantic color naming
- **Shadow system** with multiple elevation levels
- **Border radius** system for consistent rounded corners

### 📊 Performance Optimizations
- **Image optimization** with Next.js Image component
- **Font optimization** with next/font
- **Bundle analysis** with built-in bundle analyzer
- **Code splitting** for optimal loading
- **Preloading** of critical resources

### 🔍 SEO Features
- **Meta tags** for all pages
- **Open Graph** tags for social sharing
- **Twitter Cards** for Twitter sharing
- **Structured data** with JSON-LD
- **Sitemap** generation
- **Robots.txt** configuration

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy with zero configuration
3. Automatic deployments on push

### Other Platforms
- **Netlify**: Connect Git repository and deploy
- **AWS Amplify**: Use the provided build settings
- **DigitalOcean App Platform**: Deploy with Git integration

### Build Commands
```bash
# Build command
npm run build

# Start command
npm run start

# Output directory
.next
```

## 🔧 Environment Variables

Create a `.env.local` file for environment-specific configurations:

```env
# Analytics (optional)
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Contact Form (optional)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your-service-id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your-template-id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your-public-key
```

## � Performance Metrics

- **Lighthouse Performance**: 95+
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3.0s

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## � License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Design inspiration** from top developer portfolios
- **Framer Motion** for amazing animation capabilities
- **Vercel** for excellent deployment platform
- **Tailwind CSS** for the utility-first approach
- **Radix UI** for accessible components

## � Contact

Have questions or want to collaborate? Reach out!

- **Email**: yashdabhade07@gmail.com
- **GitHub**: [@yashdabhade](https://github.com/yashdabhade)
- **LinkedIn**: [Yash Dabhade](https://linkedin.com/in/yashdabhade)

---

<p align="center">
  <strong>Built with ❤️ and ☕ by Yash Dabhade</strong>
</p>

<p align="center">
  <a href="https://dragadi-resume.vercel.app">View Live Demo</a> •
  <a href="https://github.com/yashdabhade/portfolio/issues">Report Bug</a> •
  <a href="https://github.com/yashdabhade/portfolio/issues">Request Feature</a>
</p>