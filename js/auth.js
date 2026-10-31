document.addEventListener("DOMContentLoaded", () => {
    // 1. Obtener los botones del HTML
    const btnLogin = document.getElementById("btn-login");
    const btnLogout = document.getElementById("btn-logout");

    // 2. Verificar si hay un usuario guardado en localStorage
    // (Cambia "usuarioLogueado" por la clave exacta que usaste en tu login)
    const usuarioDeSesion = localStorage.getItem("usuarioLogueado");

    // 3. Modificar la visibilidad según el estado de la sesión
    if (usuarioDeSesion) {
        btnLogin.style.display = "none";    // Oculta "Iniciar Sesión"
        btnLogout.style.display = "inline-block"; // Muestra "Cerrar Sesión"
    } else {
        btnLogin.style.display = "inline-block";
        btnLogout.style.display = "none";
    }

    // 4. Agregar la lógica para Cerrar Sesión
    btnLogout.addEventListener("click", (e) => {
        e.preventDefault(); // Evita que la página salte
        localStorage.removeItem("usuarioLogueado"); // Borra la sesión
        window.location.reload(); // Recarga la página para aplicar los cambios
    });
});