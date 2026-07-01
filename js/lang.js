let translations = {};
let currentLang = "es";
let editMode = false;

/* =========================
   CARGAR IDIOMA
========================= */
async function loadLanguage(lang) {

    try {
        console.log("Cargando idioma:", lang);

        const response = await fetch(`./lang/${lang}.json`);

        if (!response.ok) {
            throw new Error("No se pudo cargar el JSON");
        }

        translations = await response.json();

        currentLang = lang;

        applyTranslations();

        localStorage.setItem("lang", lang); 5

        document.querySelectorAll(".lang").forEach(el => {

            el.classList.remove("active");

            if (el.dataset.langCode === lang) {
                el.classList.add("active");
            }
        });

    } catch (error) {
        console.error("Error cargando idioma:", error);
    }
}

/* =========================
   APLICAR TRADUCCIONES
========================= */
function applyTranslations() {

    document.querySelectorAll("[data-lang]").forEach(el => {

        const key = el.dataset.lang;

        if (translations[key]) {
            el.innerText = translations[key];
        }
    });
}

/* =========================
    generateJSONPreview
========================= */

function generateJSONPreview() {

    const data = {};

    document.querySelectorAll("[data-lang]").forEach(el => {

        const key = el.dataset.lang;
        data[key] = el.innerText.trim();
    });

    return JSON.stringify(data, null, 4);
}

/* =========================
   MODO EDICIÓN
========================= */
function toggleEditMode() {

    editMode = !editMode;

    document.querySelectorAll("[data-lang]").forEach(el => {

        el.contentEditable = editMode;

        el.style.outline = editMode ? "2px dashed red" : "none";
    });

    const btn = document.getElementById("editBtn");

    if (btn) {
        btn.innerText = editMode ? "Desactivar edición" : "Activar edición";
    }

    console.log("Edit mode:", editMode);
}

/* =========================
   EXPORTAR JSON
========================= */
function exportJSON() {

    const data = {};

    document.querySelectorAll("[data-lang]").forEach(el => {

        const key = el.dataset.lang;
        data[key] = el.innerText.trim();
    });

    const json = JSON.stringify(data, null, 4);

    console.log("JSON EXPORTADO:", json);

    // crear archivo descargable
    const blob = new Blob([json], { type: "application/json" });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = `${currentLang}.json`; // 👈 guarda como es.json o en.json

    document.body.appendChild(a);

    a.click();

    document.body.removeChild(a);

    URL.revokeObjectURL(url);
}

/* =========================
   MOSTRAR JSON
========================= */
function toggleOutput() {

    const output = document.getElementById("output");

    if (!output) return;

    const isHidden = output.style.display === "none" || output.style.display === "";

    if (isHidden) {

        // generar JSON actualizado
        const json = generateJSONPreview();

        output.textContent = json;

        output.style.display = "block";

        const btn = document.getElementById("toggleOutputBtn");
        if (btn) btn.innerText = "Ocultar JSON";

    } else {

        output.style.display = "none";

        const btn = document.getElementById("toggleOutputBtn");
        if (btn) btn.innerText = "Mostrar JSON";
    }
}

/* =========================
   INIT
========================= */
document.addEventListener("DOMContentLoaded", () => {

    console.log("DOM OK");

    /* LANGUAGE SELECT */
    const select = document.getElementById("language");

    if (select) {

        select.addEventListener("change", (e) => {
            loadLanguage(e.target.value);
        });

        const saved = localStorage.getItem("lang") || "es";

        select.value = saved;

        loadLanguage(saved);
    }

    /* EDIT BUTTON */
    const editBtn = document.getElementById("editBtn");

    if (editBtn) {
        editBtn.addEventListener("click", toggleEditMode);
    }

    /* EXPORT BUTTON */
    const exportBtn = document.getElementById("exportBtn");

    if (exportBtn) {
        exportBtn.addEventListener("click", exportJSON);
    }

    /* SHOW BUTTON */
    const toggleBtn = document.getElementById("toggleOutputBtn");

    if (toggleBtn) {
        toggleBtn.addEventListener("click", toggleOutput);
    }

    /* CHANGE LANGUAGE */
    document.querySelectorAll(".lang").forEach(el => {

        el.addEventListener("click", (e) => {

            e.preventDefault();

            const lang = el.dataset.langCode;

            if (lang) {
                loadLanguage(lang);

                localStorage.setItem("lang", lang);
            }
        });
    });

});