let translations = {};
let currentLang = "es";
let editMode = false;


/* =========================
   CARGAR IDIOMA
========================= */

async function loadLanguage(lang) {

    try {

        console.log("🌍 Cargando idioma:", lang);

        const response =
            await fetch(`./lang/${lang}.json`);

        if (!response.ok) {
            throw new Error(
                `No se pudo cargar el idioma: ${lang}`
            );
        }

        translations =
            await response.json();

        currentLang =
            lang;

        /*
         * IMPORTANTE
         *
         * Guardamos el idioma aquí.
         */
        localStorage.setItem(
            "lang",
            lang
        );

        /*
         * También lo dejamos disponible
         * globalmente para otros JS.
         */
        window.currentLang =
            lang;

        window.translations =
            translations;

        /*
         * Aplicar traducciones normales
         * de la página.
         */
        applyTranslations();


        /*
         * Marcar idioma activo.
         */
        document
            .querySelectorAll(".lang")
            .forEach(el => {

                el.classList.remove("active");

                if (
                    el.dataset.langCode === lang
                ) {

                    el.classList.add("active");

                }

            });


        /*
         * =================================================
         * AVISAR A LOS DEMÁS SCRIPTS
         * =================================================
         *
         * Aquí está la parte que faltaba.
         *
         * timetable.js escucha este evento.
         */
        window.dispatchEvent(
            new CustomEvent(
                "languageChanged",
                {
                    detail: {
                        lang: lang
                    }
                }
            )
        );


        console.log(
            "✅ Idioma cambiado a:",
            lang
        );


    } catch (error) {

        console.error(
            "❌ Error cargando idioma:",
            error
        );

    }

}


/* =========================
   APLICAR TRADUCCIONES
========================= */

function applyTranslations() {

    document
        .querySelectorAll("[data-lang]")
        .forEach(el => {

            const key =
                el.dataset.lang;

            if (
                translations[key] !== undefined
            ) {

                el.innerText =
                    translations[key];

            }

        });

}


/* =========================
   GENERAR JSON PREVIEW
========================= */

function generateJSONPreview() {

    const data = {};

    document
        .querySelectorAll("[data-lang]")
        .forEach(el => {

            const key =
                el.dataset.lang;

            data[key] =
                el.innerText.trim();

        });

    return JSON.stringify(
        data,
        null,
        4
    );

}


/* =========================
   MODO EDICIÓN
========================= */

function toggleEditMode() {

    editMode =
        !editMode;

    document
        .querySelectorAll("[data-lang]")
        .forEach(el => {

            el.contentEditable =
                editMode;

            el.style.outline =
                editMode
                    ? "2px dashed red"
                    : "none";

        });


    const btn =
        document.getElementById(
            "editBtn"
        );

    if (btn) {

        btn.innerText =
            editMode
                ? "Desactivar edición"
                : "Activar edición";

    }


    console.log(
        "Edit mode:",
        editMode
    );

}


/* =========================
   EXPORTAR JSON
========================= */

function exportJSON() {

    const data = {};

    document
        .querySelectorAll("[data-lang]")
        .forEach(el => {

            const key =
                el.dataset.lang;

            data[key] =
                el.innerText.trim();

        });


    const json =
        JSON.stringify(
            data,
            null,
            4
        );


    console.log(
        "JSON EXPORTADO:",
        json
    );


    const blob =
        new Blob(
            [json],
            {
                type:
                    "application/json"
            }
        );


    const url =
        URL.createObjectURL(
            blob
        );


    const a =
        document.createElement("a");


    a.href =
        url;


    a.download =
        `${currentLang}.json`;


    document.body.appendChild(a);

    a.click();

    document.body.removeChild(a);

    URL.revokeObjectURL(url);

}


/* =========================
   MOSTRAR JSON
========================= */

function toggleOutput() {

    const output =
        document.getElementById(
            "output"
        );

    if (!output) {
        return;
    }


    const isHidden =
        output.style.display === "none" ||
        output.style.display === "";


    if (isHidden) {

        const json =
            generateJSONPreview();

        output.textContent =
            json;

        output.style.display =
            "block";


        const btn =
            document.getElementById(
                "toggleOutputBtn"
            );

        if (btn) {

            btn.innerText =
                "Ocultar JSON";

        }

    } else {

        output.style.display =
            "none";


        const btn =
            document.getElementById(
                "toggleOutputBtn"
            );

        if (btn) {

            btn.innerText =
                "Mostrar JSON";

        }

    }

}


/* =========================
   INIT
========================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        console.log(
            "DOM OK"
        );


        /* =========================
           SELECTOR DE IDIOMA
        ========================= */

        const select =
            document.getElementById(
                "language"
            );


        if (select) {

            select.addEventListener(
                "change",
                e => {

                    loadLanguage(
                        e.target.value
                    );

                }
            );


            const saved =
                localStorage.getItem(
                    "lang"
                ) || "es";


            select.value =
                saved;


            loadLanguage(
                saved
            );

        }


        /* =========================
           BOTÓN EDICIÓN
        ========================= */

        const editBtn =
            document.getElementById(
                "editBtn"
            );


        if (editBtn) {

            editBtn.addEventListener(
                "click",
                toggleEditMode
            );

        }


        /* =========================
           BOTÓN EXPORTAR
        ========================= */

        const exportBtn =
            document.getElementById(
                "exportBtn"
            );


        if (exportBtn) {

            exportBtn.addEventListener(
                "click",
                exportJSON
            );

        }


        /* =========================
           BOTÓN MOSTRAR JSON
        ========================= */

        const toggleBtn =
            document.getElementById(
                "toggleOutputBtn"
            );


        if (toggleBtn) {

            toggleBtn.addEventListener(
                "click",
                toggleOutput
            );

        }


        /* =========================
           BOTONES DE IDIOMA
        ========================= */

        document
            .querySelectorAll(".lang")
            .forEach(el => {

                el.addEventListener(
                    "click",
                    e => {

                        e.preventDefault();

                        const lang =
                            el.dataset.langCode;


                        if (lang) {

                            loadLanguage(
                                lang
                            );

                        }

                    }
                );

            });

    }
);
