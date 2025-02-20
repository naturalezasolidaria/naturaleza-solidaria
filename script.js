document.getElementById('formulario-contacto').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre && email && mensaje) {
        alert('¡Mensaje enviado correctamente!');
        // Aquí podrías agregar más lógica para enviar el formulario a un servidor, si lo deseas.
        this.reset(); // Limpiar el formulario después de enviarlo
    } else {
        alert('Por favor, completa todos los campos.');
    }
});
