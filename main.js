const filtroBusqueda = document.querySelector('#filtrar')
const tarjetas = document.getElementsByClassName('tarjetas')
const filtroRating = document.getElementsByClassName('review-filter')
const filtroCategorias = document.getElementsByClassName('filtroCategorias')
const checkboxes = document.querySelectorAll(".review-filter")
const botonLimpiar = document.querySelector(".botonLimpiar")

/*-------------- barra item mostras cantidad de productos filtrados
contar productos en la barra
const mostrandoProductosFiltros = document.querySelector('.mostrando')


const contarProductos = (cantidad)=>{
cantidad =tarjetas.length - cantidad}
mostrandoProductosFiltros.textContent = `Mostrando ${cantidad} productos(s) de ${tarjeta.length}`
}*/

// carrito
// anadir Productos al carrito
const numero = document.querySelector(`#numero`);
const botonComprar = document.querySelectorAll(`#btn_Compra`);
let cont = 1;
const agregarProductoAlCarrito = () => {
  for (let compras of btn_Compra) {
    compras.onclick = () => {
      numero.textContent = cont++;
    }
  }
}
agregarProductoAlCarrito()
// carrito vacio
const carritoVacio = document.querySelector('.carrito_vacio')
const carroDeComprasbtn = document.querySelector('.carroDecompras')
const carroDeComprasbtnVacio = document.querySelector('#btnCarroVacio')
// console.log(carroDeComprasbtnVacio)


// carrito con productos barra lateral

const carrito_productos = document.querySelector('.carrito_productos')
const xCerrarCarrito = document.querySelector('.cerrar')
//vista grid y vita lista
const productos_contenedor = document.querySelector('.contenedor_tarjetas')
const vista_grid = document.querySelector('#vista_grid')
const vista_lista = document.querySelector('#vista_lista')

//fin tipo de vista
//si el carrito esta vacio
const body = document.getElementById('body')
// vista lista

vista_lista.onclick = () => {
  productos_contenedor.classList.add('productos_en_lista')

}
vista_grid.onclick = () => {

  productos_contenedor.classList.remove('productos_en_lista')

}

//-------------------------------
//  const vaciarCarrito = document.querySelector('.btn_vaciar_carrito')

//   vaciarCarrito.onclick =() => {
//     numero.textContent = cont++
//   }

//   const sumaryrestar = (strigANUmero0 = 0);
//    numero.textContent = sumaryrestar

/************************* */

// contenedor checkout modal
const cerrarCarro = document.querySelector('#cerrar')
const overlay = document.querySelector('.overlay')
const btn_comprar_carrito = document.querySelector('.btn_comprar_carrito')
const contenedor_principal = document.querySelector('.contenedor_principal')
const btn_seguir_compra = document.querySelector('.seguir_compra')

carroDeComprasbtn.onclick = () => {
  carrito_productos.classList.toggle('ocultar_modal')

  // carrito_productos.classList.remove('hidden')
  overlay.classList.remove('hidden')
  body.classList.add('no-scroll')
}

cerrarCarro.onclick = () => {
  carrito_productos.classList.toggle('ocultar_modal')
  body.classList.remove('no-scroll')
  overlay.classList.add('hidden')



}

// abrir modal  al apretar el botoncomprar

btn_comprar_carrito.onclick = () => {

  contenedor_principal.classList.remove('hidden')
  overlay.classList.add('overlay-3')
}

btn_seguir_compra.onclick = () => {
  contenedor_principal.classList.add('hidden')
  carrito_productos.classList.add('ocultar_modal')
  overlay.classList.add('hidden')
  overlay.classList.remove('overlay-3')
  body.classList.remove('no-scroll')
}
// bont vacio con productos
const botonVaciarCarro = document.querySelector('.btn_vaciar_carrito')
// console.log(botonVaciarCarro)
const vaciaCarroBtn = document.querySelector('.modal_vaciar_carrito')

botonVaciarCarro.onclick = () => {
  vaciaCarroBtn.classList.remove('hidden')
  overlay.classList.add('overlay-3')
}

/*Seccion Filtros*/
const pasaFiltrosInput = (tarjeta) => {
  if (hayAlgoEscritoEnElInput()) {
    if (compararInputConTarjeta(tarjeta)) {
      return true
    }
    else {
      return false
    }
  }
  else {
    return true
  }
}

const pasaFiltrosRating = (tarjeta) => {
  if (hayAlgunCheckBoxChequeado()) {
    if (compararRatingConTarjeta(tarjeta)) {
      return true
    }
    else {
      return false
    }
  }
  else {
    return true
  }
}
const pasaFiltrosCategoria = (tarjeta) => {
  if (hayAlguncheckbox2Chequeado()) {
    if (compararCategoriaConTarjeta(tarjeta)) {
      return true
    }
    else {
      return false
    }
  }
  else {
    return true
  }
}
const pasaFiltros = (tarjeta) => {

  if (pasaFiltrosInput(tarjeta) && pasaFiltrosRating(tarjeta) && pasaFiltrosCategoria(tarjeta)) {
    return true
  }
  else {
    return false
  }
}

const compararCategoriaConTarjeta = (tarjeta) => {
  for (let checkbox2 of filtroCategorias) {
    if (checkbox2.checked) {
      if (checkbox2.value === tarjeta.dataset.categoria /*|| (checkbox.value === "i")*/) {
        return true
      }
    }
  }
  return false
}

const compararRatingConTarjeta = (tarjeta) => {
  for (let checkbox of filtroRating) {
    if (checkbox.checked) {
      if (checkbox.value === tarjeta.dataset.rating /*|| checkbox.value === "todos"*/) {
        return true
      }
    }
  }
  return false
}

const ocultarTarjeta = (tarjeta) => {
  return tarjeta.classList.add("hidden")
}

const mostrarTarjeta = (tarjeta) => {
  return tarjeta.classList.remove("hidden")
}
const filtrarTarjetas = () => {
  for (let tarjeta of tarjetas) {
    if (pasaFiltros(tarjeta)) {

      mostrarTarjeta(tarjeta)
    }
    else {
      ocultarTarjeta(tarjeta)
    }
  }
}
const compararInputConTarjeta = (tarjeta) => {
  if (tarjeta.dataset.nombre.includes(filtroBusqueda.value.toLowerCase())) {
    return true
  }
  else {
    return false
  }
}
const hayAlgunCheckBoxChequeado = () => {
  for (let checkbox of filtroRating) {
    if (checkbox.checked) {
      return true
    }
  }
  return false
}
const hayAlguncheckbox2Chequeado = () => {
  for (let checkbox2 of filtroCategorias) {
    if (checkbox2.checked) {
      return true
    }
  }
  return false
}
const hayAlgoEscritoEnElInput = () => {
  if (filtroBusqueda.value) {
    return true
  }
  else {
    return false
  }
}
filtroBusqueda.oninput = () => {
  filtrarTarjetas()
}
for (let checkbox of filtroRating) {
  checkbox.oninput = () => {
    filtrarTarjetas()
  }
}
for (let checkbox2 of filtroCategorias) {
  checkbox2.oninput = () => {
    filtrarTarjetas()
  }
}
//Limpiar Filtros
botonLimpiar.onclick = () => {
  filtroBusqueda.value = ""
  for (let checkbox of checkboxes) {
    checkbox.checked = false
    for (let checkbox2 of filtroCategorias) {
      checkbox2.checked = false
      for (let tarjeta of tarjetas) {
        tarjeta.classList.remove('hidden')
      }
    }
  }
};
/************************************* */


