window.addEventListener('load', programa);

function programa() {
    document
        .getElementById('idBotonDeNavegacion')
        .addEventListener('click', abrirYCerrarMenu);
}

function abrirYCerrarMenu() {
    document.getElementById('idMenu').classList.toggle('visible');
    document.getElementById('idBotonDeNavegacion').classList.toggle('cerrar');
}
