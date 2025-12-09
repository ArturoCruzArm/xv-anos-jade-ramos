# 🚀 Guía Rápida: GitHub CLI para XV Años

Esta guía te explica cómo usar GitHub CLI (`gh`) para publicar la invitación web de Jade Ramos.

---

## 📦 Instalación de GitHub CLI

### Windows

1. Descarga desde: https://cli.github.com/
2. Ejecuta el instalador
3. Reinicia tu terminal/PowerShell

**O con winget:**
```bash
winget install GitHub.cli
```

**O con Chocolatey:**
```bash
choco install gh
```

### Verificar instalación

```bash
gh --version
```

Deberías ver algo como: `gh version 2.x.x`

---

## 🔐 Primera vez: Autenticación

Si es la primera vez usando GitHub CLI:

```bash
gh auth login
```

Sigue estos pasos:
1. **Account:** GitHub.com
2. **Protocol:** HTTPS
3. **Authenticate:** Login with a web browser
4. Se abrirá tu navegador
5. Autoriza la aplicación

---

## 🎯 Publicación Súper Fácil

### Opción 1: Script Automático (Recomendado)

**Solo haz doble click en:**
```
setup-github.bat
```

¡Eso es todo! El script hace TODO por ti:
- ✅ Inicializa Git
- ✅ Crea el repositorio
- ✅ Sube el código
- ✅ Configura GitHub Pages
- ✅ Abre el sitio

---

### Opción 2: Comandos Manual

Si prefieres escribir los comandos:

```bash
# 1. Ir a la carpeta del proyecto
cd D:\eventos\xv-anos-jade-ramos

# 2. Inicializar Git
git init
git add .
git commit -m "Invitación web XV Años Jade Ramos"
git branch -M main

# 3. Crear repositorio y subir (TODO EN UNO)
gh repo create xv-anos-jade-ramos --public --source=. --remote=origin --push --description="Invitación web para los XV Años de Jade Ramos - 14 de Febrero, 2025"

# 4. Habilitar GitHub Pages
gh api repos/:owner/xv-anos-jade-ramos/pages -X POST -f source[branch]=main -f source[path]=/

# 5. Abrir el repo en navegador
gh repo view --web
```

**¡Listo!** Tu sitio estará en:
```
https://[TU-USUARIO].github.io/xv-anos-jade-ramos/
```

---

## 🔄 Actualizar el Sitio (Después de cambios)

### Método 1: Script

```
Doble click en: push-to-github.bat
```

### Método 2: Comandos

```bash
cd D:\eventos\xv-anos-jade-ramos
git add .
git commit -m "Actualización: [describe tus cambios]"
git push origin main
```

---

## 📋 Comandos Útiles de GitHub CLI

### Ver información del repositorio
```bash
gh repo view
```

### Abrir repositorio en navegador
```bash
gh repo view --web
```

### Ver el sitio de GitHub Pages
```bash
# Primero obtén tu usuario
gh api user -q .login

# Luego abre:
# https://[TU-USUARIO].github.io/xv-anos-jade-ramos/
```

### Ver estado de GitHub Pages
```bash
gh api repos/:owner/xv-anos-jade-ramos/pages
```

### Ver workflows (builds)
```bash
gh run list
```

### Ver logs del último workflow
```bash
gh run view
```

### Clonar el repo en otra computadora
```bash
gh repo clone xv-anos-jade-ramos
```

---

## 🆘 Solución de Problemas

### Error: "gh: command not found"

**Solución:** Reinstala GitHub CLI y reinicia tu terminal.

### Error: "not logged in to github.com"

**Solución:**
```bash
gh auth login
```

### Error: "repository already exists"

El repo ya está creado. Solo haz:
```bash
git remote add origin https://github.com/[TU-USUARIO]/xv-anos-jade-ramos.git
git push -u origin main
```

### GitHub Pages no se activa

**Solución manual:**
1. Ve a: https://github.com/[TU-USUARIO]/xv-anos-jade-ramos/settings/pages
2. Source: selecciona "main" branch
3. Carpeta: / (root)
4. Save

### El sitio no se actualiza

1. Verifica que los cambios se subieron:
```bash
gh repo view --web
```

2. Ve a la pestaña "Actions" y verifica que el workflow terminó

3. Espera 1-2 minutos y actualiza tu navegador (Ctrl + F5)

---

## 🎨 Flujo de Trabajo Recomendado

### 1. Configuración Inicial (Una sola vez)
```bash
# Ejecutar el script
setup-github.bat
```

### 2. Actualizaciones Frecuentes
```bash
# Editar archivos (index.html, css, js, etc.)
# Luego ejecutar:
push-to-github.bat
```

### 3. Verificar Cambios
```bash
# Abrir sitio en navegador
gh repo view --web
# Ir a la URL: https://[usuario].github.io/xv-anos-jade-ramos/
```

---

## 📊 Ejemplo Completo: Primera Publicación

```bash
# 1. Abrir PowerShell en la carpeta del proyecto
cd D:\eventos\xv-anos-jade-ramos

# 2. Verificar que gh está instalado
gh --version

# 3. Autenticarse (si es necesario)
gh auth status
# Si no estás autenticado:
gh auth login

# 4. Publicar el sitio (TODO EN UNO)
gh repo create xv-anos-jade-ramos --public --source=. --remote=origin --push

# 5. Habilitar Pages
gh api repos/:owner/xv-anos-jade-ramos/pages -X POST -f source[branch]=main -f source[path]=/

# 6. Ver resultado
gh repo view --web
```

---

## 📊 Ejemplo: Actualizar Después de la Sesión

Después de la sesión del 9 de diciembre:

```bash
# 1. Agregar fotos a la carpeta images/
# Copiar: sesion-foto1.jpg, sesion-foto2.jpg, etc. a images/

# 2. Actualizar index.html
# Descomentar sección de galería
# Agregar nombres de padres

# 3. Subir cambios
cd D:\eventos\xv-anos-jade-ramos
git add .
git commit -m "Agregadas fotos de sesión y nombres de padres"
git push origin main

# 4. Verificar
gh repo view --web
# Esperar 1-2 minutos y ver: https://[usuario].github.io/xv-anos-jade-ramos/
```

---

## 💡 Tips Pro

### Ver estadísticas del sitio
```bash
gh api repos/:owner/xv-anos-jade-ramos/traffic/views
```

### Crear un release
```bash
gh release create v1.0 --title "Invitación XV Años Jade" --notes "Versión inicial"
```

### Agregar colaboradores
```bash
gh api repos/:owner/xv-anos-jade-ramos/collaborators/[USUARIO] -X PUT
```

### Hacer backup
```bash
gh repo clone xv-anos-jade-ramos D:\backup\jade-web-backup
```

---

## 📞 Soporte

**Producciones Foro 7**
- WhatsApp: 477-920-3776
- Email: foro7producciones@gmail.com

**GitHub CLI Docs:**
- https://cli.github.com/manual/

---

*Última actualización: 9 de Diciembre, 2024*
