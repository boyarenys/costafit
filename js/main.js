(function ($) {


    /*------------------
     Gallery
     --------------------*/

    window.openGallery = function (imageSrc) {

        $("#lightboxImage").attr("src", imageSrc);

        $("#lightbox").addClass("show");

    };

    window.closeGallery = function () {

        $("#lightbox").removeClass("show");

    };

    document.addEventListener("keydown", function (e) {

        if (e.key === "Escape") {
            closeGallery();
        }

    });

    /*------------------
    Scroll hacia arriba
    --------------------*/

    // Mostrar el bot�n solo al hacer scroll hacia abajo
    $(window).scroll(function () {
        const scrollTopBtn = $("#scrollTopBtn");
        if ($(this).scrollTop() > 200) {
            scrollTopBtn.fadeIn();
        } else {
            scrollTopBtn.fadeOut();
        }
    });

    // Funci�n para hacer scroll hacia arriba
    $('#scrollTopBtn').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 'smooth');
    });


    /*------------------
         Chatbox
    --------------------*/

    document.addEventListener("DOMContentLoaded", function () {
        var chatIcon = document.getElementById("chatIcon");
        var chatBox = document.getElementById("chatBox");
        var closeChat = document.getElementById("closeChat");

        // Agrega el evento de clic al contenedor chatIcon
        chatIcon.addEventListener("click", function (event) {
            // Comprueba si el clic ocurrió en el icono de WhatsApp o en el contenedor
            if (event.target === chatIcon || event.target.parentElement === chatIcon) {
                chatBox.style.display = "block";
            }
        });

        closeChat.addEventListener("click", function () {
            chatBox.style.display = "none";
        });

        document.addEventListener("click", function (event) {
            if (event.target !== chatIcon && !chatIcon.contains(event.target) && event.target !== chatBox && !chatBox.contains(event.target)) {
                chatBox.style.display = "none";
            }
        });
    });

    document.getElementById("sendMessage").addEventListener("click", function () {
        var userInput = document.getElementById("userInput").value;
        if (userInput.trim() !== "") {
            var messageElement = document.createElement("div");
            messageElement.textContent = "Tú: " + userInput;
            document.getElementById("chatMessages").appendChild(messageElement);
        }
    });


    /*------------------
     Formulario de case gratis
    --------------------*/
    $("#contact-form-one-day").submit(function (event) {
        event.preventDefault();

        // Obt�n los valores del formulario usando jQuery
        var name = $("#name").val();
        var email = $("#email").val();
        var day = $("#day").val();

        // Crea el mensaje que se enviar por WhatsApp
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
     MENU
    --------------------*/

   document.addEventListener("DOMContentLoaded", () => {

    const burger = document.getElementById("burger");
    const nav = document.getElementById("nav");

    // abrir / cerrar con burger
    burger.addEventListener("click", (e) => {
        e.stopPropagation();
        nav.classList.toggle("active");
    });

    // cerrar al clicar un link
    document.querySelectorAll("#nav a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
        });
    });

    // cerrar al clicar fuera
    document.addEventListener("click", (e) => {
        const isClickInside = nav.contains(e.target) || burger.contains(e.target);

        if (!isClickInside) {
            nav.classList.remove("active");
        }
    });

});



})(jQuery);