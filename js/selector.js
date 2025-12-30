// ========================================
// GLOBAL VARIABLES
// ========================================
// Lista de fotos - 267 fotos de la sesión previa
const PHOTO_FILES = [
"DJI_20251128155039_0081_D.webp","DJI_20251128155044_0082_D.webp","DSC_7049.webp","DSC_7050.webp","DSC_7051.webp","DSC_7052.webp","DSC_7053.webp","DSC_7054.webp","DSC_7055.webp","DSC_7056.webp","DSC_7057.webp","DSC_7058.webp","DSC_7059.webp","DSC_7060.webp","DSC_7061.webp","DSC_7062.webp","DSC_7063.webp","DSC_7064.webp","DSC_7065.webp","DSC_7066.webp","DSC_7067.webp","DSC_7068.webp","DSC_7069.webp","DSC_7070.webp","DSC_7071.webp","DSC_7072.webp","DSC_7073.webp","DSC_7074.webp","DSC_7075.webp","DSC_7076.webp","DSC_7077.webp","DSC_7078.webp","DSC_7079.webp","DSC_7080.webp","DSC_7081.webp","DSC_7082.webp","DSC_7083.webp","DSC_7084.webp","DSC_7085.webp","DSC_7086.webp","DSC_7087.webp","DSC_7088.webp","DSC_7089.webp","DSC_7090.webp","DSC_7091.webp","DSC_7092.webp","DSC_7093.webp","DSC_7094.webp","DSC_7095.webp","DSC_7096.webp","DSC_7097.webp","DSC_7098.webp","DSC_7099.webp","DSC_7100.webp","DSC_7101.webp","DSC_7102.webp","DSC_7103.webp","DSC_7104.webp","DSC_7105.webp","DSC_7106.webp","DSC_7107.webp","DSC_7108.webp","DSC_7109.webp","DSC_7110.webp","DSC_7111.webp","DSC_7112.webp","DSC_7113.webp","DSC_7114.webp","DSC_7115.webp","DSC_7116.webp","DSC_7117.webp","DSC_7118.webp","IMG_6091.webp","IMG_6092.webp","IMG_6093.webp","IMG_6094.webp","IMG_6095.webp","IMG_6096.webp","IMG_6097.webp","IMG_6098.webp","IMG_6099.webp","IMG_6100.webp","IMG_6101.webp","IMG_6102.webp","IMG_6103.webp","IMG_6104.webp","IMG_6105.webp","IMG_6106.webp","IMG_6107.webp","IMG_6108.webp","IMG_6109.webp","IMG_6110.webp","IMG_6111.webp","IMG_6112.webp","IMG_6113.webp","IMG_6114.webp","IMG_6115.webp","IMG_6116.webp","IMG_6117.webp","IMG_6118.webp","IMG_6119.webp","IMG_6120.webp","IMG_6121.webp","IMG_6122.webp","IMG_6123.webp","IMG_6124.webp","IMG_6125.webp","IMG_6126.webp","IMG_6127.webp","IMG_6128.webp","IMG_6129.webp","IMG_6130.webp","IMG_6131.webp","IMG_6132.webp","IMG_6133.webp","IMG_6134.webp","IMG_6135.webp","IMG_6136.webp","IMG_6137.webp","IMG_6138.webp","IMG_6139.webp","IMG_6140.webp","IMG_6141.webp","IMG_6142.webp","IMG_6143.webp","IMG_6144.webp","IMG_6145.webp","IMG_6146.webp","IMG_6147.webp","IMG_6148.webp","IMG_6149.webp","IMG_6150.webp","IMG_6151.webp","IMG_6152.webp","IMG_6153.webp","IMG_6154.webp","IMG_6155.webp","IMG_6156.webp","IMG_6157.webp","IMG_6158.webp","IMG_6159.webp","IMG_6160.webp","IMG_6161.webp","IMG_6162.webp","IMG_6163.webp","IMG_6164.webp","IMG_6165.webp","IMG_6166.webp","IMG_6167.webp","IMG_6168.webp","IMG_6169.webp","IMG_6170.webp","IMG_6171.webp","IMG_6172.webp","IMG_6173.webp","IMG_6174.webp","IMG_6175.webp","IMG_6176.webp","IMG_6177.webp","IMG_6178.webp","IMG_6179.webp","IMG_6180.webp","IMG_6181.webp","IMG_6182.webp","IMG_6183.webp","IMG_6184.webp","IMG_6185.webp","IMG_6186.webp","IMG_6187.webp","IMG_6188.webp","IMG_6189.webp","IMG_6190.webp","IMG_6191.webp","IMG_6192.webp","IMG_6193.webp","IMG_6194.webp","IMG_6195.webp","IMG_6196.webp","IMG_6197.webp","IMG_6198.webp","IMG_6199.webp","IMG_6200.webp","IMG_6201.webp","IMG_6202.webp","IMG_6203.webp","IMG_6204.webp","IMG_6205.webp","IMG_6206.webp","IMG_6207.webp","IMG_6208.webp","IMG_6209.webp","IMG_6210.webp","IMG_6211.webp","IMG_6212.webp","IMG_6213.webp","IMG_6214.webp","IMG_6215.webp","IMG_6216.webp","IMG_6217.webp","IMG_6218.webp","IMG_6219.webp","IMG_6220.webp","IMG_6221.webp","IMG_6222.webp","IMG_6223.webp","IMG_6224.webp","IMG_6225.webp","IMG_6226.webp","IMG_6227.webp","IMG_6228.webp","IMG_6229.webp","IMG_6230.webp","IMG_6231.webp","IMG_6232.webp","IMG_6233.webp","IMG_6234.webp","IMG_6235.webp","IMG_6236.webp","IMG_6237.webp","IMG_6238.webp","IMG_6239.webp","IMG_6240.webp","IMG_6241.webp","IMG_6242.webp","IMG_6243.webp","IMG_6244.webp","IMG_6245.webp","IMG_6246.webp","IMG_6247.webp","IMG_6248.webp","IMG_6249.webp","IMG_6250.webp","IMG_6251.webp","IMG_6252.webp","IMG_6253.webp","IMG_6254.webp","IMG_6255.webp","IMG_6256.webp","IMG_6257.webp","IMG_6258.webp","IMG_6259.webp","IMG_6260.webp","IMG_6261.webp","IMG_6262.webp","IMG_6263.webp","IMG_6264.webp","IMG_6265.webp","IMG_6266.webp","IMG_6267.webp","IMG_6268.webp","IMG_6269.webp","IMG_6270.webp","IMG_6271.webp","IMG_6272.webp","IMG_6273.webp","IMG_6274.webp","IMG_6275.webp","IMG_6276.webp","IMG_6277.webp","IMG_6278.webp","IMG_6279.webp","IMG_6280.webp","IMG_6281.webp","IMG_6282.webp","IMG_6283.webp","IMG_6284.webp","IMG_6285.webp"
];

