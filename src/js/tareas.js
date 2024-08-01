const inputDato = document.getElementById("inputDato")
const botonGuardar = document.getElementById("botonGuardar")
const contenedorTareas = document.getElementById("contenedorTareas")
const contenedorEventos = document.getElementById("contenedorEventos")
const select = document.getElementById("select")
const inputFecha = document.getElementById("inputFecha")

let listaTareas = [];
let listaEventos = [];

  botonGuardar.addEventListener("click", function () {

    if (select.value === "tarea") {
        const divHijo1 = document.createElement("div")
        const texto1 = document.createElement("p")
        const botonEliminar1 = document.createElement("button")
        const botonModificar1 = document.createElement("button")
        const inputModificar1 = document.createElement("input")

        let conca1 = inputFecha.value +" "+ inputDato.value
        texto1.innerHTML = conca1;
        
        listaTareas.push(conca1)
            alert("Tarea guardada"); 

    localStorage.setItem("tareasRegistradas", JSON.stringify(listaTareas))

    botonEliminar1.innerHTML = "ELIMINAR"
    contenedorTareas.appendChild(divHijo1)
    divHijo1.appendChild(texto1)
    divHijo1.appendChild(botonEliminar1)
    divHijo1.appendChild(inputModificar1)
    divHijo1.appendChild(botonModificar1)


    botonModificar1.innerHTML = "MODIFICAR"

    
    botonEliminar1.addEventListener("click", function () {
        contenedorTareas.removeChild(divHijo1);
        })

    botonModificar1.addEventListener("click", function () {
        texto1.innerHTML = inputModificar1.value
    })



    }else{

        if (select.value === "evento") {
            const divHijo2 = document.createElement("div")
            const texto2 = document.createElement("p")
            const botonEliminar2 = document.createElement("button")
            const botonModificar2 = document.createElement("button")
            const inputModificar2 = document.createElement("input")
    
            let conca2 = inputFecha.value +" "+ inputDato.value
            texto2.innerHTML = conca2;

            listaEventos.push(conca2)
                alert("Evento guardado");

        localStorage.setItem("eventosRegistrado", JSON.stringify(listaEventos))

            botonEliminar2.innerHTML = "ELIMINAR"
            divHijo2.appendChild(texto2)
            divHijo2.appendChild(botonEliminar2)
            divHijo2.appendChild(inputModificar2)
            divHijo2.appendChild(botonModificar2)
            contenedorEventos.appendChild(divHijo2)
            botonModificar2.innerHTML = "MODIFICAR"

            botonEliminar2.addEventListener("click", function () {
                contenedorEventos.removeChild(divHijo2);
                })
            botonModificar2.addEventListener("click", function () {
                texto2.innerHTML = inputModificar2.value
            })
        }              
    }
  }) 



function recargar() {
    let datos1 = JSON.parse(localStorage.getItem("tareasRegistradas"))

    for (let index = 0; index < datos1.length; index++) {
   
        let container = document.createElement("div")
        const textoP1 = document.createElement("p")
        const botonEli1 = document.createElement("button")
        const botonModi1 = document.createElement("button")
        const inputModi1 = document.createElement("input")
    
        textoP1.innerHTML = datos1[index]

        botonEli1.innerHTML = "ELIMINAR"
        botonModi1.innerHTML = "MODIFICAR"

        container.appendChild(textoP1)
        container.appendChild(botonEli1)
        container.appendChild(inputModi1)
        container.appendChild(botonModi1)
        contenedorTareas.appendChild(container)


        botonEli1.addEventListener("click", function() {  
                    
            const listaEliminada1 = JSON.parse(localStorage.getItem("tareasRegistradas"))||[];
            const listaActualizada1 = listaEliminada1.filter(tareas => tareas != textoP1.textContent)
                localStorage.setItem("tareasRegistradas", JSON.stringify(listaActualizada1))      
       
            container.remove()
            alert("Tarea eliminada permanentemente");
        })



        botonModi1.addEventListener("click", function() {

            const lista1 = JSON.parse(localStorage.getItem("tareasRegistradas"))||[];

            for (let index = 0; index < lista1.length; index++) {

                if (lista1[index] === textoP1.textContent) {
                    lista1[index] = inputModi1.value

                    localStorage.setItem("tareasRegistradas", JSON.stringify(lista1))
                    textoP1.textContent = inputModi1.value

                    alert("Texto modificado exitosamente");
                }
            }
                
        })
    }



    
    console.log(listaTareas);
    console.log(datos1);

//////////////////////////////////////////////////////////////////////////////////////

    let datos2 = JSON.parse(localStorage.getItem("eventosRegistrado"))

    for (let index = 0; index < datos2.length; index++) {

        let container = document.createElement("div")
        const textoP2 = document.createElement("p")
        const botonEli2 = document.createElement("button")
        const botonModi2 = document.createElement("button")
        const inputModi2 = document.createElement("input")

        textoP2.innerHTML = datos2[index]

        botonEli2.innerHTML = "ELIMINAR"
        botonModi2.innerHTML = "MODIFICAR"

        container.appendChild(textoP2)
        container.appendChild(botonEli2)
        container.appendChild(inputModi2)
        container.appendChild(botonModi2)

        contenedorEventos.appendChild(container)




        botonEli2.addEventListener("click", function() {
            const listaEliminada2 = JSON.parse(localStorage.getItem("eventosRegistrado"))||[];
            const listaActualizada2 = listaEliminada2.filter(eventos => eventos != textoP2.textContent)
                localStorage.setItem("eventosRegistrado",JSON.stringify(listaActualizada2))
            
            container.remove()
                alert("Evento eliminado permanentemente");
        })

        botonModi2.addEventListener("click", function() {

            const lista2 = JSON.parse(localStorage.getItem("eventosRegistrado"))||[];

            for (let index = 0; index < lista2.length; index++) {

                if (lista2[index] === textoP2.textContent) {
                    lista2[index] = inputModi2.value

                    localStorage.setItem("eventosRegistrado", JSON.stringify(lista2))
                    console.log(textoP2);
                    textoP2.innerText = inputModi2.value

                    alert("Texto modificado exitosamente");
                }
                
            }
            
        })

    }
    console.log(datos2); 



}





