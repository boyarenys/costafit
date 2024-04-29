$(document).ready(function () {
    // Objeto con traducciones
    var translations = {
        'ca': {
            'menu_contacto': 'Contacte',
            'menu_instalaciones': 'Instal·lacions',
            'menu_clases': 'Les classes',
        },
        'es': {
            'menu_contacto': 'Contacto',
            'menu_instalaciones': 'Instalaciones',
            'menu_clases': 'Las clases',
        }
    };

    // Función para cambiar el idioma
    function changeLanguage(lang) {
        $('.translate').each(function () {
            var key = $(this).data('key');
            $(this).text(translations[lang][key]);
        });
        localStorage.setItem('selectedLanguage', lang);
    }

    // Función para cargar el idioma seleccionado
    function loadSelectedLanguage() {
        var selectedLang = localStorage.getItem('selectedLanguage');
        changeLanguage(selectedLang || 'es'); // Establecer el idioma predeterminado si no hay uno seleccionado
    }
    loadSelectedLanguage();

    // Evento clic para cambiar al español
    $('#spanishBtn').click(function () {
        changeLanguage('es');
    });

    // Evento clic para cambiar al catalán
    $('#catalanBtn').click(function () {
        changeLanguage('ca');
    });

    // Mobile nav toggle
    $('.mobile-nav-toggle').click(function () {
        $('#navbar').toggleClass('navbar-mobile');
        $(this).toggleClass('bi-list bi-x');
    });

    // Scroll con desplazamiento en los enlaces con clase .scrollto
    $('#navbar .nav-link').click(function (e) {
        var section = $(this.hash);
        if (section.length) {
            e.preventDefault();
            var navbar = $('#navbar');
            var header = $('#header');
            var sections = $('section');
            var navlinks = $('#navbar .nav-link');

            navlinks.removeClass('active');
            $(this).addClass('active');

            if (navbar.hasClass('navbar-mobile')) {
                navbar.removeClass('navbar-mobile');
                $('.mobile-nav-toggle').toggleClass('bi-list bi-x');
            }

            if (this.hash == '#header') {
                header.removeClass('header-top');
                sections.removeClass('section-show');
                return;
            }

            if (!header.hasClass('header-top')) {
                header.addClass('header-top');
                setTimeout(function () {
                    sections.removeClass('section-show');
                    section.addClass('section-show');
                }, 350);
            } else {
                sections.removeClass('section-show');
                section.addClass('section-show');
            }

            window.scrollTo({
                top: section.offset().top,
                behavior: 'smooth'
            });
        }
    });

    // Animación de habilidades
    var skillsContent = $('.skills-content');
    if (skillsContent.length) {
        new Waypoint({
            element: skillsContent[0],
            offset: '80%',
            handler: function () {
                $('.progress .progress-bar').each(function () {
                    $(this).css('width', $(this).attr('aria-valuenow') + '%');
                });
            }
        });
    }

    // Mostrar ventana modal de video
    var $videoSrc;
    $('.video-btn').click(function () {
        $videoSrc = $(this).data("src");
    });

    // Reproducir video al abrir la ventana modal
    $('#myModal').on('shown.bs.modal', function () {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    });

    // Detener video al cerrar la ventana modal
    $('#myModal').on('hide.bs.modal', function () {
        $("#video").attr('src', $videoSrc);
    });
});
