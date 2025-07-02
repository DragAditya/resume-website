#!/bin/bash

# Modern Portfolio Website Setup Script
# This script will install all dependencies and set up the project

echo "🚀 Setting up your Modern Portfolio Website..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18.0 or later."
    echo "Visit: https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18.0 or later is required. Current version: $(node -v)"
    echo "Please update Node.js: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
npm install

# Check if installation was successful
if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
else
    echo "❌ Failed to install dependencies. Please check your internet connection and try again."
    exit 1
fi

# Create public directory and placeholder files
echo ""
echo "📁 Setting up public directory..."
mkdir -p public

# Create favicon placeholder
if [ ! -f "public/favicon.ico" ]; then
    echo "📄 Creating favicon placeholder..."
    # This is a simple 16x16 pixel favicon data URL converted to a file
    # In a real project, you'd replace this with your actual favicon
    touch public/favicon.ico
fi

# Create resume placeholder
if [ ! -f "public/resume.pdf" ]; then
    echo "📄 Creating resume placeholder..."
    echo "Replace this file with your actual resume" > public/resume.pdf
fi

# Create robots.txt
if [ ! -f "public/robots.txt" ]; then
    echo "🤖 Creating robots.txt..."
    cat > public/robots.txt << EOF
User-agent: *
Allow: /

Sitemap: https://your-domain.com/sitemap.xml
EOF
fi

# Create manifest.json
if [ ! -f "public/manifest.json" ]; then
    echo "📱 Creating manifest.json..."
    cat > public/manifest.json << EOF
{
  "name": "Aditya Wagh - Portfolio",
  "short_name": "Portfolio",
  "description": "Modern portfolio website showcasing projects and skills",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#000000",
  "theme_color": "#3b82f6",
  "icons": [
    {
      "src": "/favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    }
  ]
}
EOF
fi

echo ""
echo "🎉 Setup completed successfully!"
echo ""
echo "📋 Next steps:"
echo "1. Customize your information in data/portfolio.ts"
echo "2. Add your resume to public/resume.pdf"
echo "3. Replace favicon in public/favicon.ico"
echo "4. Run 'npm run dev' to start the development server"
echo "5. Open http://localhost:3000 in your browser"
echo ""
echo "🚀 Ready to build your amazing portfolio!"
echo ""
echo "📚 For more information, check the README.md file"