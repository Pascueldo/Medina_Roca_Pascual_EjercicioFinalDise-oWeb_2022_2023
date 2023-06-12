
// Variable seleccionar Trabajos

const grande =document.querySelector ('.carrouselContenedor');
const punto  =document.querySelectorAll ('.punto');

// Cuando CLICK en punto
    //saber la posicion del punto
    //aplicar transform translateX a carrouselContenedor
    //quitar clase activo a todos los puntos
    //Añadir clase activo al punto seleccionado

punto.forEach( ( cadaPunto , i ) => {
    punto[i].addEventListener('click', () => {
        let posicion = i;
        let operacion = posicion * -16.66;
        grande.style.transform = `translateX(${operacion}%)`;

        punto.forEach( ( cadaPunto ) => {
            cadaPunto.classList.remove('activo');
        })
        punto[posicion].classList.add('activo')
    })
})

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

// Espera a que el documento esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Obtén todos los elementos del menú superior
    var menuItems = document.querySelectorAll(".menuSuperior a");

    // Itera sobre cada elemento del menú
    menuItems.forEach(function(item) {
      // Agrega un evento de clic a cada elemento
    item.addEventListener("click", function(event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace
        
        // Obtén el valor del atributo "rel" que contiene la sección de destino
        var targetSection = this.getAttribute("rel");

        // Busca la sección de destino por su ID
        var section = document.getElementById("seccion" + targetSection);

        // Desplázate a la sección utilizando el método scrollIntoView()
        section.scrollIntoView({ behavior: "smooth" });
    });
    });
});