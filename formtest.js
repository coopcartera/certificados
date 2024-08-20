//genera el radicado
function generarRadicado() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let radicado = '';
    for (let i = 0; i < 10; i++) {
        radicado += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    document.getElementById('radicado').value = radicado;
}

const miSelect = document.getElementById('origen');
const miSeccion = document.getElementById('entidad');

miSelect.addEventListener('change', () => {
  if (miSelect.value === 'TERCERO') { // Cambia 'opcion2' por la opción que deseas
    miSeccion.style.display = 'block';
  } else {
    miSeccion.style.display = 'none';
  }
});


//envia el formulario a la base de datos
//document.getElementById('myForm').addEventListener('submit', function(event) {
//    event.preventDefault();   
//
//
//    var formData = new FormData(this);   
//
//    var data = Object.fromEntries(formData.entries());
//    // Obtener la fecha y hora actual
//    const now = new Date();
//    const fechaHora = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate() + ' ' +
//                     now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
//
//    // Agregar la marca de tiempo a los datos
//    data.fechaHora = fechaHora;
//
//cambiar URL en fetch por la del documento de la base de datos
//    fetch('https://script.google.com/macros/s/AKfycbzVpIVyMjFMTwMuXEEVNjgdwNmb6pxCnUYS73FAuO_8_94Gm0UWn_Jmh0PrLVbIVP6g/exec', {
//        method: 'POST',
//        body: JSON.stringify(data),
//        headers: {
//            'Content-Type': 'application/json'
//        }
//    })
//    .then(response => response.text())
//    .then(data => {
//        alert(data);   
//
//        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'; // URL pagina de inicio
//    })
//    .catch(error => {
//        console.error('Error:', error);
//        alert('Error al enviar los datos');
//    });
//});