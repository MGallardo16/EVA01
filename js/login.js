document.getElementById("btn-registrarse").addEventListener("click", registrarse)
document.getElementById("btn-iniciar-sesión").addEventListener("click", iniciarSesion)
window.addEventListener("resize", anchoPag);

var container_login_registro = document.querySelector(".container-login-registro");

var formulario_login = document.querySelector(".form-login");
var formulario_registro = document.querySelector(".form-registro");
var behind_box_login = document.querySelector(".behind-box-login");
var behind_box_registro = document.querySelector(".behind-box-registro");

function anchoPag(){
    if(window.innerWidth > 850){
        behind_box_login.style.display = "block";
        behind_box_registro.style.display = "block";
    }else{
        behind_box_registro.style.display = "block";
        behind_box_registro.style.opacity = "1";
        behind_box_login.style.display = "none";
        formulario_login.style.display = "block";
        formulario_registro.style.display = "none";
        container_login_registro.style.left = "8px";
    }
}

anchoPag();

function iniciarSesion(){
    if(window.innerWidth > 850){
        formulario_registro.style.display = "none";
        container_login_registro.style.left = "50px";
        formulario_login.style.display = "block";
        behind_box_registro.style.opacity = "1";
        behind_box_login.style.opacity = "0";
    }else{
        formulario_registro.style.display = "none";
        container_login_registro.style.left = "0px";
        formulario_login.style = "block";
        behind_box_registro.style.display = "block";
        behind_box_login.style.display = "none";      
    }
    
}
function registrarse(){
    if(window.innerWidth > 850){
    formulario_registro.style.display = "block";
    container_login_registro.style.left = "500px";
    formulario_login.style.display = "none";
    behind_box_registro.style.opacity = "0";
    behind_box_login.style.opacity = "1";        
    }else{
        formulario_registro.style.display = "block";
        container_login_registro.style.left = "0px";
        formulario_login.style.display = "none";
        behind_box_registro.style.display = "none";
        behind_box_login.style.display = "block";
        behind_box_login.style.opacity = "1"         
    }

}