# Aditya Wagh - Resume Website

A modern, responsive single-page resume website replicating the design from dragadi-resume.vercel.app with enhanced features and cross-device compatibility.

## Features

- **Modern Design**: Clean, professional layout with dark theme
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive Elements**: Smooth animations, hover effects, and transitions
- **Enhanced UX**: Typing effect, parallax scrolling, and smooth navigation
- **Accessibility**: Semantic HTML structure and keyboard navigation support
- **Performance Optimized**: Fast loading with efficient CSS and JavaScript

## Technologies Used

- HTML5 (Semantic markup)
- CSS3 (Flexbox, Grid, Animations, Media Queries)
- JavaScript (ES6+, Intersection Observer API, Touch gestures)
- Font Awesome Icons
- Google Fonts (Inter)

## File Structure

```
dragadi-resume-replica/
├── index.html          # Main HTML file
├── style.css           # Stylesheet with responsive design
├── script.js           # JavaScript for interactivity
└── README.md           # This file
```

## Key Features Implemented

### 1. Responsive Design
- Mobile-first approach with breakpoints at 768px and 480px
- Two-column layout on desktop, single-column on mobile
- Flexible typography and spacing

### 2. Interactive Elements
- Typing effect for the main name
- Scroll-triggered animations
- Hover effects on all interactive elements
- Theme toggle button (dark/light mode)
- Touch gesture support for mobile navigation

### 3. Enhanced User Experience
- Smooth scrolling between sections
- Parallax effect on header
- Progressive loading for better performance
- Custom scrollbar styling
- Keyboard shortcuts (T for theme toggle, H for home)

### 4. Modern CSS Features
- CSS Grid and Flexbox for layout
- CSS Custom Properties (variables)
- Advanced selectors and pseudo-elements
- Gradient backgrounds and borders
- Box shadows and backdrop filters

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Deployment Options

### Option 1: Static File Hosting
1. Upload all files to any static hosting service:
   - Netlify
   - Vercel
   - GitHub Pages
   - Firebase Hosting

### Option 2: Local Development Server
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

### Option 3: Direct File Access
Simply open `index.html` in any modern web browser.

## Customization

### Colors
The color scheme can be modified by updating the CSS custom properties in `style.css`:

```css
:root {
  --primary-color: #4a9eff;
  --secondary-color: #00d4ff;
  --background-color: #1a1a1a;
  --text-color: #ffffff;
}
```

### Content
Update the content in `index.html` to reflect your own information:
- Personal details in the header section
- Background information
- Education details
- Work experience
- Projects
- Skills

### Styling
Modify `style.css` to adjust:
- Typography (fonts, sizes, weights)
- Spacing (margins, padding)
- Layout (grid columns, flexbox properties)
- Colors and gradients
- Animations and transitions

## Performance Optimizations

- Optimized CSS with efficient selectors
- Minimal JavaScript with event delegation
- Lazy loading for images (if added)
- Compressed and minified assets ready for production
- Efficient use of CSS Grid and Flexbox

## Accessibility Features

- Semantic HTML5 structure
- Proper heading hierarchy
- Alt text for images (when added)
- Keyboard navigation support
- High contrast color scheme
- Responsive text sizing

## Browser Testing

The website has been tested and optimized for:
- Desktop (1920x1080, 1366x768)
- Tablet (768x1024, 1024x768)
- Mobile (375x667, 414x896, 360x640)

## License

This project is open source and available under the MIT License.

## Credits

- Original design inspiration: dragadi-resume.vercel.app
- Icons: Font Awesome
- Fonts: Google Fonts (Inter)
- Development: Enhanced with modern web technologies

