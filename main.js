// Selección de elementos del DOM
let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');
let botonLimpiar = document.getElementById('limpiar'); // Cambiado a 'botonLimpiar'

// Cadena de caracteres para la generación de contraseñas
const cadenaCarcateres = 'ABCDEFGHIJKLMNOPQRSTVWXYZabcdefghijklmnopqrstvwxzy1234567890!#$%&*';

// Función para generar una contraseña
function generarpass() {
    let NumDigital = parseInt(cantidad.value);
    if (NumDigital < 8) {
        alert("La cantidad de caracteres tiene que ser mayor que 8");
        return;
    }

    let password = '';
    for (let i = 0; i < NumDigital; i++) {
        let caracterAleatorio = cadenaCarcateres[Math.floor(Math.random() * cadenaCarcateres.length)];
        password += caracterAleatorio;
    }

    contrasena.value = password;

    let fortaleza = validarFortaleza(password);
    alert("Fortaleza de la contraseña: " + fortaleza);
}

// Función para validar la fortaleza de la contraseña
function validarFortaleza(password) {
    const tieneLetras = /[a-zA-Z]/;
    const tieneNumeros = /[0-9]/;
    const tieneEspeciales = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if (password.length < 8) {
        return 'Débil';
    }

    if (tieneLetras.test(password) && !tieneNumeros.test(password) && !tieneEspeciales.test(password)) {
        return 'Media';
    }

    if (tieneLetras.test(password) && tieneNumeros.test(password) && tieneEspeciales.test(password)) {
        return 'Fuerte';
    }

    return 'Media';
}

// Función para limpiar los campos del formulario
function limpiarCampos() {
    cantidad.value = '';      // Limpia el campo de entrada de cantidad
    contrasena.value = '';    // Limpia el campo donde se muestra la contraseña generada
    console.clear();          // Limpia la consola del navegador
}

// Asignar la función de limpiar al evento 'click' del botón Limpiar
botonLimpiar.addEventListener('click', limpiarCampos);
