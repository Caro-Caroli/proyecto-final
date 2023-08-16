let $caja = document.getElementById(`caja`) 


/*Botones paginado*/
$mujerB = document.getElementById("mujeres");
$hombreB = document.getElementById("hombres");
$generoDesconocidoB = document.getElementById("desconocido");
$todoB = document.getElementById("todos");

$primeraB = document.getElementById (`numero1`);
$siguienteB = document.getElementById(`siguiente`);
$ultimaB = document.getElementById(`numero42`);
$anteriorB = document.getElementById (`anterior`); 


let todosPersonajes = [];
let paginas = 1;

function mostrar (array) {
    $caja.innerHTML = " "
    for (let i=0; i<array.length; i++) {
        $caja.innerHTML += `<div id="cajita">
        <img src=${array[i].image}>
        <h2>Nombre: ${array[i].name}</h2>
        <p>Género: ${array[i].gender}</p>
        <p>Especie: ${array[i].species}</p>
        <p>Estado: ${array[i].status}</p>
        <p>Origen: ${array[i].origin.name}</p>
        <p>Locación: ${array[i].location.name}</p>
    </div>`
    }
}

//Fetch personajes y mostrar página 1
function usarFetch (numeroPagina) {
    fetch(`https://rickandmortyapi.com/api/character/?page=${numeroPagina}`)
     .then ((data)=>{
         return data.json();
     })
     .then ((data)=>{
         todosPersonajes = data.results;
         console.log (todosPersonajes)
         mostrar (todosPersonajes)
 }) 
 } 

 usarFetch (paginas);

//Falta un .catch

//Filtro para botones del nav
function mostrarTodos() {
    let resultado = todosPersonajes.filter ((personaje)=>{
        return personaje
    })
    mostrar (resultado);
}

function mostrarMujeres () {
    let resultado = todosPersonajes.filter ((personaje)=>{
        return personaje.gender === "Female"
    })

    mostrar (resultado);
}

function mostrarHombres () {
    let resultado = todosPersonajes.filter ((personaje)=>{
        return personaje.gender === "Male"
    })
    mostrar (resultado);
}

function mostrarDesconocido () {
    let resultado = todosPersonajes.filter ((personaje)=>{
        return personaje.gender === "unknown"
    })
    mostrar (resultado);
}

//eventos de botones nav
$todoB.addEventListener ("click", mostrarTodos); 
$mujerB.addEventListener ("click", mostrarMujeres);
$hombreB.addEventListener ("click", mostrarHombres);
$generoDesconocidoB.addEventListener ("click", mostrarDesconocido);

//paginado  siguiente, anterior y 42

/*function primeraPagina () {
    $primeraB.disabled = true
    $anteriorB.disabled = true
    paginas = 1
    usarFetch (1)
}

function siguientePagina () {
    paginas++
    console.log (paginas)
    if(paginas === 42){
        $siguienteB.disabled = true
        $ultimaB.disabled = true
    }else{
        $siguienteB.disabled = false
        $ultimaB.disabled = false
        $anteriorB.disabled = false
        $primeraB.disabled = false
    }
    usarFetch(paginas)
};

function paginaAnterior () {
    paginas--
    console.log(paginas)
    usarFetch (paginas);
}

function ultimaPagina () { 
    $ultimaB.disabled = true
    usarFetch(42);
}*/

//botones de paginas
/*$siguienteB.addEventListener(`click`, siguientePagina);
$ultimaB.addEventListener(`click`, ultimaPagina);
$anteriorB.addEventListener(`click`, paginaAnterior);
$primeraB.addEventListener(`click`, primeraPagina);*/


/*let paginacion = () => {
    if (paginas <= 1){
    $anteriorB.disabled = true;
    $primeraB.disabled = true;
} else {
    $anteriorB.disabled = false;
    $primeraB.disbled = false;
}
if(paginas === 42 ){
    $siguienteB.disabled = true
    $ultimaB.disabled = true
  } else {
    $siguienteB.disabled = false
    $ultimaB.disabled = false
  }}*/

/*function disabledPaginas () {
    
    if (paginas === 1) {
        $primeraB.disabled = true;
        $anteriorB.disabled = true;
    } if (paginas >= 2) {
        $siguienteB.disabled = false;
        $ultimaB.disabled = false;
        $primeraB.disabled = false;
        $anteriorB.disableld = false; 
    } if (paginas > 42){
        $siguienteB.disabled = false;
        $ultimaB.disabled = false;
    } else if (paginas === 42){
        $siguienteB.disabled = true;
        $ultimaB.disabled = true;
    }
    usarFetch(paginas)
}

//ssegundo intento de botones de la página:
$siguienteB.addEventListener(`click`, disabledPaginas);
$ultimaB.addEventListener(`click`, disabledPaginas);
$anteriorB.addEventListener(`click`, disabledPaginas);
$primeraB.addEventListener(`click`, disabledPaginas);*/
//función primera página
function firstPage () {   
    
    $primeraB.disabled = true;
    $anteriorB.disabled = true;
    $ultimaB.disabled = false;
    $siguienteB.disabled = false;
    paginas === 1
    usarFetch (1)
}

//función siguiente
function nextPage () { 
    paginas++
    if (paginas >1 && paginas < 42){       
        $siguienteB.disabled = false;
        $ultimaB.disabled = false;
        $primeraB.disabled = false;
        $anteriorB.disabled = false;
    }
    usarFetch(paginas)
}
    /*} if (paginas >= 2) {
        $siguienteB.disabled = false;
        $ultimaB.disabled = false;
        $primeraB.disabled = false;
        $anteriorB.disableld = false;*/ 

// función anterior
function beforePage () {
        paginas--
     if (paginas < 42){    
        $primeraB.disabled = false;
        $anteriorB.disabled = false;        
        $siguienteB.disabled = false;
        $ultimaB.disabled = false;
     } 
     usarFetch (paginas)
    }
// funcion ultima página
function lastPage () { 
    paginas === 42
    $siguienteB.disabled = true;
    $ultimaB.disabled = true;
    $primeraB.disabled = false;
    $anteriorB.disabled = false;
    usarFetch(42)
}

//tercer intento de botones de la página:
$siguienteB.addEventListener(`click`, nextPage);
$ultimaB.addEventListener(`click`, lastPage)
$anteriorB.addEventListener(`click`, beforePage);
$primeraB.addEventListener(`click`, firstPage);

//Ver mas

