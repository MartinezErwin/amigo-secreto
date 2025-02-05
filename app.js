let amigos = [];


function agregarAmigo() {
    //Capturando el valor del campo de entrada:
    let nombre = document.getElementById('amigo').value;
    
    //Validando la entrada
    if (nombre === "") {
        alert("No dejes campos vacios")
        return;
    }

    if (!isNaN(nombre)) {
        alert("No instroduzcas numeros")
        return;
    }

    //Actualizar el array de amigos
    amigos.push(nombre);

    //Limpiando el campo de entrada:
    document.getElementById('amigo').value = '';

    //Imprimiendo en la consola el resultado
    actualizarListaAmigos();
}
  


function actualizarListaAmigos() {
    //Obteniendo el elemento
    let elemento = document.getElementById('listaAmigos');
    
    // Limpiaando la lista existente
    elemento.innerHTML = '';

    // Creando un fragmento de documento para mejorar rendimiento
    let fragmento = document.createDocumentFragment();

    // Iterar sobre el arreglo amigos
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i]; // Agregar el texto al elemento <li>
        fragmento.appendChild(li);  // Agregar el <li> al fragmento
    }

    // Agregar todos los elementos de una vez
    elemento.appendChild(fragmento);

    console.log('Lista de amigos actualizada');
}


function sortearAmigo() {
    //Validar que haya amigos en el array
    if (amigos.length === 0){
        alert("No hay amigos para sortear")
        return;
    }

    //Generar un número aleatorio
    let indice = Math.floor(Math.random() * amigos.length);

    //Obtener el amigo sorteado
    let amigoSorteado = amigos[indice];

    //Mostrar el amigo sorteado
    document.getElementById('resultado').textContent = amigoSorteado;
}

