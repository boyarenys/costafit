


(function ($) {
    'use strict';

    

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");      

    });

    /*------------------
    Scroll hacia arriba
    --------------------*/

    // Mostrar el botón solo al hacer scroll hacia abajo
    $(window).scroll(function () {
        const scrollTopBtn = $("#scrollTopBtn");
        if ($(this).scrollTop() > 200) {
            scrollTopBtn.fadeIn();
        } else {
            scrollTopBtn.fadeOut();
        }
    });

    // Función para hacer scroll hacia arriba
    $('#scrollTopBtn').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 'smooth');
    });


    /*------------------
   xx
    --------------------*/
    $("#contact-form-one-day").submit(function (event) {
        event.preventDefault();

        // Obtén los valores del formulario usando jQuery
        var name = $("#name").val();
        var email = $("#email").val();
        var day = $("#day").val();

        // Crea el mensaje que se enviará por WhatsApp
        var message = `*Nuevo mensaje desde la web*\n\n` +
            `*Nombre:* ${name}\n` +
            `*Email:* ${email}\n` +
            `*Dia seleccionado:* ${day}\n`;

        // Crea la URL de WhatsApp con el mensaje
        var whatsappUrl = `https://wa.me/34679089961?text=${encodeURIComponent(message)}`;

        // Redirige al usuario a WhatsApp con el mensaje predefinido
        window.open(whatsappUrl, "_blank");
    });

    

    /*------------------
        Video Intro Hero
    --------------------*/
    $(document).ready(function () {
        // Abrir el popup al hacer clic en el botón de play
        $('.btn-play-video').click(function (e) {
            e.preventDefault(); // Evita el comportamiento por defecto
            $('#videoPopup').fadeIn(); // Muestra el popup con efecto

            // Añadir autoplay al iframe
          
            let videoSrc = "https://www.youtube.com/embed/uerll7gG5Wc?autoplay=1"; // Añade el parámetro autoplay=1
            $('#youtubeVideo').attr('src', videoSrc); // Cambia el src para que se ejecute automáticamente
        });

        // Cerrar el popup al hacer clic en la "X"
        $('.close').click(function () {
            $('#videoPopup').fadeOut(); // Oculta el popup con efecto
            // Detiene el video cuando se cierra el popup
            $('#youtubeVideo').attr('src', ""); // Limpia el src del iframe
        });

        // Cerrar el popup al presionar la tecla 'Esc'
        $(document).keydown(function (e) {
            if (e.key === "Escape") { // Detecta la tecla 'Esc'
                $('#videoPopup').fadeOut(); // Oculta el popup con efecto
                // Detiene el video cuando se cierra el popup
                $('#youtubeVideo').attr('src', ""); // Limpia el src del iframe
            }
        });
    });


    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

   
    /*------------------
        Gallery
    --------------------*/
    $('.gallery-menu ul li').click(function () {
        $('.gallery-menu ul li').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
        $('.gallery-item').isotope({
            filter: selector
        });
        return false;
    });
    $(document).ready(function () {
        var popup_btn = $('.popup-btn');
        popup_btn.magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });

    /*------------------
       Schedule Filter
    --------------------*/
    $('.nav-controls ul li').on('click', function() {
        var tsfilter = $(this).data('tsfilter');
        $('.nav-controls ul li').removeClass('active');
        $(this).addClass('active');
        
        if(tsfilter == 'all') {
            $('.schedule-table').removeClass('filtering');
            $('.ts-item').removeClass('show');
        } else {
            $('.schedule-table').addClass('filtering');
        }
        $('.ts-item').each(function(){
            $(this).removeClass('show');
            if($(this).data('tsmeta') == tsfilter) {
                $(this).addClass('show');
            }
        });
    });


    /*------------------
       ChangeLanguage
    --------------------*/
    $('#spanishBtn').click(function () {

        changeLanguage('es');
    });

    $('#catalanBtn').click(function () {
        changeLanguage('ca');
    });

    $('#englishBtn').click(function () {
        changeLanguage('en');
    });

    $('#frenchBtn').click(function () {
        changeLanguage('fr');
    });

    function changeLanguage(lang) {

        $('.translate').each(function () {
            var key = $(this).data('key');
            $(this).text(translations[lang][key]);
        });

        localStorage.setItem('selectedLanguage', lang);
    }

    function loadSelectedLanguage() {
        var selectedLang = localStorage.getItem('selectedLanguage');
        if (selectedLang) {
            changeLanguage(selectedLang); // Cambiar al idioma seleccionado guardado
        } else {
            changeLanguage('es'); // Establecer idioma predeterminado si no hay idioma seleccionado guardado
        }
    }
    loadSelectedLanguage();


})(jQuery);