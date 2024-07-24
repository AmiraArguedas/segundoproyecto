const boton2 = document.getElementById("btn2")
const contra2 = document.getElementById("contraseña2")
const correo2 = document.getElementById("email2")

boton2.addEventListener("click",function () {
    
    for (let index = 0; index < lista1.length; index++) {
        if (lista1[index].nombre === nombre2.value && lista1[index].contra === contra2.value && lista1[index].correo === correo2.value) {
            alert("PUEDE ENTRAR AL SISTEMA")
        }else{
            alert("NO PUEDE ENTRAR AL SISTEMA")
        }
    }
})