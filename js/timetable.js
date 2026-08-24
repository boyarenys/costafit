/* =========================================================
   HORARIO DINÁMICO
   ========================================================= */

window.initTimetable = function () {

    console.log("Inicializando horario...");


    /* ======================================================
       DATOS DEL HORARIO
       ====================================================== */

    const schedule = {

        lunes: [
            { start: "09:30", end: "10:15", name: "Cardio muaythai", type: "cardio" },
            { start: "10:30", end: "11:30", name: "Muay Thai", type: "muay" },
            { start: "11:30", end: "12:30", name: "Boxing", type: "boxing" },
            { start: "17:15", end: "18:00", name: "Muay Thai Educativo", type: "educativo" },
            { start: "18:00", end: "19:00", name: "Boxing", type: "boxing" },
            { start: "19:00", end: "20:30", name: "Jiu-Jitsu", type: "jiu" }
        ],

        martes: [
            { start: "09:30", end: "10:00", name: "Slow training", type: "slow-training" },
            { start: "10:00", end: "11:15", name: "Jiu-Jitsu", type: "jiu" },
            { start: "11:30", end: "12:30", name: "Rutina", type: "rutina" },
            { start: "17:00", end: "18:00", name: "Muay Thai Kids", type: "kids" },
            { start: "18:00", end: "19:00", name: "Muay Thai juniors", type: "juniors" },
            { start: "19:00", end: "20:00", name: "Muay Thai", type: "muay" },
            { start: "20:00", end: "21:00", name: "Defensa personal", type: "defense" }
        ],

        miércoles: [
            { start: "09:30", end: "10:15", name: "Cardio muaythai", type: "cardio" },
            { start: "10:30", end: "11:30", name: "Muay Thai", type: "muay" },
            { start: "11:30", end: "12:30", name: "Boxing", type: "boxing" },
            { start: "17:15", end: "18:00", name: "Muay Thai Educativo", type: "educativo" },
            { start: "18:00", end: "19:00", name: "Boxing", type: "boxing" },
            { start: "19:00", end: "20:30", name: "Jiu-Jitsu", type: "jiu" }
        ],

        jueves: [
            { start: "09:30", end: "10:00", name: "Slow training", type: "slow-training" },
            { start: "10:00", end: "11:15", name: "Jiu-Jitsu", type: "jiu" },
            { start: "11:30", end: "12:30", name: "Rutina", type: "rutina" },
            { start: "17:00", end: "18:00", name: "Muay Thai Kids", type: "kids" },
            { start: "18:00", end: "19:00", name: "Muay Thai juniors", type: "juniors" },
            { start: "19:00", end: "20:00", name: "Muay Thai", type: "muay" },
            { start: "20:00", end: "21:00", name: "Defensa personal", type: "defense" }
        ],

        viernes: [
            { start: "09:30", end: "10:15", name: "Cardio muaythai", type: "cardio" },
            { start: "10:30", end: "11:30", name: "Muay Thai", type: "muay" },
            { start: "11:30", end: "12:30", name: "Boxing", type: "boxing" },
            { start: "18:00", end: "19:00", name: "Boxing", type: "boxing" },
            { start: "19:00", end: "20:30", name: "Jiu-Jitsu", type: "jiu" }
        ]

    };


    /* ======================================================
       CONFIGURACIÓN
       ====================================================== */

    const dayNames = [
        "domingo",
        "lunes",
        "martes",
        "miércoles",
        "jueves",
        "viernes",
        "sábado"
    ];


    const dayIndexes = {
        lunes: 1,
        martes: 2,
        miércoles: 3,
        jueves: 4,
        viernes: 5
    };


    const dayTranslationKeys = {

        lunes: {
            long: "schedule_monday",
            short: "schedule_monday_short",
            letter: "schedule_monday_letter"
        },

        martes: {
            long: "schedule_tuesday",
            short: "schedule_tuesday_short",
            letter: "schedule_tuesday_letter"
        },

        miércoles: {
            long: "schedule_wednesday",
            short: "schedule_wednesday_short",
            letter: "schedule_wednesday_letter"
        },

        jueves: {
            long: "schedule_thursday",
            short: "schedule_thursday_short",
            letter: "schedule_thursday_letter"
        },

        viernes: {
            long: "schedule_friday",
            short: "schedule_friday_short",
            letter: "schedule_friday_letter"
        }

    };


    const monthTranslationKeys = [

        "schedule_month_january",
        "schedule_month_february",
        "schedule_month_march",
        "schedule_month_april",
        "schedule_month_may",
        "schedule_month_june",
        "schedule_month_july",
        "schedule_month_august",
        "schedule_month_september",
        "schedule_month_october",
        "schedule_month_november",
        "schedule_month_december"

    ];


    /* ======================================================
       ELEMENTOS HTML
       ====================================================== */

    const todayContainer =
        document.getElementById("schedule-today");

    const weekContainer =
        document.getElementById("schedule-week");

    const classesContainer =
        document.getElementById("schedule-day-classes");

    const dayNameElement =
        document.getElementById("schedule-day-name");

    const dayDateElement =
        document.getElementById("schedule-day-date");

    const prevButton =
        document.getElementById("schedule-prev-day");

    const nextButton =
        document.getElementById("schedule-next-day");

    const viewButtons =
        document.querySelectorAll(".schedule-view-btn");

    const dayButtons =
        document.querySelectorAll(".schedule-days button");


    /* ======================================================
       COMPROBACIÓN
       ====================================================== */

    console.log("schedule-today:", todayContainer);
    console.log("schedule-week:", weekContainer);
    console.log("schedule-day-classes:", classesContainer);
    console.log("schedule-day-name:", dayNameElement);
    console.log("schedule-day-date:", dayDateElement);
    console.log("schedule-prev-day:", prevButton);
    console.log("schedule-next-day:", nextButton);
    console.log("botones vista:", viewButtons.length);
    console.log("botones días:", dayButtons.length);


    if (
        !todayContainer ||
        !weekContainer ||
        !classesContainer ||
        !dayNameElement ||
        !dayDateElement ||
        !prevButton ||
        !nextButton
    ) {

        console.error(
            "❌ No se puede inicializar el horario."
        );

        return;
    }


    /* ======================================================
       SISTEMA DE TRADUCCIÓN
       ====================================================== */

    function getCurrentLanguage() {

        return (
            localStorage.getItem("language") ||
            localStorage.getItem("lang") ||
            document.documentElement.lang ||
            "es"
        );

    }


    function getTranslation(key, fallback = "") {

        /*
         * OPCIÓN 1:
         * Si lang.js tiene las traducciones disponibles
         * globalmente.
         */

        const lang =
            getCurrentLanguage();


        if (
            window.translations &&
            typeof window.translations === "object"
        ) {

            /*
             * Formato:
             *
             * translations.es.schedule_monday
             */

            if (
                window.translations[lang] &&
                typeof window.translations[lang] === "object" &&
                window.translations[lang][key] !== undefined
            ) {

                return window.translations[lang][key];

            }


            /*
             * Por si el idioma está guardado como
             * "es-ES", "en-US", etc.
             */

            const shortLang =
                lang.split("-")[0];

            if (
                window.translations[shortLang] &&
                typeof window.translations[shortLang] === "object" &&
                window.translations[shortLang][key] !== undefined
            ) {

                return window.translations[shortLang][key];

            }

        }


        /*
         * OPCIÓN 2:
         * Buscar un elemento data-lang existente.
         */

        const element =
            document.querySelector(
                `[data-lang="${key}"]`
            );

        if (element) {

            const text =
                element.textContent.trim();

            if (text) {
                return text;
            }

        }


        /*
         * Fallback.
         */

        return fallback;

    }


    /* ======================================================
       ACTUALIZAR TRADUCCIONES
       ====================================================== */

    function updateTimetableTranslations() {

        /*
         * HOY
         */

        const todayButton =
            document.querySelector(
                '.schedule-view-btn[data-view="today"]'
            );

        if (todayButton) {

            todayButton.textContent =
                getTranslation(
                    "schedule_today",
                    "Hoy"
                );

        }


        /*
         * SEMANA
         */

        const weekButton =
            document.querySelector(
                '.schedule-view-btn[data-view="week"]'
            );

        if (weekButton) {

            weekButton.textContent =
                getTranslation(
                    "schedule_week",
                    "Semana"
                );

        }


        /*
         * DÍAS
         */

        dayButtons.forEach(button => {

            const day =
                button.dataset.day;

            const keys =
                dayTranslationKeys[day];

            if (!keys) {
                return;
            }


            /*
             * LETRA
             */

            const letterElement =
                button.querySelector("span");

            if (letterElement) {

                letterElement.textContent =
                    getTranslation(
                        keys.letter,
                        letterElement.textContent
                    );

            }


            /*
             * NOMBRE CORTO
             */

            const shortElement =
                button.querySelector("small");

            if (shortElement) {

                shortElement.textContent =
                    getTranslation(
                        keys.short,
                        shortElement.textContent
                    );

            }

        });


        /*
         * Actualizar también el día que aparece
         * arriba.
         */

        renderDay(selectedDay);

    }

/* ======================================================
   ACTUALIZAR HORARIO AL CAMBIAR IDIOMA
   ====================================================== */

window.updateTimetableLanguage = function () {

    console.log(
        "🌍 Actualizando idioma del horario:",
        window.currentLang
    );

    /*
     * Actualizar:
     * - Hoy
     * - Semana
     * - L / M / X / J / V
     * - Lun / Mar / Mié / Jue / Vie
     */

    updateTimetableTranslations();


    /*
     * Actualizar:
     * - nombre completo del día
     * - fecha
     * - mes
     */

    updateDateHeader(
        selectedDay
    );


    /*
     * Volver a pintar las clases actuales
     */

    renderDay(
        selectedDay
    );

};
    /* ======================================================
       DÍA INICIAL
       ====================================================== */

    let currentDayIndex =
        new Date().getDay();


    if (
        currentDayIndex < 1 ||
        currentDayIndex > 5
    ) {

        currentDayIndex = 1;

    }


    let selectedDay =
        dayNames[currentDayIndex];


    /* ======================================================
       HORA → MINUTOS
       ====================================================== */

    function timeToMinutes(time) {

        const parts =
            time.split(":");

        return (
            parseInt(parts[0], 10) * 60 +
            parseInt(parts[1], 10)
        );

    }


    /* ======================================================
       CLASE ACTUAL
       ====================================================== */

    function isClassNow(classItem, day) {

        const now =
            new Date();

        const realDay =
            dayNames[now.getDay()];


        if (realDay !== day) {
            return false;
        }


        const currentMinutes =
            now.getHours() * 60 +
            now.getMinutes();


        const start =
            timeToMinutes(
                classItem.start
            );

        const end =
            timeToMinutes(
                classItem.end
            );


        return (
            currentMinutes >= start &&
            currentMinutes < end
        );

    }


    /* ======================================================
       CABECERA DEL DÍA
       ====================================================== */

    function updateDateHeader(day) {

        const keys =
            dayTranslationKeys[day];


        /*
         * NOMBRE DEL DÍA
         */

        if (keys) {

            dayNameElement.textContent =
                getTranslation(
                    keys.long,
                    day
                );

        } else {

            dayNameElement.textContent =
                day;

        }


        /*
         * FECHA
         */

        const today =
            new Date();

        const todayIndex =
            today.getDay();


        let difference =
            dayIndexes[day] -
            todayIndex;


        /*
         * Domingo
         */

        if (todayIndex === 0) {

            difference =
                dayIndexes[day] + 1;

        }


        /*
         * Sábado
         */

        else if (todayIndex === 6) {

            difference =
                dayIndexes[day] - 6;

        }


        const selectedDate =
            new Date(today);


        selectedDate.setDate(
            today.getDate() + difference
        );


        /*
         * NÚMERO DEL DÍA
         */

        const dayNumber =
            selectedDate.getDate();


        /*
         * MES
         */

        const monthIndex =
            selectedDate.getMonth();

        const monthKey =
            monthTranslationKeys[monthIndex];


        /*
         * Aquí está la parte importante:
         *
         * NO usamos toLocaleDateString()
         * para traducir el mes.
         *
         * Usamos directamente nuestra traducción.
         */

        const monthName =
            getTranslation(
                monthKey,
                ""
            );


        if (monthName) {

            dayDateElement.textContent =
                `${dayNumber} de ${monthName}`;

        } else {

            /*
             * Fallback si todavía no existe
             * la traducción.
             */

            const fallbackMonth =
                selectedDate.toLocaleDateString(
                    getCurrentLanguage(),
                    {
                        month: "long"
                    }
                );

            dayDateElement.textContent =
                `${dayNumber} de ${fallbackMonth}`;

        }

    }


    /* ======================================================
       BOTONES DE DÍAS
       ====================================================== */

    function updateDayButtons() {

        dayButtons.forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.day === selectedDay
            );

        });

    }


    /* ======================================================
       RENDERIZAR DÍA
       ====================================================== */

    function renderDay(day) {

        if (!schedule[day]) {
            return;
        }


        const classes =
            schedule[day];


        updateDateHeader(day);

        updateDayButtons();


        classesContainer.innerHTML = "";


        /*
         * SIN CLASES
         */

        if (!classes.length) {

            classesContainer.innerHTML = `

                <div class="schedule-no-classes">

                    <div class="schedule-no-classes-icon">
                        🥊
                    </div>

                    <div class="schedule-no-classes-title">
                        No hay clases
                    </div>

                    <div class="schedule-no-classes-text">
                        No hay clases programadas
                        para este día.
                    </div>

                </div>

            `;

            return;
        }


        /*
         * CLASES
         */

        classes.forEach(classItem => {

            const item =
                document.createElement("div");


            item.className =
                "schedule-day-item";


            if (
                isClassNow(
                    classItem,
                    day
                )
            ) {

                item.classList.add(
                    "is-now"
                );

            }


            item.innerHTML = `

                <div class="schedule-day-hour">
                    ${classItem.start}
                </div>

                <div class="schedule-day-card">

                    <span class="class ${classItem.type}">

                        <div class="class-name">
                            ${classItem.name}
                        </div>

                        <div class="class-time">
                            ${classItem.start}
                            -
                            ${classItem.end}
                        </div>

                    </span>

                </div>

            `;


            classesContainer.appendChild(item);

        });

    }


    /* ======================================================
       CAMBIAR DÍA
       ====================================================== */

    function setDay(day) {

        if (!schedule[day]) {
            return;
        }


        selectedDay =
            day;


        renderDay(day);

    }


    /* ======================================================
       BOTONES LUNES - VIERNES
       ====================================================== */

    dayButtons.forEach(button => {

        button.addEventListener(
            "click",
            function () {

                setDay(
                    this.dataset.day
                );

            }
        );

    });


    /* ======================================================
       DÍA ANTERIOR
       ====================================================== */

    prevButton.addEventListener(
        "click",
        function () {

            let index =
                dayIndexes[selectedDay];


            index--;


            if (index < 1) {
                index = 5;
            }


            setDay(
                dayNames[index]
            );

        }
    );


    /* ======================================================
       DÍA SIGUIENTE
       ====================================================== */

    nextButton.addEventListener(
        "click",
        function () {

            let index =
                dayIndexes[selectedDay];


            index++;


            if (index > 5) {
                index = 1;
            }


            setDay(
                dayNames[index]
            );

        }
    );


    /* ======================================================
       HOY / SEMANA
       ====================================================== */

    viewButtons.forEach(button => {

        button.addEventListener(
            "click",
            function () {

                const view =
                    this.dataset.view;


                viewButtons.forEach(btn => {

                    btn.classList.remove(
                        "active"
                    );

                });


                this.classList.add(
                    "active"
                );


                if (view === "today") {

                    todayContainer.style.display =
                        "block";

                    weekContainer.style.display =
                        "none";

                }


                if (view === "week") {

                    todayContainer.style.display =
                        "none";

                    weekContainer.style.display =
                        "block";

                }

            }
        );

    });


    /* ======================================================
       MARCAR DÍA REAL
       ====================================================== */

    function markRealToday() {

        const realDay =
            dayNames[
                new Date().getDay()
            ];


        dayButtons.forEach(button => {

            button.classList.toggle(
                "today",
                button.dataset.day === realDay
            );

        });

    }


    /* ======================================================
       CAMBIO DE IDIOMA
       ====================================================== */

    /*
     * Si tu lang.js dispara un evento cuando cambia
     * el idioma, podemos escuchar varios nombres comunes.
     */

    window.addEventListener(
        "languageChanged",
        function () {

            updateTimetableTranslations();

        }
    );


    window.addEventListener(
        "langChanged",
        function () {

            updateTimetableTranslations();

        }
    );


    window.addEventListener(
        "languagechange",
        function () {

            updateTimetableTranslations();

        }
    );


    /* ======================================================
       INICIALIZACIÓN
       ====================================================== */

    markRealToday();

    updateTimetableTranslations();

    renderDay(selectedDay);


    todayContainer.style.display =
        "block";

    weekContainer.style.display =
        "none";


    /* ======================================================
       ACTUALIZAR "AHORA"
       ====================================================== */

    setInterval(
        function () {

            if (
                todayContainer.style.display !==
                "none"
            ) {

                renderDay(
                    selectedDay
                );

            }

        },
        60000
    );


    console.log(
        "✅ Horario inicializado correctamente"
    );

};