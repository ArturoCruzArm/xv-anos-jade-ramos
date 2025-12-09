@echo off
echo ======================================
echo  CONFIGURACION INICIAL - GITHUB CLI
echo  XV Años Jade Ramos
echo ======================================
echo.

REM Verificar si gh está instalado
where gh >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] GitHub CLI no esta instalado.
    echo.
    echo Descarga e instala desde: https://cli.github.com/
    echo.
    pause
    exit /b 1
)

echo Verificando autenticacion de GitHub CLI...
gh auth status
if %errorlevel% neq 0 (
    echo.
    echo Necesitas autenticarte con GitHub CLI.
    echo Ejecutando: gh auth login
    echo.
    gh auth login
)

echo.
echo ======================================
echo  INICIALIZANDO REPOSITORIO
echo ======================================
echo.

REM Inicializar git si no existe
if not exist ".git" (
    echo Inicializando repositorio Git...
    git init
    echo.
)

REM Agregar archivos
echo Agregando archivos...
git add .
echo.

REM Crear primer commit
echo Creando commit inicial...
git commit -m "Invitacion web - XV Anos de Jade Ramos - San Valentin 2025"
echo.

REM Cambiar a rama main
echo Configurando rama principal...
git branch -M main
echo.

echo ======================================
echo  CREANDO REPOSITORIO EN GITHUB
echo ======================================
echo.

echo Opciones de visibilidad:
echo 1. Publico (recomendado para GitHub Pages)
echo 2. Privado
echo.
set /p visibility="Selecciona (1 o 2): "

if "%visibility%"=="2" (
    set repo_visibility=--private
) else (
    set repo_visibility=--public
)

echo.
echo Creando repositorio en GitHub...
gh repo create xv-anos-jade-ramos %repo_visibility% --source=. --remote=origin --description="Invitacion web para los XV Anos de Jade Ramos - 14 de Febrero, 2025"

if %errorlevel% neq 0 (
    echo.
    echo [ERROR] No se pudo crear el repositorio.
    echo Puede que ya exista. Intenta con: gh repo view xv-anos-jade-ramos
    pause
    exit /b 1
)

echo.
echo Subiendo codigo a GitHub...
git push -u origin main

echo.
echo ======================================
echo  HABILITANDO GITHUB PAGES
echo ======================================
echo.

echo Configurando GitHub Pages...
gh api repos/:owner/xv-anos-jade-ramos/pages -X POST -f source[branch]=main -f source[path]=/

if %errorlevel% neq 0 (
    echo.
    echo [NOTA] No se pudo habilitar Pages automaticamente.
    echo Puedes habilitarlo manualmente en:
    echo https://github.com/[TU-USUARIO]/xv-anos-jade-ramos/settings/pages
)

echo.
echo ======================================
echo  CONFIGURACION COMPLETADA!
echo ======================================
echo.
echo Tu repositorio:
gh repo view xv-anos-jade-ramos --web
echo.
echo Tu sitio web estara disponible en unos minutos en:
echo https://[TU-USUARIO].github.io/xv-anos-jade-ramos/
echo.
echo Para ver el estado de GitHub Pages:
echo gh repo view xv-anos-jade-ramos --web
echo Y ve a Settings ^> Pages
echo.
pause
