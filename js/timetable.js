/* =========================================================
   TIMETABLE + RESERVAS
   ========================================================= */

window.initTimetable = function () {

    console.log("Inicializando horario + reservas...");


    /* ======================================================
       CONFIGURACIÓN
       ====================================================== */

    const WHATSAPP_NUMBER = "34XXXXXXXXX";
    const CLASS_PRICE = 10;


    /* ======================================================
       DATOS DEL HORARIO
       ====================================================== */

    const schedule = {

        lunes: [
            {
                start: "09:30",
                end: "10:15",
                name: "Cardio muaythai",
                type: "cardio"
            },
            {
                start: "10:30",
                end: "11:30",
                name: "Muay Thai",
                type: "muay"
            },
            {
                start: "11:30",
                end: "12:30",
                name: "Boxing",
                type: "boxing"
            },
            {
                start: "17:15",
                end: "18:00",
                name: "Muay Thai Educativo",
                type: "educativo"
            },
            {
                start: "18:00",
                end: "19:00",
                name: "Boxing",
                type: "boxing"
            },
            {
                start: "19:00",
                end: "20:30",
                name: "Jiu-Jitsu",
                type: "jiu"
            }
        ],

        martes: [
            {
                start: "09:30",
                end: "10:00",
                name: "Slow training",
                type: "slow-training"
            },
            {
                start: "10:00",
                end: "11:15",
                name: "Jiu-Jitsu",
                type: "jiu"
            },
            {
                start: "11:30",
                end: "12:30",
                name: "Rutina",
                type: "rutina"
            },
            {
                start: "17:00",
                end: "18:00",
                name: "Muay Thai Kids",
                type: "kids"
            },
            {
                start: "18:00",
                end: "19:00",
                name: "Muay Thai juniors",
                type: "juniors"
            },
            {
                start: "19:00",
                end: "20:00",
                name: "Muay Thai",
                type: "muay"
            },
            {
                start: "20:00",
                end: "21:00",
                name: "Defensa personal",
                type: "defense"
            }
        ],

        miércoles: [
            {
                start: "09:30",
                end: "10:15",
                name: "Cardio muaythai",
                type: "cardio"
            },
            {
                start: "10:30",
                end: "11:30",
                name: "Muay Thai",
                type: "muay"
            },
            {
                start: "11:30",
                end: "12:30",
                name: "Boxing",
                type: "boxing"
            },
            {
                start: "17:15",
                end: "18:00",
                name: "Muay Thai Educativo",
                type: "educativo"
            },
            {
                start: "18:00",
                end: "19:00",
                name: "Boxing",
                type: "boxing"
            },
            {
                start: "19:00",
                end: "20:30",
                name: "Jiu-Jitsu",
                type: "jiu"
            }
        ],

        jueves: [
            {
                start: "09:30",
                end: "10:00",
                name: "Slow training",
                type: "slow-training"
            },
            {
                start: "10:00",
                end: "11:15",
                name: "Jiu-Jitsu",
                type: "jiu"
            },
            {
                start: "11:30",
                end: "12:30",
                name: "Rutina",
                type: "rutina"
            },
            {
                start: "17:00",
                end: "18:00",
                name: "Muay Thai Kids",
                type: "kids"
            },
            {
                start: "18:00",
                end: "19:00",
                name: "Muay Thai juniors",
                type: "juniors"
            },
            {
                start: "19:00",
                end: "20:00",
                name: "Muay Thai",
                type: "muay"
            },
            {
                start: "20:00",
                end: "21:00",
                name: "Defensa personal",
                type: "defense"
            }
        ],

        viernes: [
            {
                start: "09:30",
                end: "10:15",
                name: "Cardio muaythai",
                type: "cardio"
            },
            {
                start: "10:30",
                end: "11:30",
                name: "Muay Thai",
                type: "muay"
            },
            {
                start: "11:30",
                end: "12:30",
                name: "Boxing",
                type: "boxing"
            },
            {
                start: "18:00",
                end: "19:00",
                name: "Boxing",
                type: "boxing"
            },
            {
                start: "19:00",
                end: "20:30",
                name: "Jiu-Jitsu",
                type: "jiu"
            }
        ]

    };


    /* ======================================================
       DÍAS
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


    const weekDays = [
        "lunes",
        "martes",
        "miércoles",
        "jueves",
        "viernes"
    ];


    const dayIndexes = {
        lunes: 1,
        martes: 2,
        miércoles: 3,
        jueves: 4,
        viernes: 5
    };


    /* ======================================================
       TRADUCCIONES
       ====================================================== */

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
       ELEMENTOS PRINCIPALES
       ====================================================== */

    const todayContainer =
        document.getElementById("schedule-today");

    const weekContainer =
        document.getElementById("schedule-week");

    const weekBody =
        document.getElementById("schedule-week-body");

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
       ELEMENTOS MODAL
       ====================================================== */

    const bookingOverlay =
        document.getElementById("bookingOverlay");

    const bookingClose =
        document.getElementById("bookingClose");

    const bookingForm =
        document.getElementById("bookingForm");

    const bookingClass =
        document.getElementById("bookingClass");

    const bookingDate =
        document.getElementById("bookingDate");

    const bookingTime =
        document.getElementById("bookingTime");


    /* ======================================================
       COMPROBACIÓN
       ====================================================== */

    if (
        !todayContainer ||
        !weekContainer ||
        !weekBody ||
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
       ESTADO
       ====================================================== */

    let currentView = "today";

    let currentDayIndex =
        new Date().getDay();


    /*
     * Si estamos en sábado o domingo,
     * empezamos mostrando lunes.
     */

    if (
        currentDayIndex < 1 ||
        currentDayIndex > 5
    ) {

        currentDayIndex = 1;

    }


    let selectedDay =
        dayNames[currentDayIndex];



    /* ======================================================
       IDIOMA
       ====================================================== */

    function getCurrentLanguage() {

        const storedLanguage =
            localStorage.getItem("language") ||
            localStorage.getItem("lang");

        const htmlLanguage =
            document.documentElement.lang;

        const language =
            storedLanguage ||
            htmlLanguage ||
            "es";

        return language
            .toLowerCase()
            .trim()
            .split("-")[0];

    }

    /* ======================================================
       TRADUCCIÓN
       ====================================================== */
    function getTranslation(key, fallback = "") {

        const lang =
            getCurrentLanguage();

        /*
         * ==================================================
         * 1. window.translations
         * ==================================================
         */

        if (
            window.translations &&
            typeof window.translations === "object"
        ) {

            /*
             * translations.ca.schedule_book
             */

            if (
                window.translations[lang] &&
                typeof window.translations[lang] === "object" &&
                window.translations[lang][key] !== undefined
            ) {

                return window.translations[lang][key];

            }


            /*
             * Por si translations utiliza:
             *
             * translations["ca-ES"]
             */

            const fullLanguage =
                document.documentElement.lang;

            if (
                fullLanguage &&
                window.translations[fullLanguage] &&
                window.translations[fullLanguage][key] !== undefined
            ) {

                return window.translations[fullLanguage][key];

            }

        }


        /*
         * ==================================================
         * 2. Buscar directamente en elementos HTML
         * ==================================================
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
         * ==================================================
         * 3. Fallback
         * ==================================================
         */

        return fallback;

    }


    /* ======================================================
       HORA → MINUTOS
       ====================================================== */

    function timeToMinutes(time) {

        if (!time || typeof time !== "string") {
            return 0;
        }


        const parts =
            time.split(":");


        return (
            parseInt(parts[0], 10) * 60 +
            parseInt(parts[1], 10)
        );

    }


    /* ======================================================
       DURACIÓN
       ====================================================== */

    function getClassDuration(start, end) {

        const startMinutes =
            timeToMinutes(start);


        const endMinutes =
            timeToMinutes(end);


        const duration =
            endMinutes - startMinutes;


        return `${duration} min`;

    }


    /*
     * Alias para mantener compatibilidad
     * con cualquier parte anterior del código.
     */

    function getDuration(start, end) {

        return getClassDuration(
            start,
            end
        );

    }


    /* ======================================================
       FECHA DEL DÍA
       ====================================================== */

    function getDateForDay(day) {

        const today =
            new Date();


        const todayIndex =
            today.getDay();


        let difference =
            dayIndexes[day] -
            todayIndex;


        /*
         * Domingo → siguiente lunes-viernes
         */

        if (todayIndex === 0) {

            difference =
                dayIndexes[day] + 1;

        }


        /*
         * Sábado → siguiente lunes-viernes
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


        return selectedDate;

    }


    /* ======================================================
       FECHA FORMATEADA
       ====================================================== */

    function getFormattedDate(day) {

        const date =
            getDateForDay(day);


        const dayNumber =
            date.getDate();


        const monthIndex =
            date.getMonth();


        const monthName =
            getTranslation(
                monthTranslationKeys[monthIndex],
                date.toLocaleDateString(
                    getCurrentLanguage(),
                    {
                        month: "long"
                    }
                )
            );


        return `${dayNumber} de ${monthName}`;

    }


    /* ======================================================
       TRADUCCIONES DE LA INTERFAZ
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


            const letter =
                button.querySelector("span");


            if (letter) {

                letter.textContent =
                    getTranslation(
                        keys.letter,
                        letter.textContent
                    );

            }


            const short =
                button.querySelector("small");


            if (short) {

                short.textContent =
                    getTranslation(
                        keys.short,
                        short.textContent
                    );

            }

        });


        /*
         * Resto de elementos con data-lang
         */

        document
            .querySelectorAll("[data-lang]")
            .forEach(element => {

                /*
                 * Los botones de días ya se han tratado arriba.
                 */

                if (
                    element.closest(".schedule-days")
                ) {

                    return;

                }


                const key =
                    element.dataset.lang;


                const translated =
                    getTranslation(
                        key,
                        element.textContent.trim()
                    );


                if (translated) {

                    element.textContent =
                        translated;

                }

            });

    }


    /* ======================================================
       CABECERA DEL DÍA
       ====================================================== */

    function updateDateHeader(day) {

        const keys =
            dayTranslationKeys[day];


        if (keys) {

            dayNameElement.textContent =
                getTranslation(
                    keys.long,
                    day
                );

        }


        dayDateElement.textContent =
            getFormattedDate(day);

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
       BOTONES DE DÍA
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
       MODAL · ABRIR
       ====================================================== */

    function openBooking(classItem, day) {

        if (!bookingOverlay) {

            return;

        }


        const dayName =
            getTranslation(
                dayTranslationKeys[day]?.long,
                day
            );


        const date =
            getFormattedDate(day);


        const duration =
            getClassDuration(
                classItem.start,
                classItem.end
            );


        if (bookingClass) {

            bookingClass.textContent =
                classItem.name;

        }


        if (bookingDate) {

            bookingDate.textContent =
                `${dayName} · ${date}`;

        }


        if (bookingTime) {

            bookingTime.textContent =
                `${duration} · ${classItem.start} - ${classItem.end}`;

        }


        bookingOverlay.classList.add(
            "open"
        );


        bookingOverlay.setAttribute(
            "aria-hidden",
            "false"
        );


        document.body.style.overflow =
            "hidden";


        setTimeout(() => {

            const nameInput =
                document.getElementById(
                    "bookingName"
                );


            if (nameInput) {

                nameInput.focus();

            }

        }, 100);

    }


    /* ======================================================
       MODAL · CERRAR
       ====================================================== */

    function closeBooking() {

        if (!bookingOverlay) {

            return;

        }


        bookingOverlay.classList.remove(
            "open"
        );


        bookingOverlay.setAttribute(
            "aria-hidden",
            "true"
        );


        document.body.style.overflow =
            "";

    }


    /*
     * Función pública por si otro código la necesita.
     */

    window.openTimetableBooking =
        openBooking;


    /* ======================================================
       WHATSAPP
       ====================================================== */

    function sendBookingToWhatsApp(event) {

        event.preventDefault();


        const nameInput =
            document.getElementById(
                "bookingName"
            );


        const phoneInput =
            document.getElementById(
                "bookingPhone"
            );


        const emailInput =
            document.getElementById(
                "bookingEmail"
            );


        const name =
            nameInput
                ? nameInput.value.trim()
                : "";


        const phone =
            phoneInput
                ? phoneInput.value.trim()
                : "";


        const email =
            emailInput
                ? emailInput.value.trim()
                : "";


        if (
            !name ||
            !phone ||
            !email
        ) {

            return;

        }


        const selectedClass =
            bookingClass
                ? bookingClass.textContent.trim()
                : "";


        const selectedDate =
            bookingDate
                ? bookingDate.textContent.trim()
                : "";


        const selectedTime =
            bookingTime
                ? bookingTime.textContent.trim()
                : "";


        const message =

            `🥊 ${getTranslation(
                "booking_whatsapp_message",
                "Nueva reserva Costa Fit"
            )}

${getTranslation(
                "booking_whatsapp_name",
                "Nombre"
            )}: ${name}

${getTranslation(
                "booking_whatsapp_phone",
                "Teléfono"
            )}: ${phone}

${getTranslation(
                "booking_whatsapp_email",
                "Email"
            )}: ${email}

${getTranslation(
                "booking_whatsapp_class",
                "Clase"
            )}: ${selectedClass}

${getTranslation(
                "booking_whatsapp_date",
                "Día"
            )}: ${selectedDate}

${getTranslation(
                "booking_whatsapp_time",
                "Horario"
            )}: ${selectedTime}

${getTranslation(
                "booking_whatsapp_price",
                "Precio"
            )}: ${CLASS_PRICE} €`;


        const encodedMessage =
            encodeURIComponent(
                message
            );


        const whatsappURL =
            `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;


        window.open(
            whatsappURL,
            "_blank",
            "noopener,noreferrer"
        );


        closeBooking();

    }


    /* ======================================================
       EVENTOS MODAL
       ====================================================== */

    if (bookingClose) {

        bookingClose.addEventListener(
            "click",
            closeBooking
        );

    }


    if (bookingOverlay) {

        bookingOverlay.addEventListener(
            "click",
            function (event) {

                if (
                    event.target ===
                    bookingOverlay
                ) {

                    closeBooking();

                }

            }
        );

    }


    if (bookingForm) {

        bookingForm.addEventListener(
            "submit",
            sendBookingToWhatsApp
        );

    }


    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape"
            ) {

                closeBooking();

            }

        }
    );


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


        classesContainer.innerHTML =
            "";


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
                        ${getTranslation(
                "schedule_no_classes",
                "No hay clases"
            )}
                    </div>

                    <div class="schedule-no-classes-text">
                        ${getTranslation(
                "schedule_no_classes_text",
                "No hay clases programadas para este día."
            )}
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

                <div class="schedule-day-card">

                    <div class="class ${classItem.type}">

                        <div class="class-time">
                            ${classItem.start}
                        </div>

                        <div class="class-name">
                            ${classItem.name}
                        </div>

                        <div class="class-duration">
                            ${getClassDuration(
                classItem.start,
                classItem.end
            )}
                            · ${classItem.start} - ${classItem.end}
                        </div>

                       <button
    type="button"
    class="class-book"
    data-lang="schedule_book">
    ${getTranslation(
                "schedule_book",
                "Probar clase"
            )}
</button>

                    </div>

                </div>

            `;


            const bookButton =
                item.querySelector(
                    ".class-book"
                );


            if (bookButton) {

                bookButton.addEventListener(
                    "click",
                    function () {

                        openBooking(
                            classItem,
                            day
                        );

                    }
                );

            }


            classesContainer.appendChild(
                item
            );

        });

    }


    /* ======================================================
       RENDERIZAR SEMANA
       ====================================================== */

    function renderWeek() {

        if (!weekBody) {

            return;

        }


        /*
         * Limpiar tabla
         */

        weekBody.innerHTML =
            "";


        /* ==================================================
           CABECERAS DE LOS DÍAS
           ================================================== */

        document
            .querySelectorAll("[data-day-header]")
            .forEach(header => {

                const rawDay =
                    header.dataset.dayHeader;


                /*
                 * El HTML tiene:
                 *
                 * miercoles
                 *
                 * mientras JS utiliza:
                 *
                 * miércoles
                 */

                const normalizedDay =
                    rawDay === "miercoles"
                        ? "miércoles"
                        : rawDay;


                const keys =
                    dayTranslationKeys[
                    normalizedDay
                    ];


                if (!keys) {

                    return;

                }


                header.textContent =
                    getTranslation(
                        keys.short,
                        normalizedDay
                    );

            });


        /* ==================================================
           OBTENER TODAS LAS HORAS
           ================================================== */

        const times =
            new Set();


        weekDays.forEach(day => {

            const classes =
                schedule[day] || [];


            classes.forEach(classItem => {

                times.add(
                    classItem.start
                );

            });

        });


        /* ==================================================
           ORDENAR HORAS
           ================================================== */

        const sortedTimes =
            Array.from(times).sort(
                (a, b) =>
                    timeToMinutes(a) -
                    timeToMinutes(b)
            );


        /* ==================================================
           SIN CLASES
           ================================================== */

        if (!sortedTimes.length) {

            const row =
                document.createElement("tr");


            const cell =
                document.createElement("td");


            cell.colSpan =
                weekDays.length + 1;


            cell.className =
                "schedule-no-classes";


            cell.textContent =
                getTranslation(
                    "schedule_no_classes",
                    "No hay clases"
                );


            row.appendChild(
                cell
            );


            weekBody.appendChild(
                row
            );


            return;

        }


        /* ==================================================
           CREAR FILAS
           ================================================== */

        sortedTimes.forEach(time => {

            const row =
                document.createElement("tr");


            /* ==============================================
               COLUMNA HORA
               ============================================== */

            const hourCell =
                document.createElement("td");


            hourCell.className =
                "schedule-hour-column";


            hourCell.textContent = time;


            row.appendChild(
                hourCell
            );


            /* ==============================================
               COLUMNAS DE LOS DÍAS
               ============================================== */

            weekDays.forEach(day => {

                const cell =
                    document.createElement("td");


                cell.className =
                    "schedule-week-cell";


                const classes =
                    schedule[day] || [];


                /*
                 * Buscar las clases que empiezan
                 * exactamente a esta hora.
                 */

                const matchingClasses =
                    classes.filter(
                        classItem =>
                            classItem.start === time
                    );


                /* ==========================================
                   CREAR CLASES
                   ========================================== */

                matchingClasses.forEach(
                    classItem => {

                        const classElement =
                            document.createElement("div");


                        classElement.className =
                            `class ${classItem.type}`;


                        classElement.dataset.day =
                            day;


                        classElement.dataset.start =
                            classItem.start;


                        classElement.dataset.end =
                            classItem.end;


                        classElement.dataset.name =
                            classItem.name;


                        /*
                         * Si la clase está ocurriendo ahora,
                         * también se marca en semana.
                         */

                        if (
                            isClassNow(
                                classItem,
                                day
                            )
                        ) {

                            classElement.classList.add(
                                "is-now"
                            );

                        }


                        classElement.innerHTML = `

                            <div class="class-time">
                                ${classItem.start} - ${classItem.end}
                            </div>

                            <div class="class-name">
                                ${classItem.name}
                            </div>

                            <div class="class-duration">
                                ${getClassDuration(
                            classItem.start,
                            classItem.end
                        )}
                            </div>

                           

                        `;




                        cell.appendChild(
                            classElement
                        );

                    }
                );


                row.appendChild(
                    cell
                );

            });


            weekBody.appendChild(
                row
            );

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


        renderDay(
            selectedDay
        );

    }


    /* ======================================================
       BOTONES DE DÍA
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
       CAMBIO DE VISTA
       ====================================================== */

    function setView(view) {

        /*
         * Validar vista
         */

        if (
            view !== "today" &&
            view !== "week"
        ) {

            view = "today";

        }


        /*
         * Guardar estado
         */

        currentView =
            view;


        /*
         * Botones activos
         */

        viewButtons.forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.view === view
            );

        });


        /*
         * VISTA HOY
         */

        if (view === "today") {

            todayContainer.hidden =
                false;


            weekContainer.hidden =
                true;


            renderDay(
                selectedDay
            );

        }


        /*
         * VISTA SEMANA
         */

        else {

            todayContainer.hidden =
                true;


            weekContainer.hidden =
                false;


            renderWeek();

        }

    }


    /* ======================================================
       BOTONES HOY / SEMANA
       ====================================================== */

    viewButtons.forEach(button => {

        button.addEventListener(
            "click",
            function () {

                setView(
                    this.dataset.view
                );

            }
        );

    });


    /* ======================================================
       CAMBIO DE IDIOMA
       ====================================================== */

    function refreshTimetable() {

        updateTimetableTranslations();

        markRealToday();


        if (
            currentView === "week"
        ) {

            renderWeek();

        }

        else {

            renderDay(
                selectedDay
            );

        }

    }


    /*
     * Función pública
     */

    window.updateTimetableLanguage =
        refreshTimetable;


    /*
     * Evento 1
     */

    window.addEventListener(
        "languageChanged",
        refreshTimetable
    );


    /*
     * Evento 2
     */

    window.addEventListener(
        "langChanged",
        refreshTimetable
    );


    /*
     * Evento 3
     */

    window.addEventListener(
        "languagechange",
        refreshTimetable
    );


    /* ======================================================
       INICIALIZACIÓN
       ====================================================== */

    markRealToday();

    updateTimetableTranslations();

    setView(
        "today"
    );


    /* ======================================================
       ACTUALIZAR ESTADO CADA MINUTO
       ====================================================== */

    setInterval(
        function () {

            markRealToday();


            if (
                currentView === "week"
            ) {

                renderWeek();

            }

            else {

                renderDay(
                    selectedDay
                );

            }

        },
        60000
    );


    console.log(
        "✅ Horario + reservas inicializado"
    );

};
