// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Como primer paso crearemos una lista para almacenar nombres de personas.
let listaNombre = [];

// esta función verifica si el input tiene un valor y lo agrega a la lista de amigos
function agregarAmigo(){
    console.log(listaNombre);
    if (document.getElementById("amigo").value === "") {
        alert("Por favor, ingresa un nombre.");
    } else {
        listaNombre.push(document.getElementById("amigo").value);
        console.log(listaNombre);
        mostrarAmigos();
        
    }
}



function sortearAmigo(){
    let indiceSorteo = Math.floor(Math.random() * listaNombre.length);
    let amigoSorteado = listaNombre[indiceSorteo];
    if (listaNombre.length === 0) {
        alert("No hay amigos para sortear.");
    } else {
        resultadoSorteo = document.getElementById("resultado").textContent ="El amigo sorteado es: " + amigoSorteado;
        document.getElementById("listaAmigos").innerHTML = "";
        listaNombre = []; // Limpiar la lista de amigos después del sorteo
    }
}

// mostrar amigos en pantalla cada vez que se agregue uno
function mostrarAmigos(){
    // la variable nombre toma el valor del input
    let nombre = document.getElementById("amigo").value.trim();
    
    // la etiqueta ul tiene como id "listaAmigos"
    // se crea un elemento li y se le asigna el nombre del input
    let listaNombres = document.getElementById("listaAmigos");
    let li = document.createElement("li");
    li.textContent = nombre;
    // se agrega el elemento li a la lista ul
    listaNombres.appendChild(li);

    // focus para que el puntero del cursor quede en el input
    document.getElementById("amigo").focus();

    limpiarCaja();
}
// funcion para limpiar el input
function limpiarCaja(){
    document.getElementById("amigo").value = "";
}