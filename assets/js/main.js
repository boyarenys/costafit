$(document).ready(function () {

    /**
     * Cambiar idioma
     */
    var translations = {
        'ca': {
            'menu_contacto': 'Contacte',
            'menu_instalaciones': 'Instal·lacions',
            'menu_clases': 'Les classes',
            'menu_osteo': 'Osteopatia',
            'menu_about': 'Acerca de mi',
            'menu_inicio': 'Inici',
            'menu_politica': 'Politica de privacitat',
            'menu_aviso': 'Avis legal',
            'texto_main': 'Classes de MuayThai, entrenador personal i Osteopatia',
            'about_t1': 'Des del 1989 dedicat a l\'art del Muay Thai, puc afirmar amb orgull que la meva passió ' +
                'per aquest esport ha estat una constant en la meva vida. Des dels meus primers passos al gimnàs fins a competir al ring,' +
                'cada moment ha estat una oportunitat per aprendre, créixer i compartir el meu amor per aquesta disciplina.',
            'about_t2': 'El meu viatge al Muay Thai va començar fa el 1993, quan vaig decidir endinsar-me en aquest art marcial tan captivador. Des de llavors, ' +
                'he dedicat innombrables hores a l\'entrenament, perfeccionant la meva tècnica i submergint- me en la rica història i filosofia que envolta el Muay Thai.',
            'about_t3': 'Com a competidor, he tingut el privilegi d\'enfrontar- me a desafiaments emocionants i aprendre lliçons valuoses al ring. ' +
                'Cada baralla ha estat una oportunitat per posar a prova les meves habilitats, ' +
                'la meva resistència i la meva determinació, i estic agraït per cada experiència que m\'ha ajudat a créixer com a atleta i com a persona.',
            'about_t4': 'Però la meva passió pel Muay Thai va més enllà de la competició. Durant més de dues dècades he tingut l\'honor de compartir els meus ' +
                'coneixements i el meu amor per aquest art amb els meus alumnes. ' +
                'Com a professor de Muay Thai, el meu objectiu és inspirar, motivar i guiar cada un dels meus estudiants en el viatge cap al mestratge d\'aquest esport.',
            'about_t5': 'A la meva acadèmia, no només ensenyem tècniques de combat, sinó també valors com el respecte, la disciplina i la perseverança. ' +
                'Crec fermament que el Muay Thai és molt més que una manera de lluitar; és un camí cap a l\'autodescobriment i el creixement personal.',
            'about_t6': 'Si vols aprendre Muay Thai de la mà d\'un instructor amb experiència i passió per aquest art, has arribat al lloc indicat. ' +
                'Estic aquí per ajudar- te a assolir els teus objectius, ja sigui que vulguis competir al ring o simplement millorar la teva condició física i la teva confiança.',
            'about_t7': 'Uneix-te a mi en aquesta emocionant aventura al món del Muay Thai. Junts, arribarem a noves altures! Ens veiem al gimnàs!',
            'features_thai': 'BENEFICIS DEL MUAYTHAI',
            'feature_thai_1': 'Augmenta la força',
            'feature_thai_2': 'Tonifica el cos',
            'feature_thai_3': 'Ajuda a aprimar-se',
            'feature_thai_4': 'Millora la salut cardiovàscular',
            'feature_thai_5': 'Millora la nostra coordinació',
            'feature_thai_6': 'Ajuda a alliberar estrès',
            'feature_thai_7': 'Ajuda a tenir autoseguretat',
            'feature_thai_8': 'Ajuda a tenir més agilitat',
            'contact_social': 'Xarxes socials',
            'contact_address': 'Adreça',
            'clase_dia_1': 'Dilluns',
            'clase_dia_2': 'Dimarts',
            'clase_dia_3': 'Dimecres',
            'clase_dia_4': 'Dijous',
            'clase_dia_5': 'Divendres',
            'clase_ver_entreno1': 'Veure Entrenament MuayThai Costa fit Calella',
            'osteo_main': 'Sóc Susanna i des del gimnàs també ofereix serveis d\'osteopatia d\'alta qualitat dissenyats per millorar el teu benestar general i promoure una vida més saludable. ' +
                ' El nostre enfocament se centra en tractaments holístics que aborden les arrels de les teves malalties per aconseguir resultats efectius i duradors.',
            'osteo_title_1': 'QUÈ ÉS L\'OSTEOPATIA?',
            'osteo_subtitle_1': 'L\'osteopatia és una disciplina terapèutica basada en el principi que el benestar del cos depèn que els seus sistemes estiguin en equilibri. ' +
                'Els nostres osteòpates altament capacitats utilitzen tècniques manuals especialitzades per alleujar el dolor, millorar la mobilitat i restaurar la funció òptima del cos.',
            'osteo_title_2': 'OSTEOPATIA I EL MUAYTHAI',
            'osteo_subtitle_2': 'L\'osteopatia és beneficiosa per als practicants de muay thai a causa de la seva capacitat per',
            'feature_osteo_1': 'Alleujar el dolor muscular i articula',
            'feature_osteo_2': 'Millorar la flexibilitat i la mobilitat.',
            'feature_osteo_3': 'Corregir desequilibris posturals.',
            'feature_osteo_4': 'Accelerar la recuperació de lesions.',
            'feature_osteo_5': 'Optimitzar el rendiment físic.',
            'feature_osteo_6': 'Reduir el risc de lesions cròniques',
            'feature_osteo_7': 'Promoure la circulació sanguínia.',
            'feature_osteo_8': 'Equilibrar el cos i la ment.',
            'feature_osteo_9': 'Mantenir la salut general i el benestar físic',
        },
        'es': {
            'menu_contacto': 'Contacto',
            'menu_instalaciones': 'Instalaciones',
            'menu_clases': 'Las clases',
            'menu_osteo': 'Osteopatía',
            'menu_about': 'Sobre mi',
            'menu_inicio': 'Inicio',
            'menu_politica': 'Política de privacidad',
            'menu_aviso': 'Aviso legal',
            'texto_main': 'Clases de MuayThai, entrenador personal y Osteopatía',
            'about_t1': 'Desde el 1989 dedicado al arte del Muay Thai, puedo afirmar con orgullo que mi pasión ' +
                'por este deporte ha sido una constante en mi vida.Desde mis primeros pasos en el gimnasio hasta competir en el ring,' +
                'cada momento ha sido una oportunidad para aprender, crecer y compartir mi amor por esta disciplina.',
            'about_t2': 'Mi viaje en el Muay Thai comenzó hace en 1993, cuando decidí adentrarme en este arte marcial tan cautivador. ' +
                'Desde entonces, he dedicado innumerables horas al entrenamiento, perfeccionando mi técnica y sumergiéndome en la rica historia y filosofía que rodea al Muay Thai.',
            'about_t3': 'Como competidor, he tenido el privilegio de enfrentarme a desafíos emocionantes y aprender lecciones valiosas en el ring. ' +
                'Cada pelea ha sido una oportunidad para poner a prueba mis habilidades, mi resistencia y mi determinación, y estoy agradecido por cada experiencia que me ha ayudado a crecer como atleta y como persona.',
            'about_t4': 'Pero mi pasión por el Muay Thai va más allá de la competición. Durante más de dos décadas, he tenido el honor de compartir mis conocimientos y mi amor por este arte con mis alumnos. Como profesor de Muay Thai, mi objetivo es inspirar, motivar y guiar a cada uno de mis estudiantes en su viaje hacia la maestría de este deporte.',
            'about_t5': 'En mi academia, no solo enseñamos técnicas de combate, sino también valores como el respeto, la disciplina y la perseverancia. Creo firmemente que el Muay Thai es mucho más que una forma de luchar; es un camino hacia el autodescubrimiento y el crecimiento personal.',
            'about_t6': 'Si estás buscando aprender Muay Thai de la mano de un instructor con experiencia y pasión por este arte, has llegado al lugar indicado. Estoy aquí para ayudarte a alcanzar tus objetivos, ya sea que desees competir en el ring o simplemente mejorar tu condición física y tu confianza.',
            'about_t7': 'Únete a mí en esta emocionante aventura en el mundo del Muay Thai. ¡Juntos, alcanzaremos nuevas alturas! ¡Nos vemos en el gimnasio',
            'features_thai': 'BENEFICIOS DEL MUAYTHAI',
            'feature_thai_1': 'Aumenta la fuerza',
            'feature_thai_2': 'Tonifica el cuerpo',
            'feature_thai_3': 'Ayuda a adelgazar',
            'feature_thai_4': 'Mejora la salud cardiováscular',
            'feature_thai_5': 'Mejora nuestra coordinación',
            'feature_thai_6': 'Ayuda a liberar estrés',
            'feature_thai_7': 'Ayuda a tener autoseguridad',
            'feature_thai_8': 'Ayuda a tener más agilidad',
            'contact_social': 'Redes sociales',
            'contact_address': 'Dirección',
            'clase_dia_1': 'Lunes',
            'clase_dia_2': 'Martes',
            'clase_dia_3': 'Miércoles',
            'clase_dia_4': 'Jueves',
            'clase_dia_5': 'Viernes',
            'clase_ver_entreno1': 'Ver Entreno MuayThai Costa fit Calella',
            'osteo_main': 'Soy Susanna y desde el gimnasio también se ofrecen servicios de osteopatía de alta calidad diseñados para mejorar tu bienestar general y promover una vida más saludable. Nuestro enfoque se centra en tratamientos holísticos que abordan las raíces de tus dolencias para lograr resultados efectivos y duraderos.',
            'osteo_title_1': '¿QUÉ ES LA OSTEOPATÍA?',
            'osteo_subtitle_1': 'La osteopatía es una disciplina terapéutica que se basa en el principio de que el bienestar del cuerpo depende de que sus sistemas estén en equilibrio. Nuestros osteópatas altamente capacitados utilizan técnicas manuales especializadas para aliviar el dolor, mejorar la movilidad y restaurar la función óptima del cuerpo.',
            'osteo_title_2': 'OSTEOPATÍA Y EL MUAYTHAI',
            'osteo_subtitle_2': 'La osteopatía es beneficiosa para los practicantes de muay thai debido a su capacidad para:',
            'feature_osteo_1': 'Aliviar el dolor muscular y articular.',
            'feature_osteo_2': 'Mejorar la flexibilidad y la movilidad.',
            'feature_osteo_3': 'Corregir desequilibrios posturales.',
            'feature_osteo_4': 'Acelerar la recuperación de lesiones.',
            'feature_osteo_5': 'Optimizar el rendimiento físico.',
            'feature_osteo_6': 'Reducir el riesgo de lesiones crónicas.',
            'feature_osteo_7': 'Promover la circulación sanguínea.',
            'feature_osteo_8': 'Equilibrar el cuerpo y la mente.',
            'feature_osteo_9': 'Mantener la salud general y el bienestar físico',
        }
    };

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

    (function () {
        "use strict";

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

});
