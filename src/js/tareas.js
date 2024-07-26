const inputDato = document.getElementById("inputDato")
const botonGuardar = document.getElementById("botonGuardar")
const contenedorTareas = document.getElementById("contenedorTareas")
const contenedorEventos = document.getElementById("contenedorEventos")
const select = document.getElementById("select")

  botonGuardar.addEventListener("click", function () {

    if (select.value === "tarea") {
        const divHijo1 = document.createElement("div")
        const texto1 = document.createElement("p")
        const botonEliminar1 = document.createElement("button")
        const botonModificar1 = document.createElement("button")
        const inputModificar1 = document.createElement("input")

    texto1.innerHTML = inputDato.value;
    botonEliminar1.innerHTML = "ELIMINAR"
    contenedorTareas.appendChild(divHijo1)
    divHijo1.appendChild(texto1)
    divHijo1.appendChild(botonEliminar1)
    divHijo1.appendChild(inputModificar1)
    divHijo1.appendChild(botonModificar1)
    botonModificar1.innerHTML = "MODIFICAR"




    botonEliminar1.addEventListener("click", function () {
        contenedorTareas.removeChild(divHijo1);
            alert("Eliminado de manera exitoso");
        })

    botonModificar1.addEventListener("click", function () {
        texto1.innerHTML = inputModificar1.value
            alert("Texto modificado de manera exitosa");
    })

    }else{

        if (select.value === "evento") {
            const divHijo2 = document.createElement("div")
            const texto2 = document.createElement("p")
            const botonEliminar2 = document.createElement("button")
            const botonModificar2 = document.createElement("button")
            const inputModificar2 = document.createElement("input")

            texto2.innerHTML = inputDato.value;
            botonEliminar2.innerHTML = "ELIMINAR"
            divHijo2.appendChild(texto2)
            divHijo2.appendChild(botonEliminar2)
            divHijo2.appendChild(inputModificar2)
            divHijo2.appendChild(botonModificar2)
            contenedorEventos.appendChild(divHijo2)
            botonModificar2.innerHTML = "MODIFICAR"

            botonEliminar2.addEventListener("click", function () {
                contenedorEventos.removeChild(divHijo2);
                    alert("Eliminado de manera exitoso");
                })
            botonModificar2.addEventListener("click", function () {
                texto2.innerHTML = inputModificar2.value
                    alert("Texto modificado de manera exitosa");
            })
        }
                    
    }

  }) 
    




