const photos = PHOTO_FILES.map(filename => `fotos/${filename}`);

// LIMITS FOR JADE'S PACKAGE
const LIMITS = {
    impresion: 200,   // Máximo 200 fotos para impresión
    ampliacion: 1     // Máximo 1 foto para ampliación
    // redes_sociales: sin límite
    // web: sin límite
};

const STORAGE_KEY = 'jade_xv_photo_selections';
let photoSelections = {};
let currentPhotoIndex = null;
let currentFilter = 'all';

// ========================================
// LOCAL STORAGE FUNCTIONS
// ========================================
function loadSelections() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            photoSelections = JSON.parse(saved);
            console.log('Selecciones cargadas desde localStorage:', photoSelections);
        }
    } catch (error) {
        console.error('Error cargando selecciones:', error);
        photoSelections = {};
    }
}

function saveSelections() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(photoSelections));
        console.log('Selecciones guardadas en localStorage');
    } catch (error) {
        console.error('Error guardando selecciones:', error);
        showToast('Error al guardar. Verifica el espacio del navegador.', 'error');
    }
}

function clearAllSelections() {
    if (confirm('¿Estás segura de que quieres borrar TODAS las selecciones? Esta acción no se puede deshacer.')) {
        photoSelections = {};
        saveSelections();
        renderGallery();
        updateStats();
        updateFilterButtons();
        showToast('Todas las selecciones han sido eliminadas', 'success');
    }
}

