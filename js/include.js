document.addEventListener("DOMContentLoaded", async function () {

    const includes = document.querySelectorAll("[data-include]");

    for (const element of includes) {

        const file = element.getAttribute("data-include");

        try {

            const response = await fetch(file);

            if (!response.ok) {
                throw new Error(
                    `HTTP ${response.status} - ${file}`
                );
            }

            const html = await response.text();

            element.innerHTML = html;

            console.log("Include cargado:", file);

        } catch (error) {

            console.error(
                "Error cargando include:",
                file,
                error
            );

        }
    }

    /*
     * TODOS los HTML ya están dentro del DOM.
     */

    console.log("Todos los includes cargados");

    /*
     * Inicializamos el horario AHORA.
     */

    if (
        typeof window.initTimetable === "function"
    ) {

        window.initTimetable();

    } else {

        console.error(
            "ERROR: initTimetable() no está disponible"
        );

    }

});
