# 🚀 Modern Portfolio Website

A fully responsive, high-performance portfolio website built with cutting-edge technologies. Showcasing projects, skills, and experience with stunning animations and modern UI/UX design.

[![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

## ✨ Features

- **🎨 Modern Design**: Clean, professional, and visually appealing interface
- **📱 Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **🌙 Dark/Light Mode**: Seamless theme switching with system preference detection
- **⚡ Performance Optimized**: Lighthouse score 95+ with fast loading times
- **🎯 SEO Optimized**: Meta tags, Open Graph, and structured data
- **♿ Accessible**: WCAG 2.1 AA compliant with keyboard navigation
- **🎬 Smooth Animations**: Framer Motion powered interactions and transitions
- **📊 Interactive Skills**: Animated progress bars and filterable categories
- **💼 Project Showcase**: Featured projects with live demos and source code
- **📧 Contact Form**: Functional contact form with email integration
- **🔍 Type Safety**: Full TypeScript implementation for better development experience

## 🛠️ Tech Stack

### Core Technologies
- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

### UI Components & Design
- **Component Library**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Inter & JetBrains Mono (Google Fonts)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)

### Development Tools
- **Linting**: ESLint with Next.js config
- **Code Formatting**: Prettier (via ESLint)
- **Utilities**: clsx, tailwind-merge
- **Package Manager**: npm/yarn/pnpm

## 🚀 Quick Start

### Prerequisites
- Node.js 18.0 or later
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dragaditya/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js 14 App Router
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout with providers
│   └── page.tsx           # Homepage with all sections
├── components/            # Reusable UI components
│   ├── sections/         # Page sections
│   │   ├── hero.tsx      # Hero section with typewriter effect
│   │   ├── about.tsx     # About section with stats
│   │   ├── skills.tsx    # Skills with progress bars
│   │   ├── projects.tsx  # Project showcase
│   │   ├── experience.tsx # Timeline experience
│   │   └── contact.tsx   # Contact form
│   ├── ui/               # shadcn/ui components
│   ├── navbar.tsx        # Navigation with scroll effects
│   ├── footer.tsx        # Footer component
│   └── theme-provider.tsx # Theme context provider
├── data/                 # Static data and configurations
│   └── portfolio.ts      # Personal info, projects, skills data
├── lib/                  # Utility functions
│   └── utils.ts          # Helper functions (cn, formatDate, etc.)
├── public/               # Static assets
│   ├── images/           # Project images and photos
│   ├── icons/            # Favicons and app icons
│   └── resume.pdf        # Downloadable resume
└── styles/               # Additional stylesheets
```

## 🎨 Customization

### Personal Information
Edit the data in `data/portfolio.ts`:

```typescript
export const personalInfo: PersonalInfo = {
  name: "Your Name",
  title: "Your Title",
  description: "Your description...",
  location: "Your Location",
  email: "your.email@example.com",
  phone: "+1234567890",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  resume: "/your-resume.pdf"
}
```

### Projects
Add your projects to the `projects` array:

```typescript
export const projects: Project[] = [
  {
    id: "project-id",
    title: "Project Title",
    description: "Short description",
    longDescription: "Detailed description",
    technologies: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://your-project.com",
    githubUrl: "https://github.com/you/project",
    featured: true,
    status: "completed",
    year: 2024
  }
]
```

### Skills
Update your skills with proficiency levels:

```typescript
export const skills: Skill[] = [
  { name: "JavaScript", category: "Languages", level: 90 },
  { name: "React", category: "Frameworks", level: 85 },
  // Add more skills...
]
```

### Styling
- **Colors**: Modify theme colors in `tailwind.config.js`
- **Fonts**: Change fonts in `app/layout.tsx`
- **Animations**: Customize in `tailwind.config.js` and component files

## 🌐 Deployment

### Deploy on Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com/)
   - Import your GitHub repository
   - Configure build settings (auto-detected)
   - Deploy!

### Other Platforms

- **Netlify**: Drag and drop the `out` folder after running `npm run build`
- **AWS Amplify**: Connect your GitHub repository
- **Firebase Hosting**: Use Firebase CLI to deploy

## ⚡ Performance Optimization

- **Image Optimization**: Use Next.js Image component for automatic optimization
- **Code Splitting**: Automatic with Next.js App Router
- **Bundle Analysis**: Run `npm run build` to see bundle sizes
- **Lighthouse Score**: Consistently achieves 95+ scores

## 📱 Browser Support

- **Chrome**: ✅ Latest 2 versions
- **Firefox**: ✅ Latest 2 versions
- **Safari**: ✅ Latest 2 versions
- **Edge**: ✅ Latest 2 versions
- **Mobile**: ✅ iOS Safari, Chrome Mobile

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Design Inspiration**: [leerob.io](https://leerob.io), [brittanychiang.com](https://brittanychiang.com)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

## 📧 Contact

- **Email**: waghaditya312@gmail.com
- **LinkedIn**: [dragaditya](https://linkedin.com/in/dragaditya)
- **GitHub**: [dragaditya](https://github.com/dragaditya)

---

**⭐ Star this repository if you found it helpful!**