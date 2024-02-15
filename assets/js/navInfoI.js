//Carrito
const cartContainer = document.querySelector('.cart-enjoy');
const btnCart = document.getElementById('cart-shop');
const btnCloseCart = document.getElementById('close-btn-cart');

btnCart.addEventListener('click', () => {
    cartContainer.classList.add('activeform')
    bgColor(btnCart);
    removeSearch()
});

btnCloseCart.addEventListener('click', ()=> {
    cartContainer.classList.remove('activeform');
    overlay.classList.remove("active");
});

//SEARCH
const iconSearch = document.getElementById('icon-search');
const searchContainer = document.querySelector('.search-container');
const closeSearch = document.getElementById('close-search');

iconSearch.onclick = () => {
    searchContainer.classList.toggle('activeform');
    bgColor(iconSearch);
}
/*Delete Btn */

function removeSearch() {
  searchContainer.classList.remove('activeform')
  overlay.classList.remove("active");
  overlay.classList.add("active");
}

//FORM

const formLoginContainer = document.querySelector('.form-container');
const loginBtn = document.getElementById('login-btn');
const closeBtnLogin = document.getElementById('btn-close-login');

loginBtn.addEventListener('click', () => {
  formLoginContainer.classList.add('activeform');
    bgColor(loginBtn);
    removeSearch();
});

closeBtnLogin.addEventListener('click', () => {
  formLoginContainer.classList.remove('activeform');
  overlay.classList.remove("active");
});

//Overlay y bg transparent
const menuContenedorAll = document.querySelector('.container-links-mobile');
const iconsIndex = document.querySelectorAll('.target-remove');
const overlay = document.createElement("div");

overlay.classList.add("overlay");
  document.body.appendChild(overlay);

  overlay.addEventListener("click", () => {

    //HAMBURGER MENU FUERA
  menuContenedorAll.classList.remove('activeMenu');

    overlay.classList.remove("active");
        iconsIndex.forEach(item => {
            item.classList.remove('activeform');
        });
  });

function bgColor (element) {
    const ContainerOf = element.parentElement;
    ContainerOf.classList.toggle("active");
    overlay.classList.toggle("active");
}

function cerrarFormularios (element) {
   element.classList.remove('activeform');
}

//NARVBAR MAN-WOMEN-DETAILS

const manContainer = document.querySelector('.hombre-details');
const womenContainer = document.querySelector('.mujer-details')
const navManInfo = document.getElementById('hombres-info');
const navWomenInfo = document.getElementById('mujer-info');
const contenido = document.querySelectorAll('.content');
const novedadesContainer = document.querySelector('.novedades-details');
const novedadesInfo = document.getElementById('novedades-info');
const ulLinks = document.querySelector('.un-links0');


/*
navManInfo.addEventListener('mouseenter', ()=> {
  vaciarClase()
  manContainer.classList.toggle('activeDetailsNav');
});

navWomenInfo.addEventListener('mouseenter', ()=> {
  vaciarClase()
  womenContainer.classList.toggle('activeDetailsNav')
});

manContainer.addEventListener('mouseleave', ()=> {
  vaciarClase()
  manContainer.classList.remove('activeDetailsNav');
});

womenContainer.addEventListener('mouseleave', ()=> {
  vaciarClase()
  womenContainer.classList.remove('activeDetailsNav')
});

function vaciarClase () {
  contenido.forEach(content => content.classList.remove('activeDetailsNav'))
}
*/

navManInfo.addEventListener('mouseover', handleNavMouseEnter.bind(null, manContainer));
navWomenInfo.addEventListener('mouseover', handleNavMouseEnter.bind(null, womenContainer));
novedadesInfo.addEventListener('mouseover', handleNavMouseEnter.bind(null, novedadesContainer));

manContainer.addEventListener('mouseleave', handleNavMouseLeave.bind(null, manContainer));
womenContainer.addEventListener('mouseleave', handleNavMouseLeave.bind(null, womenContainer));
novedadesContainer.addEventListener('mouseleave', handleNavMouseLeave.bind(null, novedadesContainer));

function handleNavMouseLeave(container) {
  container.classList.remove('activeDetailsNav');

  ulLinks.addEventListener('mouseleave', ()=>{
    container.classList.remove('activeDetailsNav');
  });
}

function handleNavMouseEnter(container) {
  vaciarClase();
  container.classList.add('activeDetailsNav');
}

// function handleNavClick(container){
//   container.classList.toggle('activedDetailsNav')
// }

function vaciarClase() {
  contenido.forEach(content => content.classList.remove('activeDetailsNav'));
}


//MENU MOBILE
const menuContenedorAllMB = document.querySelector('.mobile');
const listElements = document.querySelectorAll('.dropdown-toggle');
const menusElements = document.querySelectorAll('.mobile-line');


listElements.forEach(listElement =>{
  listElement.addEventListener('click', () =>{

      let height = 0;
      let menu = listElement.nextElementSibling;

      if(menu.clientHeight === 0){
          height = menu.scrollHeight;
      }

      menu.style.height = `${height}px`;

    });
}) ;

//MENU HAMBURGER
const menuHamburger = document.querySelector('.container-links-mobile');
const iconHamburger = document.getElementById('hamburger-icon');


iconHamburger.addEventListener('click', ()=>{
    menuContenedorAllMB.classList.toggle('activeMenu');
    bgColor(iconHamburger);
});