// ========================================
// STATS FUNCTIONS
// ========================================
function getStats() {
    const stats = {
        ampliacion: 0,
        impresion: 0,
        redes_sociales: 0,
        web: 0,
        descartada: 0,
        sinClasificar: photos.length
    };

    Object.values(photoSelections).forEach(selection => {
        if (selection.ampliacion) stats.ampliacion++;
        if (selection.impresion) stats.impresion++;
        if (selection.redes_sociales) stats.redes_sociales++;
        if (selection.web) stats.web++;
        if (selection.descartada) stats.descartada++;
    });

    stats.sinClasificar = photos.length - Object.keys(photoSelections).length;

    return stats;
}

function updateStats() {
    const stats = getStats();

    // Update counters
    document.getElementById('countAmpliacion').textContent = stats.ampliacion;
    document.getElementById('countImpresion').textContent = stats.impresion;
    document.getElementById('countRedesSociales').textContent = stats.redes_sociales;
    document.getElementById('countWeb').textContent = stats.web;
    document.getElementById('countDescartada').textContent = stats.descartada;
    document.getElementById('countSinClasificar').textContent = stats.sinClasificar;

    // Add warning class if limits exceeded
    const ampliacionCard = document.querySelector('.stat-card.ampliacion');
    const impresionCard = document.querySelector('.stat-card.impresion');

    if (ampliacionCard) {
        if (stats.ampliacion > LIMITS.ampliacion) {
            ampliacionCard.classList.add('exceeded');
        } else {
            ampliacionCard.classList.remove('exceeded');
        }
    }

    if (impresionCard) {
        if (stats.impresion > LIMITS.impresion) {
            impresionCard.classList.add('exceeded');
        } else {
            impresionCard.classList.remove('exceeded');
        }
    }
}

// ========================================
// GALLERY FUNCTIONS
// ========================================
function renderGallery() {
    const grid = document.getElementById('photosGrid');
    grid.innerHTML = '';

    photos.forEach((photo, index) => {
        const selection = photoSelections[index] || {};
        const hasAny = selection.ampliacion || selection.impresion || selection.redes_sociales || selection.web || selection.descartada;

        const card = document.createElement('div');
        card.className = 'photo-card';
        card.dataset.index = index;

        // Add category classes
        if (selection.descartada) {
            card.classList.add('has-descartada');
        } else {
            const categories = [];
            if (selection.ampliacion) categories.push('ampliacion');
            if (selection.impresion) categories.push('impresion');
            if (selection.redes_sociales) categories.push('redes_sociales');
            if (selection.web) categories.push('web');

            if (categories.length > 1) {
                card.classList.add('has-multiple');
            } else if (categories.length === 1) {
                card.classList.add(`has-${categories[0]}`);
            }
        }

        // Build badges HTML
        let badgesHTML = '';
        if (hasAny) {
            badgesHTML = '<div class="photo-badges">';
            if (selection.ampliacion) badgesHTML += '<span class="badge badge-ampliacion">🖼️ Ampliación</span>';
            if (selection.impresion) badgesHTML += '<span class="badge badge-impresion">📸 Impresión</span>';
            if (selection.redes_sociales) badgesHTML += '<span class="badge badge-redes-sociales">📱 Redes</span>';
            if (selection.web) badgesHTML += '<span class="badge badge-web">🌐 Web</span>';
            if (selection.descartada) badgesHTML += '<span class="badge badge-descartada">❌ Descartada</span>';
            badgesHTML += '</div>';
        }

        card.innerHTML = `
            <div class="photo-image-container">
                <img src="${photo}" alt="Foto ${index + 1}" loading="lazy">
            </div>
            <div class="photo-number">Foto ${index + 1}</div>
            ${badgesHTML}
        `;

        card.addEventListener('click', () => openModal(index));
        grid.appendChild(card);
    });

    applyFilter();
}

