// Hemos omitido los acentos en los comentarios por compatibilidad

limpiarInputs()

function validar(formulario) {

  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (formulario.nombres.value.trim().length == 0){
      document.getElementById("errorNombres").innerText = "Este campo es obligatorio"

      if (!re.test(formulario.email.value)){
        document.getElementById("errorEmail").innerText = "Correo Inválido"
  
        if (formulario.contrasena.value.length < 7){
          document.getElementById("errorContrasena").innerText = "Debe tener al menos 7 caracteres";
    
          if ((formulario.contrasena.value != formulario.confirmacion.value) || formulario.confirmacion.value == ""){
            document.getElementById("errorConfirmacion").innerText = "No coincide con contraseña";
      
            if (formulario.tipo.value == "" || formulario.tipo.value == "-1"){
              document.getElementById("errorTipo").innerText = "Este campo es obligatorio";
        
              if (!formulario.acepto.checked){
                document.getElementById("errorAcepto").innerText = "Este campo es obligatorio";
          
                return false;
            }

            return false;
          }

          return false;
        }

        return false;
      }

      return false;
    }

    return false;
  }

  return true;
  
}

function limpiarInputs(){
    document.getElementById("nombres").value = "";
    document.getElementById("email").value = "";
    document.getElementById("contrasena").value = "";
    document.getElementById("confirmacion").value = "";
    document.getElementById("tipo").value = "-1";
    document.getElementById("acepto").value = "";
  }
