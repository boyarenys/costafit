// Variable global de idioma
let currentLang = localStorage.getItem('user_lang') || 'es';

// 1. CARGA DE COMPONENTES HTML
async function loadSection(targetSelector, filePath) {
  try {
    const response = await fetch(filePath);
    if (!response.ok) throw new Error(`Error al cargar ${filePath}`);
    const html = await response.text();
    
    const targetElement = document.querySelector(targetSelector);
    if (targetElement) {
      targetElement.outerHTML = html; 
    }
  } catch (error) {
    console.error(`[Error de carga]: ${error}`);
  }
}

// 2. SISTEMA DE TRADUCCIÓN (i18n)
function getNestedValue(obj, keyPath) {
  return keyPath.split('.').reduce((prev, curr) => (prev && prev[curr] !== undefined) ? prev[curr] : null, obj);
}

function updateActiveLangUI(lang) {
  const labels = { es: 'ES', ca: 'CAT', en: 'EN', fr: 'FR' };
  const currentCode = labels[lang] || lang.toUpperCase();

  // 1. Actualizar el texto indicador en Desktop y Móvil
  const desktopLabel = document.getElementById('currentLang');
  const mobileLabel = document.getElementById('mobileCurrentLang');

  if (desktopLabel) desktopLabel.innerText = currentCode;
  if (mobileLabel) mobileLabel.innerText = currentCode;

  // 2. Marcar clase 'active' en el desplegable de Escritorio (.lang-card)
  document.querySelectorAll('.lang-card[data-lang-code]').forEach(button => {
    button.classList.toggle('active', button.getAttribute('data-lang-code') === lang);
  });

  // 3. Marcar clase 'active' en el desplegable de Móvil (.mobile-lang-btn)
  document.querySelectorAll('.mobile-lang-btn[data-lang-code]').forEach(button => {
    button.classList.toggle('active', button.getAttribute('data-lang-code') === lang);
  });
}

async function loadLanguage(lang) {
  try {
    const response = await fetch(`lang/${lang}.json`);
    if (!response.ok) throw new Error(`No se pudo cargar lang/${lang}.json`);
    
    const translations = await response.json();
    
    // 1. Guardar globalmente para que horario.js y otros scripts puedan usarlo
    window.currentTranslations = translations;

    // 2. Traducir elementos estáticos con atributo data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = getNestedValue(translations, key);

      if (translation !== null) {
        element.innerHTML = translation; 
      }
    });

    localStorage.setItem('user_lang', lang);
    document.documentElement.lang = lang;
    
    updateActiveLangUI(lang);

    // 3. Re-renderizar el horario dinámico si ya está disponible en la página
    if (typeof renderSchedule === "function") {
      renderSchedule();
    }

  } catch (error) {
    console.error('Error al traducir la página:', error);
  }
}

function changeLanguage(lang) {
  currentLang = lang;
  loadLanguage(lang);
}

// 3. INICIALIZACIÓN ORDENADA AL CARGAR EL DOM
document.addEventListener("DOMContentLoaded", async () => {
  // Primero cargamos las secciones dinámicas
  await loadSection("#osteopathy-slot", "components/osteopathy.html");
  await loadSection("#martialarts-slot", "components/martialarts.html");
  await loadSection("#training-slot", "components/training.html");
  await loadSection("#merch-slot", "components/merchandising.html");
  await loadSection("#team-slot", "components/team.html");
  await loadSection("#schedule-slot", "components/schedule.html");
  await loadSection("#facilities-slot", "components/facilities.html");
  await loadSection("#faq-slot", "components/faq.html");
  await loadSection("#reviews-slot", "components/reviews.html");
  await loadSection("#contact-slot", "components/contact.html");

  // Re-inicializar eventos que dependan del HTML insertado
  if (typeof initSizeSelectors === "function") {
    initSizeSelectors();
  }

  // Inicialización
  initTabs();
  initScrollTop();

  // Inicializar el horario AHORA que el HTML ya existe
  if (typeof initSchedule === "function") {
    initSchedule();
  }

  // Traducir toda la página (incluyendo el HTML dinámico)
  await loadLanguage(currentLang);

  // Inicializar eventos del Menú Móvil
  initMobileMenu();

  // Inicializar eventos de Modales
  initModals();
});

