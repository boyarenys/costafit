$(document).ready(function () {

    (function () {
        "use strict";
               
       
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

        $('#spanishBtn').click(function () {
            changeLanguage('es');
        });

        $('#catalanBtn').click(function () {
            changeLanguage('ca');
        });

        /**
        * Show video modal windows
        */
        var $videoSrc;
        $('.video-btn').click(function () {
            $videoSrc = $(this).data("src");
        });

        // when the modal is opened autoplay it
        $('#myModal').on('shown.bs.modal', function (e) {
            // set the video src to autoplay and not to show related video
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        // stop playing the youtube video when I close the modal
        $('#myModal').on('hide.bs.modal', function (e) {
            // a poor man's stop video
            $("#video").attr('src', $videoSrc);
        })

        /**
         * Easy selector helper function
         */
        const select = (el, all = false) => {
            el = el.trim()
            if (all) {
                return [...document.querySelectorAll(el)]
            } else {
                return document.querySelector(el)
            }
        }

        /**
         * Easy event listener function
         */
        const on = (type, el, listener, all = false) => {
            let selectEl = select(el, all)

            if (selectEl) {
                if (all) {
                    selectEl.forEach(e => e.addEventListener(type, listener))
                } else {
                    selectEl.addEventListener(type, listener)
                }
            }
        }

        /**
         * Scrolls to an element with header offset
         */
        const scrollto = (el) => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }

        /**
         * Mobile nav toggle
         */
        on('click', '.mobile-nav-toggle', function (e) {
            select('#navbar').classList.toggle('navbar-mobile')
            this.classList.toggle('bi-list')
            this.classList.toggle('bi-x')
        })

        /**
         * Scrool with ofset on links with a class name .scrollto
         */
        on('click', '#navbar .nav-link', function (e) {
            let section = select(this.hash)
            if (section) {
                e.preventDefault()

                let navbar = select('#navbar')
                let header = select('#header')
                let sections = select('section', true)
                let navlinks = select('#navbar .nav-link', true)

                navlinks.forEach((item) => {
                    item.classList.remove('active')
                })

                this.classList.add('active')

                if (navbar.classList.contains('navbar-mobile')) {
                    navbar.classList.remove('navbar-mobile')
                    let navbarToggle = select('.mobile-nav-toggle')
                    navbarToggle.classList.toggle('bi-list')
                    navbarToggle.classList.toggle('bi-x')
                }

                if (this.hash == '#header') {
                    header.classList.remove('header-top')
                    sections.forEach((item) => {
                        item.classList.remove('section-show')
                    })
                    return;
                }

                if (!header.classList.contains('header-top')) {
                    header.classList.add('header-top')
                    setTimeout(function () {
                        sections.forEach((item) => {
                            item.classList.remove('section-show')
                        })
                        section.classList.add('section-show')

                    }, 350);
                } else {
                    sections.forEach((item) => {
                        item.classList.remove('section-show')
                    })
                    section.classList.add('section-show')
                }

                scrollto(this.hash)
            }
        }, true)

        /**
         * Skills animation
         */
        let skilsContent = select('.skills-content');
        if (skilsContent) {
            new Waypoint({
                element: skilsContent,
                offset: '80%',
                handler: function (direction) {
                    let progress = select('.progress .progress-bar', true);
                    progress.forEach((el) => {
                        el.style.width = el.getAttribute('aria-valuenow') + '%'
                    });
                }
            })
        }

        

    })();

});
 

