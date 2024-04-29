$(document).ready(function () {

    /**
     * Cambiar idioma
     */
    var translations = {
        'ca': {
            'menu_contacto': 'Contacte',
            'menu_instalaciones': 'Instal�lacions',
            'menu_clases': 'Les classes',
            'menu_osteo': 'Osteopatia',
            'menu_about': 'Acerca de mi',
            'menu_inicio': 'Inici',
            'menu_politica': 'Politica de privacitat',
            'menu_aviso': 'Avis legal',
            'texto_main': 'Classes de MuayThai, entrenador personal i Osteopatia',
            'about_t1': 'Des del 1989 dedicat a l\'art del Muay Thai, puc afirmar amb orgull que la meva passi� ' +
                'per aquest esport ha estat una constant en la meva vida. Des dels meus primers passos al gimn�s fins a competir al ring,' +
                'cada moment ha estat una oportunitat per aprendre, cr�ixer i compartir el meu amor per aquesta disciplina.',
            'about_t2': 'El meu viatge al Muay Thai va comen�ar fa el 1993, quan vaig decidir endinsar-me en aquest art marcial tan captivador. Des de llavors, ' +
                'he dedicat innombrables hores a l\'entrenament, perfeccionant la meva t�cnica i submergint- me en la rica hist�ria i filosofia que envolta el Muay Thai.',
            'about_t3': 'Com a competidor, he tingut el privilegi d\'enfrontar- me a desafiaments emocionants i aprendre lli�ons valuoses al ring. ' +
                'Cada baralla ha estat una oportunitat per posar a prova les meves habilitats, ' +
                'la meva resist�ncia i la meva determinaci�, i estic agra�t per cada experi�ncia que m\'ha ajudat a cr�ixer com a atleta i com a persona.',
            'about_t4': 'Per� la meva passi� pel Muay Thai va m�s enll� de la competici�. Durant m�s de dues d�cades he tingut l\'honor de compartir els meus ' +
                'coneixements i el meu amor per aquest art amb els meus alumnes. ' +
                'Com a professor de Muay Thai, el meu objectiu �s inspirar, motivar i guiar cada un dels meus estudiants en el viatge cap al mestratge d\'aquest esport.',
            'about_t5': 'A la meva acad�mia, no nom�s ensenyem t�cniques de combat, sin� tamb� valors com el respecte, la disciplina i la perseveran�a. ' +
                'Crec fermament que el Muay Thai �s molt m�s que una manera de lluitar; �s un cam� cap a l\'autodescobriment i el creixement personal.',
            'about_t6': 'Si vols aprendre Muay Thai de la m� d\'un instructor amb experi�ncia i passi� per aquest art, has arribat al lloc indicat. ' +
                'Estic aqu� per ajudar- te a assolir els teus objectius, ja sigui que vulguis competir al ring o simplement millorar la teva condici� f�sica i la teva confian�a.',
            'about_t7': 'Uneix-te a mi en aquesta emocionant aventura al m�n del Muay Thai. Junts, arribarem a noves altures! Ens veiem al gimn�s!',
            'features_thai': 'BENEFICIS DEL MUAYTHAI',
            'feature_thai_1': 'Augmenta la for�a',
            'feature_thai_2': 'Tonifica el cos',
            'feature_thai_3': 'Ajuda a aprimar-se',
            'feature_thai_4': 'Millora la salut cardiov�scular',
            'feature_thai_5': 'Millora la nostra coordinaci�',
            'feature_thai_6': 'Ajuda a alliberar estr�s',
            'feature_thai_7': 'Ajuda a tenir autoseguretat',
            'feature_thai_8': 'Ajuda a tenir m�s agilitat',
            'contact_social': 'Xarxes socials',
            'contact_address': 'Adre�a',
            'clase_dia_1': 'Dilluns',
            'clase_dia_2': 'Dimarts',
            'clase_dia_3': 'Dimecres',
            'clase_dia_4': 'Dijous',
            'clase_dia_5': 'Divendres',
            'clase_ver_entreno1': 'Veure Entrenament MuayThai Costa fit Calella',
            'osteo_main': 'S�c Susanna i des del gimn�s tamb� ofereix serveis d\'osteopatia d\'alta qualitat dissenyats per millorar el teu benestar general i promoure una vida m�s saludable. ' +
                ' El nostre enfocament se centra en tractaments hol�stics que aborden les arrels de les teves malalties per aconseguir resultats efectius i duradors.',
            'osteo_title_1': 'QU� �S L\'OSTEOPATIA?',
            'osteo_subtitle_1': 'L\'osteopatia �s una disciplina terap�utica basada en el principi que el benestar del cos dep�n que els seus sistemes estiguin en equilibri. ' +
                'Els nostres oste�pates altament capacitats utilitzen t�cniques manuals especialitzades per alleujar el dolor, millorar la mobilitat i restaurar la funci� �ptima del cos.',
            'osteo_title_2': 'OSTEOPATIA I EL MUAYTHAI',
            'osteo_subtitle_2': 'L\'osteopatia �s beneficiosa per als practicants de muay thai a causa de la seva capacitat per',
            'feature_osteo_1': 'Alleujar el dolor muscular i articula',
            'feature_osteo_2': 'Millorar la flexibilitat i la mobilitat.',
            'feature_osteo_3': 'Corregir desequilibris posturals.',
            'feature_osteo_4': 'Accelerar la recuperaci� de lesions.',
            'feature_osteo_5': 'Optimitzar el rendiment f�sic.',
            'feature_osteo_6': 'Reduir el risc de lesions cr�niques',
            'feature_osteo_7': 'Promoure la circulaci� sangu�nia.',
            'feature_osteo_8': 'Equilibrar el cos i la ment.',
            'feature_osteo_9': 'Mantenir la salut general i el benestar f�sic',
        },
        'es': {
            'menu_contacto': 'Contacto',
            'menu_instalaciones': 'Instalaciones',
            'menu_clases': 'Las clases',
            'menu_osteo': 'Osteopat�a',
            'menu_about': 'Sobre mi',
            'menu_inicio': 'Inicio',
            'menu_politica': 'Pol�tica de privacidad',
            'menu_aviso': 'Aviso legal',
            'texto_main': 'Clases de MuayThai, entrenador personal y Osteopat�a',
            'about_t1': 'Desde el 1989 dedicado al arte del Muay Thai, puedo afirmar con orgullo que mi pasi�n ' +
                'por este deporte ha sido una constante en mi vida.Desde mis primeros pasos en el gimnasio hasta competir en el ring,' +
                'cada momento ha sido una oportunidad para aprender, crecer y compartir mi amor por esta disciplina.',
            'about_t2': 'Mi viaje en el Muay Thai comenz� hace en 1993, cuando decid� adentrarme en este arte marcial tan cautivador. ' +
                'Desde entonces, he dedicado innumerables horas al entrenamiento, perfeccionando mi t�cnica y sumergi�ndome en la rica historia y filosof�a que rodea al Muay Thai.',
            'about_t3': 'Como competidor, he tenido el privilegio de enfrentarme a desaf�os emocionantes y aprender lecciones valiosas en el ring. ' +
                'Cada pelea ha sido una oportunidad para poner a prueba mis habilidades, mi resistencia y mi determinaci�n, y estoy agradecido por cada experiencia que me ha ayudado a crecer como atleta y como persona.',
            'about_t4': 'Pero mi pasi�n por el Muay Thai va m�s all� de la competici�n. Durante m�s de dos d�cadas, he tenido el honor de compartir mis conocimientos y mi amor por este arte con mis alumnos. Como profesor de Muay Thai, mi objetivo es inspirar, motivar y guiar a cada uno de mis estudiantes en su viaje hacia la maestr�a de este deporte.',
            'about_t5': 'En mi academia, no solo ense�amos t�cnicas de combate, sino tambi�n valores como el respeto, la disciplina y la perseverancia. Creo firmemente que el Muay Thai es mucho m�s que una forma de luchar; es un camino hacia el autodescubrimiento y el crecimiento personal.',
            'about_t6': 'Si est�s buscando aprender Muay Thai de la mano de un instructor con experiencia y pasi�n por este arte, has llegado al lugar indicado. Estoy aqu� para ayudarte a alcanzar tus objetivos, ya sea que desees competir en el ring o simplemente mejorar tu condici�n f�sica y tu confianza.',
            'about_t7': '�nete a m� en esta emocionante aventura en el mundo del Muay Thai. �Juntos, alcanzaremos nuevas alturas! �Nos vemos en el gimnasio',
            'features_thai': 'BENEFICIOS DEL MUAYTHAI',
            'feature_thai_1': 'Aumenta la fuerza',
            'feature_thai_2': 'Tonifica el cuerpo',
            'feature_thai_3': 'Ayuda a adelgazar',
            'feature_thai_4': 'Mejora la salud cardiov�scular',
            'feature_thai_5': 'Mejora nuestra coordinaci�n',
            'feature_thai_6': 'Ayuda a liberar estr�s',
            'feature_thai_7': 'Ayuda a tener autoseguridad',
            'feature_thai_8': 'Ayuda a tener m�s agilidad',
            'contact_social': 'Redes sociales',
            'contact_address': 'Direcci�n',
            'clase_dia_1': 'Lunes',
            'clase_dia_2': 'Martes',
            'clase_dia_3': 'Mi�rcoles',
            'clase_dia_4': 'Jueves',
            'clase_dia_5': 'Viernes',
            'clase_ver_entreno1': 'Ver Entreno MuayThai Costa fit Calella',
            'osteo_main': 'Soy Susanna y desde el gimnasio tambi�n se ofrecen servicios de osteopat�a de alta calidad dise�ados para mejorar tu bienestar general y promover una vida m�s saludable. Nuestro enfoque se centra en tratamientos hol�sticos que abordan las ra�ces de tus dolencias para lograr resultados efectivos y duraderos.',
            'osteo_title_1': '�QU� ES LA OSTEOPAT�A?',
            'osteo_subtitle_1': 'La osteopat�a es una disciplina terap�utica que se basa en el principio de que el bienestar del cuerpo depende de que sus sistemas est�n en equilibrio. Nuestros oste�patas altamente capacitados utilizan t�cnicas manuales especializadas para aliviar el dolor, mejorar la movilidad y restaurar la funci�n �ptima del cuerpo.',
            'osteo_title_2': 'OSTEOPAT�A Y EL MUAYTHAI',
            'osteo_subtitle_2': 'La osteopat�a es beneficiosa para los practicantes de muay thai debido a su capacidad para:',
            'feature_osteo_1': 'Aliviar el dolor muscular y articular.',
            'feature_osteo_2': 'Mejorar la flexibilidad y la movilidad.',
            'feature_osteo_3': 'Corregir desequilibrios posturales.',
            'feature_osteo_4': 'Acelerar la recuperaci�n de lesiones.',
            'feature_osteo_5': 'Optimizar el rendimiento f�sico.',
            'feature_osteo_6': 'Reducir el riesgo de lesiones cr�nicas.',
            'feature_osteo_7': 'Promover la circulaci�n sangu�nea.',
            'feature_osteo_8': 'Equilibrar el cuerpo y la mente.',
            'feature_osteo_9': 'Mantener la salud general y el bienestar f�sico',
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
