//Validacion formulario para empresas seccion SERVICIOS

let nombre = document.getElementById("name");
let email = document.getElementById("inputEmail4");
let cuit = document.getElementById("cuit");
let tel = document.getElementById("inputNumber");

function validarFormulario() {
    let alertaError = [];
    if(nombre.value === null || nombre.value === ''){
        alertaError.push("Se requiere completar todos los campos")
    }
    
    if(email.value === null || email.value === ''){
        alertaError.push("Se requiere completar todos los campos")
    }

    if(cuit.value === null || cuit.value === ''){
        alertaError.push("Se requiere completar todos los campos")
    }

    if(tel.value === null || tel.value === ''){
        alertaError.push("Se requiere completar todos los campos")
    } else {
        swal("Mensaje enviado", "Nos pondremos en contacto a la brevedad", "success");
    }

    return false;
}

