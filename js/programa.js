function programa() {
    // Botón para desplegar el menú de navegación
    document
        .getElementById('idBotonDeNavegacion')
        .addEventListener('click', abrirYCerrarMenu);

    //Cuando un link sea clickeado, desactivar la navegacion
    for (let link of document.children) {
        link.addEventListener('click', abrirYCerrarMenu);
    }

    // Desplazamiento de fondos en el inicio
    setInterval(() => {
        animacionImagenesInicio();
    }, 5000);
}
