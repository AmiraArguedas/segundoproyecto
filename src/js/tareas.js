const inputDato = document.getElementById("inputDato")
const botonGuardar = document.getElementById("botonGuardar")
const contenedorTareas = document.getElementById("contenedorTareas")
const contenedorEventos = document.getElementById("contenedorEventos")

botonGuardar.addEventListener("click", function () {
    if (inputDato.value.length == 0) {
        console.log("Debe ingresar datos");
    }else{
        const divHijo1 = document.createElement("div")
        const texto = document.createElement("p")
        const botonEliminar = document.createElement("button")
        const botonModificar = document.createElement("button")
        const inputModificar = document.createElement("input")

        texto.innerHTML = inputDato.value;
        botonEliminar.innerHTML = "ELIMINAR"
        divHijo1.appendChild(texto)
        divHijo1.appendChild(botonEliminar)
        divHijo1.appendChild(inputModificar)
        divHijo1.appendChild(botonModificar)
        contenedorTareas.appendChild(divHijo1)
        botonModificar.innerHTML = "MODIFICAR"

        botonEliminar.addEventListener("click", function () {
            contenedorTareas.removeChild(divHijo1);
            
        })
    }

})