// 4. MODAL IMAGENES INSTALACIONES
function openLightbox(cardElement) {
  const modal = document.getElementById("image-lightbox");
  const modalImg = document.getElementById("lightbox-img");
  const captionText = document.getElementById("lightbox-caption");
  
  const imgSrc = cardElement.querySelector('.facility-bg').src;
  const titleText = cardElement.querySelector('.facility-card-title').innerText;

  modal.style.display = "block";
  modalImg.src = imgSrc;
  captionText.innerHTML = titleText;
}

const lightboxClose = document.querySelector(".lightbox-close");
if (lightboxClose) {
  lightboxClose.onclick = function() {
    document.getElementById("image-lightbox").style.display = "none";
  };
}

window.onclick = function(event) {
  const modal = document.getElementById("image-lightbox");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

document.addEventListener('keydown', function(event) {
  if (event.key === "Escape") {
    const modal = document.getElementById("image-lightbox");
    if (modal) modal.style.display = "none";
  }
});

// 5. TOGGLE SECCIÓN FAQ
function toggleFaq(buttonElement) {
  const faqItem = buttonElement.parentElement;
  const isActive = faqItem.classList.contains('active');

  // Cerrar todos los demás acordeones abiertos
  document.querySelectorAll('.faq-item').forEach(item => {
    item.classList.remove('active');
  });

  // Si no estaba activo, abrir el actual
  if (!isActive) {
    faqItem.classList.add('active');
  }
}

// 6. INICIALIZACIÓN DE PESTAÑAS (TABS)
function initTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const parentSection = button.closest('.discipline-section');
      const targetTab = button.getAttribute('data-tab');

      if (!parentSection) return;

      // Desactivar botones de esa sección
      parentSection.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
      // Ocultar paneles de esa sección
      parentSection.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));

      // Activar botón y panel seleccionado
      button.classList.add('active');
      const activePanel = parentSection.querySelector(`#${targetTab}`);
      if (activePanel) {
        activePanel.classList.add('active');
      }
    });
  });
}

// 7. Función para el botón Scroll to Top
function initScrollTop() {
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  if (!scrollTopBtn) return;

  // Mostrar u ocultar el botón según el desplazamiento vertical
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add('show');
    } else {
      scrollTopBtn.classList.remove('show');
    }
  });

  // Evento de clic para subir suavemente
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// 8. FUNCIONES DE INTERFAZ (MENÚ MÓVIL Y MODALES)
function initMobileMenu() {
  const btnOpen = document.getElementById('mobileMenuOpen');
  const btnClose = document.getElementById('mobileMenuClose');
  const drawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('mobileOverlay');

  if (!btnOpen || !drawer || !overlay) return;

  function closeMenu() {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
  }

  function toggleMenu() {
    drawer.classList.toggle('active');
    overlay.classList.toggle('active');
  }

  btnOpen.addEventListener('click', toggleMenu);
  if (btnClose) btnClose.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', toggleMenu);

  // Selecciona todos los enlaces dentro del drawer y los cierra al hacer clic
  const drawerLinks = drawer.querySelectorAll('a');
  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Si el enlace despliega un submenú (accordion-toggle), no cerramos el drawer
      if (!link.classList.contains('accordion-toggle')) {
        closeMenu();
      }
    });
  });
  // -----------------------------

  const accordions = document.querySelectorAll('.accordion-toggle');
  accordions.forEach(button => {
    button.addEventListener('click', () => {
      const parentItem = button.parentElement;
      parentItem.classList.toggle('open');
    });
  });
}

function initModals() {
  const modalAviso = document.getElementById('modalAviso');
  const modalPrivacidad = document.getElementById('modalPrivacidad');
  const openAviso = document.getElementById('openAviso');
  const openPrivacidad = document.getElementById('openPrivacidad');

  if (openAviso && modalAviso) {
    openAviso.addEventListener('click', (e) => {
      e.preventDefault();
      modalAviso.classList.add('active');
    });
  }

  if (openPrivacidad && modalPrivacidad) {
    openPrivacidad.addEventListener('click', (e) => {
      e.preventDefault();
      modalPrivacidad.classList.add('active');
    });
  }

  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.classList.contains('modal-close')) {
        modal.classList.remove('active');
      }
    });
  });
}