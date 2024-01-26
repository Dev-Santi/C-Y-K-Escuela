// Variables generales
let indiceFondoInicial = 0;
let indiceFondoFinal = 2;
let indicieFondoActual = indiceFondoFinal;

// Programa
window.addEventListener('load', programa);

function programa() {
    // Botón para desplegar el menú de navegación
    document
        .getElementById('idBotonDeNavegacion')
        .addEventListener('click', abrirYCerrarMenu);

    // Desplazamiento de backgrounds en el inicio
    setInterval(() => {
        animacionImagenesInicio();
    }, 5000);
}

function abrirYCerrarMenu() {
    document.getElementById('idMenu').classList.toggle('visible');
    document.getElementById('idBotonDeNavegacion').classList.toggle('cerrar');
    document
        .getElementById('idContenedorDeOpacidad')
        .classList.toggle('opacidad_activada');
}

function animacionImagenesInicio() {
    const contenedorFondos = document.getElementById('idContenedorDeFondos');

    for (let fondo of contenedorFondos.children) {
        if (fondo.id.includes(indicieFondoActual + 1)) {
            fondo.classList.remove('ocultar');
        } else {
            fondo.classList.add('ocultar');
        }
    }

    if (indicieFondoActual <= indiceFondoInicial) {
        indicieFondoActual = indiceFondoFinal;
    } else indicieFondoActual--;
}
