const form = document.getElementById('customerForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;

    if (nombre && email && telefono) {
        // Aquí puedes enviar los datos del cliente a través de una solicitud HTTP o guardarlos en una base de datos
        console.log(`Nombre: ${nombre}, Email: ${email}, Teléfono: ${telefono}`);
        alert('Datos enviados correctamente');
    } else {
        alert('Por favor complete todos los campos');
    }
});
