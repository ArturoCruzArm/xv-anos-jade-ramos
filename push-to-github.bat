@echo off
echo ======================================
echo  XV AÑOS JADE RAMOS - GITHUB DEPLOY
echo ======================================
echo.

REM Verificar si es repositorio git
if not exist ".git" (
    echo [ERROR] Este directorio no es un repositorio Git.
    echo.
    echo Ejecuta primero: setup-github.bat
    echo.
    pause
    exit /b
)

REM Verificar si gh está instalado
where gh >nul 2>nul
if %errorlevel% neq 0 (
    echo [ADVERTENCIA] GitHub CLI no esta instalado.
    echo Usando git tradicional...
    echo.
    set USE_GIT_ONLY=1
) else (
    set USE_GIT_ONLY=0
)

echo Verificando estado del repositorio...
git status --short
echo.

echo Agregando archivos...
git add .

echo.
set /p commit_message="Mensaje del commit (Enter para usar mensaje por defecto): "
if "%commit_message%"=="" set commit_message=Actualizacion de invitacion web - %date% %time%

echo.
echo Creando commit...
git commit -m "%commit_message%"

if %errorlevel% neq 0 (
    echo.
    echo [INFO] No hay cambios para commitear.
    pause
    exit /b 0
)

echo.
echo Subiendo cambios a GitHub...
git push origin main

if %errorlevel% neq 0 (
    echo.
    echo [ERROR] No se pudo subir los cambios.
    echo Intenta: git push -u origin main
    pause
    exit /b 1
)

echo.
echo ======================================
echo  DEPLOY COMPLETADO
echo ======================================
echo.

if %USE_GIT_ONLY%==0 (
    echo Abriendo repositorio en GitHub...
    timeout /t 2 >nul
    gh repo view --web
) else (
    echo Tu sitio estara disponible en:
    echo https://[TU-USUARIO].github.io/xv-anos-jade-ramos/
)

echo.
echo Los cambios estaran visibles en 1-2 minutos.
echo.
pause
