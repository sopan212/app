@echo off
echo ========================================
echo   Deploy KGM Press ke Hostinger
echo ========================================
echo.

echo [1/4] Building aplikasi...
call yarn build
if %errorlevel% neq 0 (
    echo ERROR: Build gagal!
    pause
    exit /b 1
)
echo ✓ Build berhasil!
echo.

echo [2/4] Checking .htaccess...
if not exist "dist\.htaccess" (
    echo Copying .htaccess...
    copy "public\.htaccess" "dist\.htaccess"
)
echo ✓ .htaccess OK!
echo.

echo [3/4] Creating ZIP file...
powershell -Command "Compress-Archive -Path dist\* -DestinationPath hostinger-deploy-supabase.zip -Force"
if %errorlevel% neq 0 (
    echo ERROR: Gagal membuat ZIP!
    pause
    exit /b 1
)
echo ✓ ZIP file created: hostinger-deploy-supabase.zip
echo.

echo [4/4] Deploy siap!
echo.
echo ========================================
echo   LANGKAH SELANJUTNYA:
echo ========================================
echo 1. Login ke Hostinger hPanel
echo 2. Buka File Manager
echo 3. Upload file: hostinger-deploy-supabase.zip
echo 4. Extract file ZIP
echo 5. Test website: https://kgmpress.com
echo.
echo File siap: hostinger-deploy-supabase.zip
echo ========================================
pause
