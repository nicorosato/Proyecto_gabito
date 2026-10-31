// 1. selecciona el elemento de audio por su ID
const sonidoClic = document.getElementById('sonido-clic');

// 2. selecciona todos los enlaces dentro del menú de navegación
const enlaces = document.querySelectorAll('.menu-navegacion a');

// 3. recorre cada enlace para controlar el redireccionamiento y asegurar el audio completo
enlaces.forEach(enlace => {
    enlace.addEventListener('click', (evento) => {
        // obtenemos la dirección a la que apunta el botón (ejemplo: que-es-under.html)
        const urlDestino = enlace.getAttribute('href');

        // si el enlace es solo un '#' o está vacío, dejamos que suene normal sin redireccionar
        if (urlDestino === '#' || urlDestino === '') {
            sonidoClic.currentTime = 0;
            sonidoClic.play();
            return;
        }

        // frena la redirección instantanea del navegador para que no corte el audio
        evento.preventDefault(); 

        // reinicia y reproduce el audio
        sonidoClic.currentTime = 0;
        sonidoClic.play();

        // le pone un delay para que el plu se escuche completo
        setTimeout(() => {
            window.location.href = urlDestino;
        }, 700); 
    });
});


 const reproductor = document.getElementById('reproductor');
    // Seleccionamos todos los botones que tienen la clase .boton-cancion
    const botones = document.querySelectorAll('.boton-cancion');

    // Agregamos la lógica a cada botón de la lista
    botones.forEach(boton => {
        boton.addEventListener('click', () => {
            const rutaCancion = boton.getAttribute('data-src');

            // 1. SI LA CANCIÓN DE ESTE BOTÓN YA ESTÁ SONANDO -> LA PAUSAMOS
            if (reproductor.src.includes(rutaCancion) && !reproductor.paused) {
                reproductor.pause();
                boton.innerText = "▶"; // Vuelve a icono de Play
            } 
            
            // 2. SI ESTABA PAUSADA PERO ES LA MISMA CANCIÓN -> REANUDAMOS
            else if (reproductor.src.includes(rutaCancion) && reproductor.paused) {
                reproductor.play();
                boton.innerText = "⏸"; // Cambia a icono de Pause
            } 
            
            // 3. SI SE SELECCIONÓ UNA CANCIÓN NUEVA / DISTINTA
            else {
                // Reseteamos todos los botones de la página a "▶" por si había otro sonando
                botones.forEach(b => b.innerText = "▶");
                
                // Asignamos la nueva ruta al reproductor y le damos Play
                reproductor.src = rutaCancion;
                
                boton.innerText = "⏸"; // Cambia a icono de Pause
            }
        });
    });

    //Si la canción termina sola por completo, el botón vuelve a ponerse en Play automáticamente
     reproductor.addEventListener('ended', () => {
        botones.forEach(b => b.innerText = "▶");
    });