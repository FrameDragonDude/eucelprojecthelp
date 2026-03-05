@echo off
echo ========================================
echo   EUCEL Website - Quick Deploy Script
echo ========================================
echo.

echo [1/3] Copying images...
xcopy picture public\picture /E /I /Y >nul 2>&1
echo ✓ Images copied to public folder

echo.
echo [2/3] Building project...
call npm run build
if %errorlevel% neq 0 (
    echo ✗ Build failed!
    pause
    exit /b 1
)
echo ✓ Build completed

echo.
echo [3/3] Your website is ready!
echo.
echo ========================================
echo   NEXT STEPS - Choose one:
echo ========================================
echo.
echo Option 1: NETLIFY (Easiest - Drag and Drop)
echo   1. Visit: https://app.netlify.com/drop
echo   2. Drag the 'build' folder to the website
echo   3. Done! You'll get a URL like: https://eucel.netlify.app
echo.
echo Option 2: VERCEL (Fast)
echo   Run: npm install -g vercel
echo   Then: vercel --prod
echo.
echo Option 3: NGROK (Quick demo - temporary URL)
echo   1. Keep 'npm start' running
echo   2. Download: https://ngrok.com/download
echo   3. Run: ngrok http 3000
echo.
echo ========================================
pause
