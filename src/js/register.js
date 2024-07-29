const correo1 = document.getElementById("email1")
const nombre1 = document.getElementById("nombre1")
const contra1 = document.getElementById("contraseña1")
const boton1 = document.getElementById("btn1")

let lista1 = [];

boton1.addEventListener("click", function () {
if (contra1.value.length == 0) {
    alert("Debe ingresar datos");

}else{

    let usuario1 ={
        correo: correo1.value,
        nombre: nombre1.value,
        contra: contra1.value,
    }
    
    lista1.push(usuario1)
        alert("Usuario Registrado")

    localStorage.setItem("listaUsuario", JSON.stringify(lista1))

    }
})