// ========================================
// FILTER FUNCTIONS
// ========================================
function isPhotoVisible(index) {
    const selection = photoSelections[index] || {};
    let show = false;

    switch (currentFilter) {
        case 'all':
            show = true;
            break;
        case 'ampliacion':
            show = selection.ampliacion === true;
            break;
        case 'impresion':
            show = selection.impresion === true;
            break;
        case 'redes-sociales':
            show = selection.redes_sociales === true;
            break;
        case 'web':
            show = selection.web === true;
            break;
        case 'descartada':
            show = selection.descartada === true;
            break;
        case 'sin-clasificar':
            show = !selection.ampliacion && !selection.impresion && !selection.redes_sociales && !selection.web && !selection.descartada;
            break;
    }
    return show;
}

function applyFilter() {
    const cards = document.querySelectorAll('.photo-card');

    cards.forEach(card => {
        const index = parseInt(card.dataset.index);
        card.classList.toggle('hidden', !isPhotoVisible(index));
    });
}

function setFilter(filter) {
    console.log('Setting filter to:', filter);
    currentFilter = filter;
    applyFilter();

    // Update button states
    document.querySelectorAll('.btn-filter').forEach(btn => {
        btn.classList.remove('active');
    });

    const activeBtn = document.querySelector(`[data-filter="${filter}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

function updateFilterButtons() {
    const stats = getStats();

    document.getElementById('btnFilterAll').textContent = `Todas (${photos.length})`;
    document.getElementById('btnFilterAmpliacion').textContent = `Ampliación (${stats.ampliacion}/${LIMITS.ampliacion})`;
    document.getElementById('btnFilterImpresion').textContent = `Impresión (${stats.impresion}/${LIMITS.impresion})`;
    document.getElementById('btnFilterRedesSociales').textContent = `Redes (${stats.redes_sociales})`;
    document.getElementById('btnFilterWeb').textContent = `Web (${stats.web})`;
    document.getElementById('btnFilterDescartada').textContent = `Descartadas (${stats.descartada})`;
    document.getElementById('btnFilterSinClasificar').textContent = `Sin Clasificar (${stats.sinClasificar})`;
}

function findNextVisiblePhoto(startIndex, direction) {
    let newIndex = startIndex;
    const totalPhotos = photos.length;

    if (direction === 'next') {
        for (let i = startIndex + 1; i < totalPhotos; i++) {
            if (isPhotoVisible(i)) {
                return i;
            }
        }
    } else { // 'prev'
        for (let i = startIndex - 1; i >= 0; i--) {
            if (isPhotoVisible(i)) {
                return i;
            }
        }
    }

    return null;
}

// ========================================
// MODAL FUNCTIONS
// ========================================
function openModal(index) {
    currentPhotoIndex = index;
    const modal = document.getElementById('photoModal');
    const modalImage = document.getElementById('modalImage');
    const modalPhotoNumber = document.getElementById('modalPhotoNumber');

    modalImage.src = photos[index];
    modalPhotoNumber.textContent = `Foto ${index + 1}`;

    // Load current selections
    const selection = photoSelections[index] || {};

    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        btn.classList.toggle('selected', selection[category] === true);
    });

    // Update navigation button states
    updateNavigationButtons();

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function updateNavigationButtons() {
    const btnPrev = document.getElementById('btnPrevPhoto');
    const btnNext = document.getElementById('btnNextPhoto');

    if (btnPrev && btnNext) {
        const prevIndex = findNextVisiblePhoto(currentPhotoIndex, 'prev');
        const nextIndex = findNextVisiblePhoto(currentPhotoIndex, 'next');

        btnPrev.disabled = prevIndex === null;
        btnPrev.style.opacity = prevIndex === null ? '0.3' : '1';
        btnPrev.style.cursor = prevIndex === null ? 'not-allowed' : 'pointer';

        btnNext.disabled = nextIndex === null;
        btnNext.style.opacity = nextIndex === null ? '0.3' : '1';
        btnNext.style.cursor = nextIndex === null ? 'not-allowed' : 'pointer';
    }
}

function hasUnsavedChanges() {
    if (currentPhotoIndex === null) return false;

    const savedSelection = photoSelections[currentPhotoIndex] || {};
    const currentSelection = {};
    document.querySelectorAll('.option-btn.selected').forEach(btn => {
        currentSelection[btn.dataset.category] = true;
    });

    const savedKeys = Object.keys(savedSelection).filter(k => savedSelection[k]);
    const currentKeys = Object.keys(currentSelection);

    if (savedKeys.length !== currentKeys.length) return true;

    const allKeys = new Set([...savedKeys, ...currentKeys]);

    for (const key of allKeys) {
        if (!!savedSelection[key] !== !!currentSelection[key]) {
            return true;
        }
    }

    return false;
}

function navigatePhoto(direction) {
    if (currentPhotoIndex === null) return;

    const proceed = () => {
        const newIndex = findNextVisiblePhoto(currentPhotoIndex, direction);

        if (newIndex !== null) {
            currentPhotoIndex = newIndex;
            const modalImage = document.getElementById('modalImage');
            const modalPhotoNumber = document.getElementById('modalPhotoNumber');

            modalImage.src = photos[newIndex];
            modalPhotoNumber.textContent = `Foto ${newIndex + 1}`;

            const selection = photoSelections[newIndex] || {};
            document.querySelectorAll('.option-btn').forEach(btn => {
                const category = btn.dataset.category;
                btn.classList.toggle('selected', selection[category] === true);
            });

            updateNavigationButtons();
        }
    };

    if (hasUnsavedChanges()) {
        if (confirm('¿Deseas guardar los cambios antes de continuar?')) {
            saveModalSelection(proceed);
        } else {
            proceed();
        }
    } else {
        proceed();
    }
}

function closeModal() {
    const doClose = () => {
        const modal = document.getElementById('photoModal');
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        currentPhotoIndex = null;
    };

    if (hasUnsavedChanges()) {
        if (confirm('¿Deseas guardar los cambios antes de salir?')) {
            saveModalSelection(doClose);
        } else {
            doClose();
        }
    } else {
        doClose();
    }
}

function saveModalSelection(callback) {
    if (currentPhotoIndex === null) return;

    const selectedCategories = {};
    let hasAnySelection = false;

    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        const isSelected = btn.classList.contains('selected');
        selectedCategories[category] = isSelected;
        if (isSelected) hasAnySelection = true;
    });

    // Only save if there's at least one selection
    if (hasAnySelection) {
        photoSelections[currentPhotoIndex] = selectedCategories;
    } else {
        // Remove from selections if nothing is selected
        delete photoSelections[currentPhotoIndex];
    }

    saveSelections();
    renderGallery();
    updateStats();
    updateFilterButtons();
    showToast('Selección guardada correctamente', 'success');

    if (callback && typeof callback === 'function') {
        callback();
    } else {
        closeModal();
    }
}

// ========================================
// EXPORT FUNCTIONS
// ========================================
function exportToJSON() {
    const exportData = {
        INSTRUCCIONES: '⚠️ IMPORTANTE: Por favor envía este archivo por WhatsApp al 4779203776',
        whatsapp: '4779203776',
        fecha_exportacion: new Date().toISOString(),
        total_fotos: photos.length,
        estadisticas: getStats(),
        selecciones: []
    };

    photos.forEach((photo, index) => {
        const selection = photoSelections[index];
        if (selection && (selection.ampliacion || selection.impresion || selection.redes_sociales || selection.web || selection.descartada)) {
            exportData.selecciones.push({
                numero_foto: index + 1,
                archivo: PHOTO_FILES[index],
                ampliacion: selection.ampliacion || false,
                impresion: selection.impresion || false,
                redes_sociales: selection.redes_sociales || false,
                web: selection.web || false,
                descartada: selection.descartada || false
            });
        }
    });

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `seleccion-isis-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);

    showToast('📥 Reporte descargado. ¡Envíalo por WhatsApp al 4779203776!', 'success');
}

