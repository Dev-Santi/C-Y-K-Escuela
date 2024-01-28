// Variables generales
let indiceFondoInicial = 0;
let indiceFondoFinal = 2;
let indicieFondoActual = indiceFondoFinal;

let posicionDelBannerInicial = window.innerWidth;
let posicionDelBannerActual = posicionDelBannerInicial;

// Programa
window.addEventListener('load', programa);

function programa() {
    // Botón para desplegar el menú de navegación
    document
        .getElementById('idBotonDeNavegacion')
        .addEventListener('click', abrirYCerrarMenu);

    // Desplazamiento de fondos en el inicio
    setInterval(() => {
        animacionImagenesInicio();
    }, 5000);

    //Desplazamiento del banner
    setInterval(() => {
        movimientoBanner();
    }, 5);
}

function abrirYCerrarMenu() {
    const menu = document.getElementById('idMenu');
    menu.classList.toggle('visible');
    document.getElementById('idBotonDeNavegacion').classList.toggle('cerrar');
    document
        .getElementById('idContenedorDeOpacidad')
        .classList.toggle('opacidad_activada');

    //Desactivar el scroll cuando el menu este activo
    document.getElementById('idBody').classList.toggle('no_scroll');

    //Desactivar menu siempre que se clickee un link
    for (let link of menu.children) {
        link.removeEventListener('click', abrirYCerrarMenu);
        link.addEventListener('click', abrirYCerrarMenu);
    }
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

function movimientoBanner() {
    const banner = document.getElementById('idBanner');
    banner.style.translate = posicionDelBannerActual + 'px';

    if (posicionDelBannerActual < -banner.clientWidth - 100) {
        posicionDelBannerActual = window.innerWidth;
    } else {
        posicionDelBannerActual -= 1;
    }
}
