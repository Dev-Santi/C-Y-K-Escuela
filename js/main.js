// Variables y constantes generales
const indiceFondoInicial = 0;
const indiceFondoFinal = 2;
let indicieFondoActual = indiceFondoFinal;

// Programa
window.addEventListener('load', programa);

function programa() {
    // console.log('Se ejecuta programa');
    //Constantes
    const body = document.getElementById('idBody');
    const menu = document.getElementById('idMenu');
    const botonMenu = document.getElementById('idBotonDeNavegacion');
    const contenedorDeOpacidad = document.getElementById('idContenedorDeOpacidad');
    const contenedorFondos = document.getElementById('idContenedorDeFondos');

    //Botón para desplegar el menú de navegación
    botonMenu.addEventListener('click', abrirYCerrarMenu);
    //Cuando un link sea clickeado, desactivar la navegacion
    for (let link of menu.children) {
        link.addEventListener('click', abrirYCerrarMenu);
    }

    //Desplazamiento de fondos en el inicio
    setInterval(() => {
        animacionImagenesInicio();
    }, 5000);

    //Funciones
    function abrirYCerrarMenu() {
        // console.log(
        //     menu.classList.contains('visible') ? 'Desactivando menu' : 'Activando menu'
        // );

        menu.classList.toggle('visible');
        botonMenu.classList.toggle('cerrar');
        contenedorDeOpacidad.classList.toggle('opacidad_activada');
        //Desactivar el scroll cuando el menu este activo
        body.classList.toggle('no_scroll');
    }

    function animacionImagenesInicio() {
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
}