function generateTextSummary() {
    const stats = getStats();
    let summary = '📸 SELECCIÓN DE FOTOS - XV AÑOS ISIS FRANCIA SARABI\n';
    summary += '═══════════════════════════════════════\n\n';
    summary += `📊 RESUMEN GENERAL:\n`;
    summary += `   Total de fotos: ${photos.length}\n`;
    summary += `   🖼️  Para ampliación: ${stats.ampliacion}\n`;
    summary += `   📸 Para impresión: ${stats.impresion}\n`;
    summary += `   📱 Para redes sociales: ${stats.redes_sociales}\n`;
    summary += `   🌐 Para web: ${stats.web}\n`;
    summary += `   ❌ Descartadas: ${stats.descartada}\n`;
    summary += `   ⭕ Sin clasificar: ${stats.sinClasificar}\n\n`;

    const categories = ['ampliacion', 'impresion', 'redes_sociales', 'web', 'descartada'];
    const categoryNames = {
        ampliacion: '🖼️  AMPLIACIÓN',
        impresion: '📸 IMPRESIÓN',
        redes_sociales: '📱 REDES SOCIALES',
        web: '🌐 WEB',
        descartada: '❌ DESCARTADAS'
    };

    categories.forEach(category => {
        const photosInCategory = [];
        photos.forEach((photo, index) => {
            const selection = photoSelections[index];
            if (selection && selection[category]) {
                photosInCategory.push(index + 1);
            }
        });

        if (photosInCategory.length > 0) {
            summary += `${categoryNames[category]}:\n`;
            summary += `   Fotos: ${photosInCategory.join(', ')}\n`;
            summary += `   Total: ${photosInCategory.length}\n\n`;
        }
    });

    summary += `\n📅 Generado el: ${new Date().toLocaleString('es-MX')}\n`;
    summary += `\n📱 WhatsApp: 477-920-3776\n`;

    return summary;
}

