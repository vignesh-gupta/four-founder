#!/bin/bash

# Four Founders Garlic Company - Deployment Script
# This script builds the project and prepares it for deployment

echo "🧄 Four Founders Garlic Company - Building for Production"
echo "=================================================="

# Check if pnpm is available
if ! command -v pnpm &> /dev/null; then
    echo "❌ pnpm not found. Please install pnpm first."
    echo "   npm install -g pnpm"
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
pnpm install

# Run linting
echo "🔍 Running linting checks..."
pnpm lint

# Build the project
echo "🔨 Building project..."
pnpm build

# Check if build was successful
if [ -d "dist" ]; then
    echo "✅ Build successful! Files are ready in 'dist' folder."
    echo ""
    echo "📁 Deployment files:"
    ls -la dist/
    echo ""
    echo "🌐 Deploy options:"
    echo "   • Vercel: Connect GitHub repo to Vercel"
    echo "   • Netlify: Drag & drop 'dist' folder to Netlify"
    echo "   • Manual: Upload 'dist' folder to your web server"
    echo ""
    echo "🚀 Preview build locally:"
    echo "   pnpm preview"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi