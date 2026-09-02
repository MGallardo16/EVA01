//------------------------------------------------------
//creamos un js independiente ya que esta funcion se debe aplicar a varias paginas

// Control visual del boton Cerrar sesion
// Agarramos el boton de cerrar sesion mediante su id
const btnSinSesion = document.getElementById("btn-logout");

// Revisa el localStorage para saber si hay alguien logueado
const haySesionActiva = localStorage.getItem("usuarioLogueado") != null;

//el boton tiene la clase d-none, al nadie estar logueado por defecto no aparece para el usuario, pero cuando alguien se loguea el boton aparece
if (haySesionActiva && btnSinSesion){
  btnSinSesion.classList.remove("d-none")
}

function cerrarSesion(){
  localStorage.removeItem("usuarioLogueado");
  alert("Has cerrado sesion con exito.")
  window.location = "index.html"
}