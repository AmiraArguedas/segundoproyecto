const boton2 = document.getElementById("btn2")
const contra2 = document.getElementById("contraseña2")
const correo2 = document.getElementById("email2")
const nombre2 = document.getElementById("nombre2")
 
const valores = JSON.parse( localStorage.getItem("listaUsuario")||[])

console.log(valores);

boton2.addEventListener("click", function () {

    if (correo2.value.length == 0 && nombre2.value.length == 0 && contra2.value.length == 0) {
        alert("debe ingresar datos");
    }else{
              
        for (let index = 0; index < valores.length; index++) {
            if (valores[index].nombre == nombre2.value && valores[index].correo === correo2.value && valores[index].contra == contra2.value) {
                alert("Ingreso exitoso")
                window.location.href = "http://127.0.0.1:5500/segundoproyecto/html/tareas.html"
          }
            
        }

    
    }

})




