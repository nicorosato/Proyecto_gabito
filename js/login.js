// 1. FUNCIÓN AUXILIAR PARA REDIRECCIONES SIMPLES
function configurarBoton(idBoton, urlDestino) {
    const boton = document.getElementById(idBoton);
    if (boton !== null) {
        boton.addEventListener("click", function() {
            window.location.href = urlDestino;
        });
    }
}

// Botones globales de navegación simple
configurarBoton("ccrear", "crear-cuenta.html");
configurarBoton("perfil", "inicio-sesion.html");
configurarBoton("volver", "pestaña-principal.html");


// 3. VALIDACIÓN DE LOGIN ("siguiente")
const botonSiguiente = document.getElementById("siguiente");
if (botonSiguiente !== null) {
    botonSiguiente.addEventListener("click", function() {
        const nombre = document.getElementById("nombre").value.trim();
        const contra = document.getElementById("contra").value;

        if (nombre === "" || contra === "") {
            alert("Debe completar todos los campos");
        } else {
            // Traemos los usuarios guardados en la memoria del navegador
            let listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

            // Buscamos si coincide el nombre y la contraseña
            const usuarioValido = listaUsuarios.find(function(u) {
                return u.nombre === nombre && u.contra === contra;
            });

            if (usuarioValido) {
                // Guardamos qué usuario inició sesión (servirá para el perfil)
                localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioValido));

                alert("¡Inicio de sesión exitoso!");
                window.location.href = 'pestaña-principal.html';
            } else {
                alert("Nombre o contraseña incorrectos.");
            }
        }
    });
}
    

// 4. VALIDACIÓN Y GUARDADO email DE REGISTRO ("ccrear")
const crearCuenta2 = document.getElementById("ccrear");
const formularioRegistro = document.getElementById("RegistroUsuario");

if (crearCuenta2 !== null) {
    crearCuenta2.addEventListener("click", function(e) {
        // Evita que el formulario recargue la página de forma imprevista
        e.preventDefault(); 

        const nombre = document.getElementById("nombre").value.trim();
        const contraa = document.getElementById("contraa").value.trim();

        if (nombre === "" || contraa === "") {
            alert("Debe completar todos los campos");
        } else {
            // 1. Obtener la lista actual de usuarios del localStorage o crear una nueva si está vacía
            let listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

            // 2. Verificar si el nombre ya está registrado para evitar duplicados
            const existeUsuario = listaUsuarios.some(u => u.nombre === nombre);
            if (existeUsuario) {
                alert("Este nombre ya está registrado pequeño joseador, elegi otro");
                return;
            }

            // 3. Crear el nuevo objeto de usuario (Cambiado 'contraa' a 'contra' para que coincida con el Login)
            const nuevoUsuario = {
                nombre: nombre,
                contra: contraa 
            };

            // 4. Guardar en el arreglo y empujar de vuelta al localStorage
            listaUsuarios.push(nuevoUsuario);
            localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));

            alert("¡Cuenta creada con éxito!");
            window.location.href = 'inicio-sesion.html';
        }
    });
}

sessionStorage.setItem("nombre",listaUsuarios.nombre);
sessionStorage.setItem("contrañesa",listaUsuarios.apellido);