const btnTema = document.getElementById('themeToggle');

btnTema.addEventListener('click', function() {
  document.body.classList.toggle('modo-noche');
  if (document.body.classList.contains('modo-noche')) {
    btnTema.textContent = '☀️';
  } else {
    btnTema.textContent = '🌙';
  }
});
const btnEnviar = document.getElementById('btnEnviar');

btnEnviar.addEventListener('click', function() {
  const nombre = document.getElementById('nombre').value.trim();
  const servicio = document.getElementById('servicio').value;
  const mensaje = document.getElementById('mensaje').value.trim();

  let valido = true;

  if (nombre === '') {
    document.getElementById('errorNombre').textContent = '⚠️ El nombre es obligatorio';
    valido = false;
  } else if (nombre.length < 3) {
    document.getElementById('errorNombre').textContent = '⚠️ Mínimo 3 caracteres';
    valido = false;
  } else {
    document.getElementById('errorNombre').textContent = '';
  }
  if (servicio === '') {
    document.getElementById('errorServicio').textContent = '⚠️ Selecciona un servicio';
    valido = false;
  } else {
    document.getElementById('errorServicio').textContent = '';
  }
  if (mensaje === '') {
    document.getElementById('errorMensaje').textContent = '⚠️ El mensaje es obligatorio';
    valido = false;
  } else if (mensaje.length < 10) {
    document.getElementById('errorMensaje').textContent = '⚠️ Mínimo 10 caracteres';
    valido = false;
  } else {
    document.getElementById('errorMensaje').textContent = '';
  }
   if (valido) {
    console.log('Formulario enviado:', { nombre, servicio, mensaje });
    document.getElementById('mensajeExito').style.display = 'block';
    document.getElementById('nombre').value = '';
    document.getElementById('servicio').value = '';
    document.getElementById('mensaje').value = '';
  }
});
const estiloNoche = `
  .modo-noche {
    background-color: #1a1a1a !important;
    color: #f0f0f0 !important;
  }
  .modo-noche .card {
    background-color: #2d2d2d !important;
    color: #f0f0f0 !important;
  }
  .modo-noche .navbar {
    background-color: #000000 !important;
  }
  .modo-noche footer {
    background-color: #000000 !important;
  }
`;

const styleTag = document.createElement('style');
styleTag.textContent = estiloNoche;
document.head.appendChild(styleTag);