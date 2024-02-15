let productos = [];
fetch("../../data/productsPopulars.json")
    .then(response => response.json())
    .then(data =>{
        productos = data
        cargarProductos(productos)
    })

//Cargar Productos
const contenedorItemsAll = document.querySelector('.contenedor-items');

function cargarProductos (allProducts) {
 
  allProducts.forEach(producto =>{
    const div = document.createElement('DIV');
    div.classList.add('item');
    div.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.titulo}" class="item__img"> <!--822x822-->
        <div class="item-info-container">
          <h3 class="item__titulo">${producto.titulo}</h3>
          <p class="item__precio">${producto.precio}$</p>
          <button class="item__agregar__boton" id="${producto.id}">Agregar al carrito</button>
        </div>
    `;  
    contenedorItemsAll.append(div);
  });
};

cargarProductos(productos);

//Elimar del carrito

const btnTrash = document.getElementById('trash-item-remove');

// btnTrash.addEventListener('click', ()=>{

// })



//SLIDER
const sliderContainer = document.querySelector('.slider-container');
let slider = document.querySelector('.slider--inn');
const buttonLeft = document.getElementById('btn-left');
const buttonRight = document.getElementById('btn-right');
const sliderElements = document.querySelectorAll('.slider-img');
let imageIndex = 0;
let index = 0;
let img = slider.querySelectorAll('img');

  setInterval(function(){
  let porcentaje = index * -100;
  slider.style.transform = "translateX("+ porcentaje + "%)"
  index++;

  if(index > img.length - 1){
    index = 0;
  }    
}, 5000);
//Intersection imgs
const imgObservers = document.getElementById('img-ob1');
const imgObserverTwo = document.getElementById('img-ob2');
const imgObserverThree = document.getElementById('img-ob3');
const imgObserverFour = document.getElementById('img-ob4');

const imgObserMobile = document.getElementById('img-ob1-mobile');
const imgObserMobileTwo = document.getElementById('img-ob2--mobile');
const imgObserMobileThree = document.getElementById('img-ob3--mobile');
const imgObserMobileFour = document.getElementById('img-ob4--mobile');



const cargarImagen = (entradas, observador) => {
	// console.log(entradas)
	// console.log(observador)

	entradas.forEach((entrada) => {
		if(entrada.isIntersecting){
			entrada.target.style.opacity = "1"
		} else {
      entrada.target.style.opacity = "0"
		}
	});
}

const observador = new IntersectionObserver(cargarImagen, {
	root: null,
	rootMargin: '500px 0px 100px 0px',
	threshold: 1.0
});

observador.observe(imgObserverTwo);
observador.observe(imgObserverThree);
observador.observe(imgObserverFour);

//Carrusel

let carruselContainerItems = document.querySelector('.carrusel-container');
const carruselTexto = document.querySelectorAll('.dentro-carrusel-cont');
const carruselItemImg = document.querySelector('.carrusel-item');
let maxScrollLeft = carruselContainerItems.scrollWidth - carruselContainerItems.clientWidth;
let interval = null;
let steps = 1;

const iniciar = () =>{
    interval = setInterval(function(){
        carruselContainerItems.scrollLeft = carruselContainerItems.scrollLeft + steps;

        if(carruselContainerItems.scrollLeft === maxScrollLeft) {
            steps = steps * -1;
        } else if(carruselContainerItems.scrollLeft === 0){
            steps = steps * -1;
        }
    },10)
}

const parar = () => {
    clearInterval(interval)
}

// Asignar el evento mouseover al contenedor principal del carrusel
carruselContainerItems.addEventListener('mouseover', (e) => {
  // Parar la animación función "parar()"
  parar();
  
  // Ocultar todos los carruselTexto(osea la info)
  carruselTexto.forEach(texto => {
    texto.classList.remove('visiblecarrusel');
  });

  // Obtener el elemento carrusel-item en el que se hizo hover
  const carruselItemImg = e.target.closest('.carrusel-item');

  // Verificar si se hizo hover en una imagen dentro de un carrusel-item
  if (carruselItemImg) {
    // Obtener el carruselTexto asociado al carrusel-item y mostrarlo
    const textoElement = carruselItemImg.querySelector('.dentro-carrusel-cont');
    textoElement.classList.add('visiblecarrusel');
  }
});

// Asignar el evento mouseout al contenedor principal del carrusel
carruselContainerItems.addEventListener('mouseout', () => {
  // Iniciar la animación (función "iniciar()" que tienes en tu código)
  iniciar();
  
  // Ocultar todos los carruselTexto
  carruselTexto.forEach(texto => {
    texto.classList.remove('visiblecarrusel');
  });
});

iniciar();

