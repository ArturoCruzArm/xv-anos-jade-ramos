# 💕 XV Años de Jade Ramos

## Invitación Web - 14 de Febrero, 2025

Invitación digital para los XV Años de Jade Ramos en el Salón Extravaganza.

---

## 📅 Información del Evento

- **Quinceañera:** Jade Ramos
- **Fecha:** 14 de Febrero, 2025 (San Valentín)
- **Hora:** 5:00 PM
- **Lugar:** Salón Extravaganza
- **Dirección:** Blvr. Mariano Escobedo Pte. 4821, Cd Satélite, León, Gto.

---

## 🎨 Diseño

- **Tema:** San Valentín / Romántico
- **Colores:** Rojo (#c41e3a), Rosa (#ff69b4), Rosa claro (#ffc0cb)
- **Fuentes:**
  - Great Vibes (decorativa)
  - Playfair Display (títulos)
  - Cinzel (elegante)
  - Cormorant (cuerpo)

---

## 🚀 Publicación en GitHub Pages

### 🎯 Método Rápido: GitHub CLI (Recomendado)

#### Paso 1: Instalar GitHub CLI

Si no lo tienes instalado:
1. Descarga desde: https://cli.github.com/
2. Instala el programa
3. Reinicia tu terminal

#### Paso 2: Publicar el Sitio

**¡Es super fácil!** Solo doble click en:

```
setup-github.bat
```

Este script hará **TODO automáticamente**:
- ✅ Inicializa el repositorio Git
- ✅ Autentica con GitHub (si es necesario)
- ✅ Crea el repositorio en GitHub
- ✅ Sube todos los archivos
- ✅ Configura GitHub Pages
- ✅ Abre el sitio en tu navegador

**¡Listo en 2 minutos!** 🎉

---

### 📝 Método Manual (Alternativo)

Si prefieres hacerlo paso a paso:

#### Paso 1: Autenticación

```bash
gh auth login
```

Sigue las instrucciones en pantalla.

#### Paso 2: Crear y Publicar

```bash
cd D:\eventos\xv-anos-jade-ramos

# Inicializar repositorio
git init
git add .
git commit -m "Invitación web - Jade Ramos XV Años"
git branch -M main

# Crear repositorio en GitHub y subir código
gh repo create xv-anos-jade-ramos --public --source=. --remote=origin --push

# Habilitar GitHub Pages
gh api repos/:owner/xv-anos-jade-ramos/pages -X POST -f source[branch]=main -f source[path]=/

# Abrir en navegador
gh repo view --web
```

Tu sitio estará disponible en:
```
https://[TU-USUARIO].github.io/xv-anos-jade-ramos/
```

---

## 📝 Actualizaciones Pendientes

Después de la sesión fotográfica del **9 de diciembre, 2024**:

### 1. Información a Completar

En `index.html`, busca y reemplaza:

- `[Nombres de los padres]` → Nombres completos de los padres de Jade
- `[Formal / Elegante]` → Código de vestimenta exacto

### 2. Agregar Fotos de la Sesión

1. Optimiza las fotos (máx 1MB cada una)
2. Copia las fotos a `D:\eventos\xv-anos-jade-ramos\images\`
3. Descomenta la sección de galería en `index.html`:

```html
<div class="gallery-grid">
    <div class="gallery-item" data-aos="zoom-in" data-aos-delay="100">
        <img src="images/foto1.jpg" alt="Jade XV Años">
    </div>
    <!-- Agregar más fotos aquí -->
</div>
```

### 3. Agregar Música (Opcional)

1. Guarda el archivo MP3 en la carpeta principal
2. Descomenta en `index.html`:

```html
<audio id="backgroundMusic" loop preload="auto">
    <source src="jade-xv-anos.mp3" type="audio/mpeg">
</audio>
```

### 4. Agregar Video del Evento

Después del 14 de febrero, descomenta la sección de video y agrega el ID de YouTube:

```html
<iframe
    src="https://www.youtube.com/embed/VIDEO_ID?vq=hd1080&hd=1&rel=0&modestbranding=1"
    ...
</iframe>
```

---

## 🔄 Cómo Actualizar el Sitio

### Opción 1: Script Automático (Más Fácil) ⭐

1. Haz los cambios en los archivos
2. Doble click en `push-to-github.bat`
3. Ingresa mensaje del commit (o Enter para mensaje automático)
4. ¡Listo! El sitio se actualizará en 1-2 minutos

### Opción 2: GitHub CLI (Terminal)

```bash
cd D:\eventos\xv-anos-jade-ramos
git add .
git commit -m "Descripción de los cambios"
git push origin main

# Ver el sitio
gh repo view --web
```

### Opción 3: Comandos GitHub CLI Útiles

```bash
# Ver estado del repositorio
gh repo view

# Abrir en navegador
gh repo view --web

# Ver workflows de GitHub Pages
gh run list

# Ver logs si hay problemas
gh run view
```

---

## 📂 Estructura de Archivos

```
xv-anos-jade-ramos/
│
├── index.html              # Página principal
├── favicon.svg             # Ícono del sitio
├── push-to-github.bat      # Script para publicar
├── README-WEB.md           # Este archivo
│
├── css/
│   └── styles.css          # Estilos con tema San Valentín
│
├── js/
│   └── script.js           # Funcionalidad interactiva
│
└── images/                 # Fotos de la sesión (agregar después)
```

---

## ✨ Características

- ✅ Diseño responsive (móvil, tablet, desktop)
- ✅ Animaciones suaves (AOS library)
- ✅ Partículas de fondo (corazones y círculos)
- ✅ Contador regresivo en tiempo real
- ✅ Mapa interactivo de Google Maps
- ✅ Botón de WhatsApp para confirmaciones
- ✅ Reproductor de música (cuando se agregue audio)
- ✅ Galería de fotos (cuando se agreguen imágenes)
- ✅ Video de YouTube (después del evento)
- ✅ Protección de imágenes

---

## 🎯 Personalización de Colores

Si deseas cambiar los colores, edita en `css/styles.css`:

```css
:root {
    --primary-color: #c41e3a;      /* Rojo romántico */
    --secondary-color: #ff69b4;    /* Rosa fuerte */
    --accent-color: #ffc0cb;       /* Rosa claro */
    --light-pink: #fff0f5;         /* Lavanda rosado */
}
```

---

## 📱 Compartir la Invitación

Una vez publicado, comparte el enlace:

**URL directa:**
```
https://[TU-USUARIO].github.io/xv-anos-jade-ramos/
```

**WhatsApp:**
```
¡Estás invitado a mis XV Años! 💕
14 de Febrero, 2025 - 5:00 PM
Salón Extravaganza, León, Gto.

Ver invitación digital:
https://[TU-USUARIO].github.io/xv-anos-jade-ramos/

¡Confirma tu asistencia! 🎉
```

**Código QR:**
Usa un generador de códigos QR online con la URL del sitio.

---

## 🆘 Soporte

**Producciones Foro 7**
- WhatsApp: 477-920-3776
- Email: foro7producciones@gmail.com

---

## 📝 Licencia

© 2024 Producciones Foro 7. Todos los derechos reservados.

---

*Última actualización: 9 de Diciembre, 2024*