function copyToClipboard() {
    const summary = generateTextSummary();

    navigator.clipboard.writeText(summary).then(() => {
        showToast('Resumen copiado al portapapeles', 'success');
    }).catch(() => {
        const textarea = document.createElement('textarea');
        textarea.value = summary;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('Resumen copiado al portapapeles', 'success');
    });
}

// ========================================
// TOAST NOTIFICATION
// ========================================
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type}`;

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ========================================
// EVENT LISTENERS
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Load saved selections
    loadSelections();

    // Render gallery
    renderGallery();

    // Update stats
    updateStats();

    // Update filter buttons
    updateFilterButtons();

    // Filter buttons
    document.getElementById('btnFilterAll').addEventListener('click', () => setFilter('all'));
    document.getElementById('btnFilterAmpliacion').addEventListener('click', () => setFilter('ampliacion'));
    document.getElementById('btnFilterImpresion').addEventListener('click', () => setFilter('impresion'));
    document.getElementById('btnFilterRedesSociales').addEventListener('click', () => setFilter('redes-sociales'));
    document.getElementById('btnFilterWeb').addEventListener('click', () => setFilter('web'));
    document.getElementById('btnFilterDescartada').addEventListener('click', () => setFilter('descartada'));
    document.getElementById('btnFilterSinClasificar').addEventListener('click', () => setFilter('sin-clasificar'));

    // Set data-filter attributes
    document.getElementById('btnFilterAll').dataset.filter = 'all';
    document.getElementById('btnFilterAmpliacion').dataset.filter = 'ampliacion';
    document.getElementById('btnFilterImpresion').dataset.filter = 'impresion';
    document.getElementById('btnFilterRedesSociales').dataset.filter = 'redes-sociales';
    document.getElementById('btnFilterWeb').dataset.filter = 'web';
    document.getElementById('btnFilterDescartada').dataset.filter = 'descartada';
    document.getElementById('btnFilterSinClasificar').dataset.filter = 'sin-clasificar';

    // Set initial active filter
    document.getElementById('btnFilterAll').classList.add('active');

    // Action buttons
    document.getElementById('btnExport').addEventListener('click', exportToJSON);
    document.getElementById('btnShare').addEventListener('click', copyToClipboard);
    document.getElementById('btnClear').addEventListener('click', clearAllSelections);

    // Modal controls
    document.querySelector('.modal-close').addEventListener('click', closeModal);
    document.getElementById('btnCancelSelection').addEventListener('click', closeModal);
    document.getElementById('btnSaveSelection').addEventListener('click', saveModalSelection);

    // Option buttons
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            const isCurrentlySelected = btn.classList.contains('selected');

            // If selecting descartada, deselect all others
            if (category === 'descartada' && !isCurrentlySelected) {
                document.querySelectorAll('.option-btn').forEach(b => {
                    if (b !== btn) b.classList.remove('selected');
                });
            }

            // If selecting any other, deselect descartada
            if (category !== 'descartada' && !isCurrentlySelected) {
                document.querySelector('.option-btn[data-category="descartada"]').classList.remove('selected');
            }

            btn.classList.toggle('selected');

            // Show warning if exceeding recommended limit
            if (!isCurrentlySelected && LIMITS[category]) {
                const stats = getStats();
                const futureCount = stats[category] + 1;
                if (futureCount > LIMITS[category]) {
                    const messages = {
                        impresion: `⚠️ Nota: Has seleccionado ${futureCount} fotos para impresión (se recomiendan ${LIMITS.impresion})`,
                        ampliacion: `⚠️ Nota: Has seleccionado ${futureCount} fotos para ampliación (se recomienda ${LIMITS.ampliacion})`
                    };
                    showToast(messages[category], 'warning');
                }
            }
        });
    });

    // Close modal on outside click
    document.getElementById('photoModal').addEventListener('click', (e) => {
        if (e.target.id === 'photoModal') {
            closeModal();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('photoModal');
        if (modal.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'Enter') {
                saveModalSelection();
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                navigatePhoto('prev');
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                navigatePhoto('next');
            }
        }
    });

    // Navigation button click handlers
    const btnPrevPhoto = document.getElementById('btnPrevPhoto');
    const btnNextPhoto = document.getElementById('btnNextPhoto');

    if (btnPrevPhoto) {
        btnPrevPhoto.addEventListener('click', (e) => {
            e.stopPropagation();
            navigatePhoto('prev');
        });
    }

    if (btnNextPhoto) {
        btnNextPhoto.addEventListener('click', (e) => {
            e.stopPropagation();
            navigatePhoto('next');
        });
    }

    console.log('Selector de fotos inicializado');
    console.log(`Total de fotos: ${photos.length}`);
});

// ========================================
// AUTO-SAVE ON VISIBILITY CHANGE
// ========================================
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('Página oculta - guardando selecciones...');
        saveSelections();
    }
});

// ========================================
// BEFORE UNLOAD WARNING
// ========================================
window.addEventListener('beforeunload', (e) => {
    saveSelections();
});

// ========================================
// PROTECCIÓN DE IMÁGENES
// ========================================
// Bloquear click derecho en todas las imágenes
document.addEventListener('contextmenu', (e) => {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
        showToast('Las imágenes están protegidas', 'warning');
        return false;
    }
});

// Prevenir arrastrar imágenes
document.addEventListener('dragstart', (e) => {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
        return false;
    }
});

// Prevenir selección de imágenes
document.addEventListener('selectstart', (e) => {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
        return false;
    }
});
