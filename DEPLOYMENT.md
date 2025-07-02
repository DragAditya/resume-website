# 🚀 Deployment Guide

This guide will help you deploy your modern portfolio website to various hosting platforms.

## Prerequisites

- Your project should be pushed to a Git repository (GitHub, GitLab, etc.)
- All dependencies should be installed (`npm install`)
- The project should build successfully (`npm run build`)

## Deployment Platforms

### 1. 🔥 Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications and offers excellent performance.

#### Method 1: Automatic Deployment (GitHub)

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com/)
   - Sign up/login with your GitHub account
   - Click "New Project"
   - Import your portfolio repository

2. **Configure Settings**
   - Framework Preset: Next.js (auto-detected)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)

3. **Environment Variables** (if needed)
   - Add any environment variables in the Vercel dashboard
   - For contact forms, you might need email service API keys

4. **Deploy**
   - Click "Deploy"
   - Your site will be live in ~2 minutes
   - Automatic deployments on every push to main branch

#### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
vercel

# Follow the prompts
```

#### Custom Domain
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. SSL certificate is automatically provisioned

---

### 2. 🌐 Netlify

Great alternative with similar ease of use.

#### Automatic Deployment

1. **Connect Repository**
   - Go to [netlify.com](https://netlify.com/)
   - Sign up/login
   - Click "New site from Git"
   - Choose your repository

2. **Build Settings**
   - Build command: `npm run build && npm run export`
   - Publish directory: `out`
   - Node version: 18 (in Environment variables)

3. **Deploy**
   - Click "Deploy site"
   - Site will be live with auto-deployments

#### Manual Deployment
```bash
# Build the project
npm run build
npm run export

# Upload the 'out' folder to Netlify
```

---

### 3. ☁️ AWS Amplify

Perfect for AWS ecosystem integration.

#### Steps:
1. Go to AWS Amplify Console
2. Choose "Host web app"
3. Connect your Git repository
4. Configure build settings:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```
5. Deploy

---

### 4. 🔥 Firebase Hosting

Google's hosting solution with excellent performance.

#### Setup:
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase in your project
firebase init hosting

# Build the project
npm run build
npm run export

# Deploy
firebase deploy
```

#### Firebase Configuration (firebase.json):
```json
{
  "hosting": {
    "public": "out",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "headers": [
      {
        "source": "**/*.@(jpg|jpeg|gif|png|svg|webp|js|css)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "max-age=31536000"
          }
        ]
      }
    ]
  }
}
```

---

### 5. 🌊 DigitalOcean App Platform

Simple deployment with managed infrastructure.

#### Steps:
1. Go to DigitalOcean App Platform
2. Create new app from GitHub
3. Configure:
   - Source: Your repository
   - Branch: main
   - Build Command: `npm run build`
   - Run Command: `npm start`
4. Deploy

---

## Environment Variables

If your portfolio includes features that require API keys:

### Contact Form (EmailJS/Formspree)
```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### Analytics (Google Analytics)
```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### GitHub API (for dynamic repositories)
```bash
GITHUB_TOKEN=your_github_token
```

## Performance Optimization

### Before Deployment:

1. **Optimize Images**
   ```bash
   # Add optimized images to public/images/
   # Use Next.js Image component for automatic optimization
   ```

2. **Audit Performance**
   ```bash
   npm run build
   npm run start
   # Test with Lighthouse in Chrome DevTools
   ```

3. **Check Bundle Size**
   ```bash
   npm run build
   # Check .next/static/chunks/ for large bundles
   ```

### CDN Configuration:

Most platforms automatically handle CDN, but for custom setups:
- Enable Gzip compression
- Set proper cache headers
- Use WebP images where possible
- Minify CSS/JS (handled by Next.js)

## SSL and Security

All recommended platforms provide:
- ✅ Free SSL certificates
- ✅ Automatic HTTPS redirect
- ✅ Security headers
- ✅ DDoS protection

## Custom Domain Setup

### DNS Configuration:
1. **A Record**: Point to hosting provider's IP
2. **CNAME**: www subdomain to main domain
3. **MX Records**: For email (if applicable)

### Common DNS Records:
```
Type: A
Name: @
Value: [Your hosting provider's IP]

Type: CNAME
Name: www
Value: your-domain.com

Type: CNAME
Name: *
Value: your-domain.com (for subdomains)
```

## Monitoring and Analytics

### Recommended Tools:
- **Google Analytics 4**: User behavior tracking
- **Google Search Console**: SEO monitoring
- **Vercel Analytics**: Performance insights
- **Sentry**: Error tracking

### Setup Analytics:
```bash
# Install analytics package
npm install @next/third-parties

# Add to app/layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-XYZ" />
    </html>
  )
}
```

## Troubleshooting

### Common Issues:

1. **Build Errors**
   ```bash
   # Clear Next.js cache
   rm -rf .next
   npm run build
   ```

2. **Dependencies Issues**
   ```bash
   # Clean install
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Import Path Errors**
   - Check TypeScript path mapping in `tsconfig.json`
   - Ensure consistent import paths

4. **Hydration Errors**
   - Use `useEffect` for client-side only code
   - Add `suppressHydrationWarning` if needed

### Performance Issues:

1. **Large Bundle Size**
   - Use dynamic imports for heavy components
   - Optimize images and fonts
   - Remove unused dependencies

2. **Slow Loading**
   - Enable image optimization
   - Use static generation where possible
   - Implement proper caching

## Backup and Recovery

### Automated Backups:
- Git repository serves as code backup
- Most platforms provide automatic database backups
- Consider exporting analytics data regularly

### Manual Backup:
```bash
# Export static site
npm run build
npm run export
# Backup the 'out' folder
```

## Cost Considerations

| Platform | Free Tier | Paid Plans Start |
|----------|-----------|------------------|
| Vercel | ✅ Generous | $20/month |
| Netlify | ✅ 100GB bandwidth | $19/month |
| Firebase | ✅ Spark plan | $25/month |
| AWS Amplify | ❌ Pay-as-you-go | ~$15/month |
| DigitalOcean | ❌ | $5/month |

## Next Steps After Deployment

1. **Set up monitoring** with analytics and error tracking
2. **Configure SEO** with proper meta tags and sitemap
3. **Test performance** with Lighthouse and PageSpeed Insights
4. **Set up automated backups** and update procedures
5. **Monitor costs** and optimize as needed

---

## 🎉 Congratulations!

Your modern portfolio website is now live! Remember to:
- Update your content regularly
- Monitor performance and user engagement
- Keep dependencies updated for security
- Gather feedback and iterate on improvements

For more help, check the [README.md](./README.md) or open an issue in the repository.