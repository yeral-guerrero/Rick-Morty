
// Listar Plantilla de API 
/* Rick & Morty */

//const API_URL = "https://rickandmortyapi.com/api/ "

const API_URL = " https://rickandmortyapi.com/api/";
const PERSONAJES_URL = "character/:id";

//Reconoce variables externas de otro dominio
const OPCIONES = { crossDomain: true };

// Variable asignada a una funcion que imprime la plantilla del personaje Nombre - Especie - Origen - ID
const PERSONAJE = function (personaje) {
  document.write(`Hola yo soy ${personaje.name} mi especie es ${personaje.species} Soy originario de ${personaje.origin.name} Mi ID: ${personaje.id} ${"<br></br>"}`);
};


function pedirPersonaje(id) {
   
  const URL = `${API_URL}${PERSONAJES_URL.replace(":id", id)}`;
  $.get(URL, OPCIONES, PERSONAJE);
}



// arreglo es un array que contendrá los id proporcionados por el usuario via prompt.
var arreglo = [];
var j=1;  //contador para controlar el bucle while


do{
    arreglo[j] = prompt("Introduzca un ID o 0 (cero) para salir: ");    
    bandera = arreglo[j];
    j++;
}while(bandera != 0)


// Bucle para mostrar el contenido del array con los ID Proporcionados por el usuario

for(j=1; j<arreglo.length;j++) {
    pedirPersonaje(arreglo[j]);
}

