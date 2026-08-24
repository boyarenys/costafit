/* =========================================
   COSTA FIT · HOLIDAYS
   SOLO CAMBIAR ESTAS FECHAS
========================================= */

const vacacionesCostaFit = {

    inicio: "2026-08-17",

    fin: "2026-09-01"

};


/* =========================================
   ACTUALIZAR VACACIONES
========================================= */

function actualizarVacacionesCostaFit() {

    const seccion =
        document.getElementById("vacaciones");

    if (!seccion) {

        return;

    }


    /* =========================
       FECHAS
    ========================= */

    const inicio =
        crearFechaLocal(
            vacacionesCostaFit.inicio
        );

    const fin =
        crearFechaLocal(
            vacacionesCostaFit.fin
        );


    /* =========================
       FECHA ACTUAL
    ========================= */

    const ahora = new Date();

    const hoy = new Date(
        ahora.getFullYear(),
        ahora.getMonth(),
        ahora.getDate()
    );


    /* =========================
       COMPROBAR VACACIONES
    ========================= */

    const vacacionesActivas =
        hoy >= inicio &&
        hoy <= fin;


    /* =========================
       OCULTAR
    ========================= */

    if (!vacacionesActivas) {

        seccion.style.display = "none";

        return;

    }


    /* =========================
       MOSTRAR
    ========================= */

    seccion.style.display = "";


    /* =========================
       FECHA INICIO
    ========================= */

    const fechaInicio =
        document.getElementById(
            "fechaInicio"
        );

    if (fechaInicio) {

        fechaInicio.textContent =
            formatearFecha(inicio);

    }


    /* =========================
       FECHA FIN
    ========================= */

    const fechaFin =
        document.getElementById(
            "fechaFin"
        );

    if (fechaFin) {

        fechaFin.textContent =
            formatearFecha(fin);

    }


    /* =========================
       FECHA DE VUELTA
    ========================= */

    const vuelta =
        new Date(fin);

    vuelta.setDate(
        vuelta.getDate() + 1
    );


    const fechaVuelta =
        document.getElementById(
            "fechaVuelta"
        );

    if (fechaVuelta) {

        fechaVuelta.textContent =
            formatearFechaVuelta(vuelta);

    }


    /* =========================
       TRADUCCIONES
    ========================= */

    if (
        typeof applyTranslations ===
        "function"
    ) {

        applyTranslations();

    }

}


/* =========================================
   FECHA LOCAL
========================================= */

function crearFechaLocal(fecha) {

    const partes =
        fecha.split("-");

    return new Date(
        Number(partes[0]),
        Number(partes[1]) - 1,
        Number(partes[2])
    );

}


/* =========================================
   FECHA
========================================= */

function formatearFecha(fecha) {

    const idioma =
        window.currentLang || "es";

    return new Intl.DateTimeFormat(
        idioma,
        {
            day: "numeric",
            month: "long"
        }
    )
    .format(fecha)
    .toUpperCase();

}


/* =========================================
   FECHA VUELTA
========================================= */

function formatearFechaVuelta(fecha) {

    const idioma =
        window.currentLang || "es";

    return new Intl.DateTimeFormat(
        idioma,
        {
            day: "numeric",
            month: "long"
        }
    )
    .format(fecha);

}


/* =========================================
   CUANDO EL DOM ESTÁ LISTO
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        /*
         * Esperamos un poco porque
         * lang.js también inicializa
         * las traducciones en DOMContentLoaded.
         */

        setTimeout(() => {

            actualizarVacacionesCostaFit();

        }, 100);

    }
);


/* =========================================
   CUANDO CAMBIA EL IDIOMA
========================================= */

window.addEventListener(
    "languageChanged",
    () => {

        actualizarVacacionesCostaFit();

    }
);