#!/bin/bash

# 🚀 Premium Portfolio Setup Script v2.0
# This script sets up your enhanced portfolio with all dependencies and configurations

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Emojis
ROCKET="🚀"
SPARKLES="✨"
CHECK="✅"
WARNING="⚠️"
INFO="ℹ️"
GEAR="⚙️"

echo -e "${PURPLE}${ROCKET} Premium Portfolio Setup v2.0${NC}"
echo -e "${CYAN}==============================================${NC}"
echo ""

# Function to print status messages
print_status() {
    echo -e "${GREEN}${CHECK} $1${NC}"
}

print_info() {
    echo -e "${BLUE}${INFO} $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}${WARNING} $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_section() {
    echo ""
    echo -e "${PURPLE}${GEAR} $1${NC}"
    echo -e "${CYAN}----------------------------------------${NC}"
}

# Check if Node.js is installed
check_node() {
    print_section "Checking Node.js Installation"
    
    if command -v node &> /dev/null; then
        NODE_VERSION=$(node --version)
        print_status "Node.js is installed: $NODE_VERSION"
        
        # Check if version is 18 or higher
        MAJOR_VERSION=$(echo $NODE_VERSION | cut -d'.' -f1 | sed 's/v//')
        if [ "$MAJOR_VERSION" -ge 18 ]; then
            print_status "Node.js version is compatible (18+)"
        else
            print_error "Node.js version $NODE_VERSION is too old. Please install Node.js 18 or higher."
            exit 1
        fi
    else
        print_error "Node.js is not installed. Please install Node.js 18 or higher from https://nodejs.org/"
        exit 1
    fi
}

# Check if npm is installed
check_npm() {
    if command -v npm &> /dev/null; then
        NPM_VERSION=$(npm --version)
        print_status "npm is installed: v$NPM_VERSION"
    else
        print_error "npm is not installed. Please install npm."
        exit 1
    fi
}

# Install dependencies
install_dependencies() {
    print_section "Installing Dependencies"
    print_info "Installing production and development dependencies..."
    print_warning "This may take a few minutes..."
    
    if npm install; then
        print_status "Dependencies installed successfully!"
    else
        print_error "Failed to install dependencies. Please check your internet connection and try again."
        exit 1
    fi
}

# Create environment file
create_env_file() {
    print_section "Setting up Environment Configuration"
    
    if [ ! -f ".env.local" ]; then
        print_info "Creating .env.local file..."
        cat > .env.local << EOF
# 🚀 Premium Portfolio Environment Configuration

# Analytics (Optional)
# NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Contact Form (Optional - for EmailJS integration)
# NEXT_PUBLIC_EMAILJS_SERVICE_ID=your-service-id
# NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your-template-id
# NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your-public-key

# Performance Monitoring (Optional)
# NEXT_PUBLIC_VERCEL_ANALYTICS=true

# Development
NODE_ENV=development
EOF
        print_status "Environment file created: .env.local"
        print_warning "Remember to update .env.local with your actual values"
    else
        print_info "Environment file already exists"
    fi
}

# Create necessary directories
create_directories() {
    print_section "Creating Project Directories"
    
    directories=("public/images" "public/icons" "public/documents")
    
    for dir in "${directories[@]}"; do
        if [ ! -d "$dir" ]; then
            mkdir -p "$dir"
            print_status "Created directory: $dir"
        else
            print_info "Directory already exists: $dir"
        fi
    done
}

# Run type checking
run_type_check() {
    print_section "Running TypeScript Type Check"
    
    if npm run type-check; then
        print_status "TypeScript types are valid!"
    else
        print_warning "TypeScript type checking found issues. You may need to fix them."
    fi
}

# Run linting
run_linting() {
    print_section "Running Code Quality Checks"
    
    if npm run lint; then
        print_status "Code linting passed!"
    else
        print_warning "Linting found issues. Run 'npm run lint' to see details."
    fi
}

# Build the project
build_project() {
    print_section "Building Project"
    print_info "Running production build to verify everything works..."
    
    if npm run build; then
        print_status "Project built successfully!"
        print_info "Build artifacts created in .next directory"
    else
        print_error "Build failed. Please check the error messages above."
        exit 1
    fi
}

# Display next steps
show_next_steps() {
    print_section "Setup Complete! 🎉"
    
    echo ""
    echo -e "${GREEN}${SPARKLES} Your premium portfolio is ready!${NC}"
    echo ""
    echo -e "${CYAN}Next Steps:${NC}"
    echo -e "${YELLOW}1.${NC} Update your personal information in ${BLUE}data/portfolio.ts${NC}"
    echo -e "${YELLOW}2.${NC} Add your projects, skills, and experience data"
    echo -e "${YELLOW}3.${NC} Customize the design in ${BLUE}app/globals.css${NC}"
    echo -e "${YELLOW}4.${NC} Add your resume PDF to ${BLUE}public/documents/${NC}"
    echo -e "${YELLOW}5.${NC} Update environment variables in ${BLUE}.env.local${NC}"
    echo ""
    echo -e "${CYAN}Development Commands:${NC}"
    echo -e "${YELLOW}•${NC} ${BLUE}npm run dev${NC}      - Start development server"
    echo -e "${YELLOW}•${NC} ${BLUE}npm run build${NC}    - Build for production"
    echo -e "${YELLOW}•${NC} ${BLUE}npm run start${NC}    - Start production server"
    echo -e "${YELLOW}•${NC} ${BLUE}npm run lint${NC}     - Run code linting"
    echo -e "${YELLOW}•${NC} ${BLUE}npm run format${NC}   - Format code with Prettier"
    echo ""
    echo -e "${GREEN}🌐 Start development server:${NC} ${BLUE}npm run dev${NC}"
    echo -e "${GREEN}🚀 Deploy on Vercel:${NC} Connect your Git repository to Vercel"
    echo ""
    echo -e "${PURPLE}${ROCKET} Happy coding! Your portfolio will impress everyone! ${SPARKLES}${NC}"
}

# Main execution
main() {
    check_node
    check_npm
    install_dependencies
    create_env_file
    create_directories
    run_type_check
    run_linting
    build_project
    show_next_steps
}

# Run the setup
main

exit 0