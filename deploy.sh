#!/bin/bash

# Vision Defence Security - Deployment Script
# For Pacific Hosting (pacific.us.hostns.io)

echo "🚀 Starting deployment process..."

# Check if build exists
if [ ! -d ".next" ]; then
    echo "📦 Creating production build..."
    npm run build
fi

echo "📁 Files to upload:"
echo "   - .next/ (Next.js build output)"
echo "   - public/ (static assets)"
echo "   - package.json"
echo "   - next.config.js"
echo "   - tailwind.config.js"
echo "   - tsconfig.json"

echo ""
echo "🌐 Upload Instructions:"
echo "1. Upload entire 'lionheart-security' folder to your hosting server"
echo "2. Set Application Root to: lionheart-security/"
echo "3. Set Application URL to: https://visiondefencesecurity.co.uk/"
echo "4. Ensure Node.js 18+ is available on server"
echo ""
echo "✅ Deployment ready!"
echo "🌐 Your site will be live at: https://visiondefencesecurity.co.uk/"
