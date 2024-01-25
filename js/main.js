window.addEventListener('load', programa);

function programa() {
    // Botón para desplegar el menú de navegación
    document
        .getElementById('idBotonDeNavegacion')
        .addEventListener('click', abrirYCerrarMenu);

    // Desplazamiento de backgrounds en el inicio
    let fondoInicial = 1;
    setInterval(() => {
        animacionImagenesInicio();
    }, 3000);
}

function abrirYCerrarMenu() {
    document.getElementById('idMenu').classList.toggle('visible');
    document.getElementById('idBotonDeNavegacion').classList.toggle('cerrar');
    document
        .getElementById('idContenedorDeOpacidad')
        .classList.toggle('opacidad_activada');
}

function animacionImagenesInicio() {
    const inicio = document.getElementById('idInicio');
    //
}
