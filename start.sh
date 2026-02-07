#!/bin/bash

# Vegalta Sendai Fan Site - Startup Script
# This script starts the local development server

cd "$(dirname "$0")"

echo "🟡 Starting Vegalta Sendai Fan Site..."
echo "📂 Directory: $(pwd)"

# Check if node is installed
if ! command -v npx &> /dev/null; then
    echo "❌ Error: npx is not installed. Please install Node.js first."
    exit 1
fi

echo "🚀 Starting server on http://localhost:3000"
echo "Press Ctrl+C to stop the server."
echo ""

npx -y serve . -l 3000
