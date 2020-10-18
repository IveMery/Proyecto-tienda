/*Mostrar cantidad de productos filtrados en la barra*/
const mostrandoProductosFiltros = document.querySelector('.mostrando')
const mostrandoCantidadDeProductosFiltrados = () => {
  let cantidad = 0
  for (const tarjeta of tarjetas) {
    if (pasaFiltros(tarjeta)) {
      cantidad++
    }
  }
  mostrandoProductosFiltros.textContent = `Mostrando ${cantidad} productos(s) de ${tarjetas.length}`
}

// anadir Productos al carrito se modifica el numero
const numero = document.querySelector(`#numero`);
const btnCompra = document.querySelectorAll(`.btn_Compra`);
let cont = 2;
const agregarProductoAlCarrito = () => {
  for (let compras of btnCompra) {
    compras.onclick = () => {
      numero.textContent = cont++;
    }
  }
}
agregarProductoAlCarrito()

// variables vista grid y vita lista
const contenedor_tarjetas = document.querySelector('.contenedor_tarjetas')
const tarjetasProductos = document.querySelectorAll('.tarjetasProductos')
const descripcionProducto = document.querySelectorAll('.descripcion_producto')
const btnVista_Grid = document.querySelector('#vista_grid')
const btnVista_Lista = document.querySelector('#vista_lista')
const infoProductoOcultar = document.querySelectorAll('.infoProductoOcultar')
const body = document.getElementById('body')

//funcion vista grid y vista lista
const contenedor_lista = () => {
  for (let productos of tarjetasProductos) {
    productos.classList.remove('tarjetasProductos')
    productos.classList.add('ampliarTarjeta')
  }
}
const contenedor_grid = () => {
  for (let productos of tarjetasProductos) {
    productos.classList.add('tarjetasProductos')
    productos.classList.remove('ampliarTarjeta')
  }
}
const vista_lista = () => {
  contenedor_tarjetas.classList.add('columna')
  for (let mostrar of infoProductoOcultar) {
    mostrar.classList.remove('ocultar')
  }
  for (descripcion of descripcionProducto) {
    descripcion.classList.remove('no-center')
  }
}
const vista_grid = () => {
  contenedor_tarjetas.classList.remove('columna')
  for (let mostrar of infoProductoOcultar) {
    mostrar.classList.add('ocultar')
  }
  for (descripcion of descripcionProducto) {
    descripcion.classList.add('no-center')
  }
}

btnVista_Lista.onclick = () => {
  contenedor_lista()
  vista_lista()
}

btnVista_Grid.onclick = () => {
  contenedor_grid()
  vista_grid()
}

// carrito de compras lateral
const carroDeComprasbtn = document.querySelector('.carroDecompras')
const carrito_productos = document.querySelector('.carrito_productos')
const xCerrarCarrito = document.querySelector('.cerrar')
// contenedor checkout modal
const cerrarCarro = document.querySelector('#cerrar')
const overlay = document.querySelector('.overlay')
const btn_comprar_carrito = document.querySelector('.btn_comprar_carrito')
const contenedor_principal = document.querySelector('.contenedor_principal')
const btn_seguir_compra = document.querySelector('.seguir_compra')

carroDeComprasbtn.onclick = () => {
  carrito_productos.classList.toggle('ocultar_modal')
  overlay.classList.remove('hidden')
  body.classList.add('no-scroll')
}

cerrarCarro.onclick = () => {
  carrito_productos.classList.toggle('ocultar_modal')
  body.classList.remove('no-scroll')
  overlay.classList.add('hidden')
  limpiarCarrito.classList.remove('hidden')
  parrafoCarrito.textContent = '2 producto(s) agregado(s)'
  btn_comprar_carrito.classList.remove('hidden')
  botonVaciarCarro.classList.remove('hidden')
  subtotalArticulosCarrito.classList.remove('hidden')
}

// abrir modal checkout  al apretar el botoncomprar
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
//modal vaciar carrito
const botonVaciarCarro = document.querySelector('.btn_vaciar_carrito')
const vaciaCarroModal = document.querySelector('.modal_vaciar_carrito')
const limpiarCarrito = document.querySelector('.articulos_anadidos')
const parrafoCarrito = document.querySelector('#parrafo_productos--agregados')
const subtotalArticulosCarrito = document.querySelector('.subtotal_articulos')
const cancelarVaciarCarrito = document.querySelector('#btnCancelar')
const vaciarBotonModalFinal = document.querySelector('#btnvaciarCarritoModalFinal')

botonVaciarCarro.onclick = () => {
  vaciaCarroModal.classList.remove('hidden')
  overlay.classList.add('overlay-3')
}

vaciarBotonModalFinal.onclick = () => {
  vaciaCarroModal.classList.add('hidden')
  overlay.classList.remove('overlay-3')
  limpiarCarrito.classList.add('hidden')
  parrafoCarrito.textContent = 'No tienes productos en el carrito, ¡agrega algunos!'
  btn_comprar_carrito.classList.add('hidden')
  botonVaciarCarro.classList.add('hidden')
  subtotalArticulosCarrito.classList.add('hidden')
}

cancelarVaciarCarrito.onclick = () => {
  vaciaCarroModal.classList.add('hidden')
  overlay.classList.remove('overlay-3')
}

//Inicio seccion aside lateral responsive
const btnFiltro = document.getElementById('btnFiltro')
const asidePrincipal = document.querySelector('.aside_principal')
const btnCerrarFiltros = document.querySelector('.cerrar_filtros')

btnFiltro.onclick = () => {
  asidePrincipal.classList.add('mostrarFiltros')
  overlay.classList.remove('hidden')
  body.classList.add('no-scroll')
}
btnCerrarFiltros.onclick = () => {
  asidePrincipal.classList.remove('mostrarFiltros')
  overlay.classList.add('hidden')
  body.classList.remove('no-scroll')
}
//Calculo modal checkout
const mostrarSubtotal = document.querySelector("#subtotal")
const mostrarSubtotalNumero = Number(mostrarSubtotal)
const metodoDePago = document.querySelectorAll(".metodoPago")
const parrafoRecargo = document.querySelector("#recargo")
const parrafoEnvio = document.querySelector("#parrafoEnvio")
const parrafoDescuento = document.querySelector("#parrafoDescuento")
const parrafoTotal = document.querySelector("#parrafoTotal")
const radioCredito = document.querySelector(".radioCredito")
const checkboxEnvio = document.querySelector(".checkboxEnvio")
const checkboxDescuento = document.querySelector(".checkboxdescuento")
const radioDebito = document.querySelector(".RadioDebito")
const precio = 5000
mostrarSubtotal.textContent = `$ ${precio}`

for (let metodo of metodoDePago) {
  metodo.oninput = () => {
    obtenerTotal()
  }
}

let recargo
let descuento
let envio
//tarjetaCredito
const recargoCredito = () => {
  recargo = (precio * 10) / 100
  parrafoRecargo.textContent = `$ ${recargo}`
  return recargo
}
//Tarjeta de descuento
const tarjetaDescuento = () => {
  descuento = (precio * 10) / 100
  parrafoDescuento.textContent = `$ ${descuento}`
  return descuento
}
//Gasto ennvio
const necesitaEnvio = () => {
  envio = 50
  parrafoEnvio.textContent = `$ ${envio}`
  return envio
}
const obtenerTotal = () => {
  if (radioCredito.checked) {
    recargo = recargoCredito()

  } else {
    recargo = 0
    parrafoRecargo.textContent = recargo
  }
  if (checkboxEnvio.checked) {
    envio = necesitaEnvio()
  } else {
    envio = 0
    parrafoEnvio.textContent = envio
  }
  if (checkboxDescuento.checked) {
    descuento = tarjetaDescuento()
  } else {
    descuento = 0
    parrafoDescuento.textContent = descuento
  }
  let TotalFinalCompra = precio + envio + recargo - descuento
  parrafoTotal.textContent = `$ ${TotalFinalCompra}`
  return TotalFinalCompra
}
//Mostrar parrafos segun seleccion del usuario en el modal checkout
const textoCredito = document.querySelector('.textotc')
const textoDescuento = document.querySelector('.textoDescuento')
const textoEnvio = document.querySelector('.textoEnvio')
radioDebito.onclick = () => {
  textoCredito.classList.add('ocultar')
}
radioCredito.onclick = () => {
  textoCredito.classList.remove('ocultar')
}

checkboxDescuento.onclick = () => {
  textoDescuento.classList.toggle('ocultar')
}
checkboxEnvio.onclick = () => {
  textoEnvio.classList.toggle('ocultar')
}

//Variables y funciones seccion Filtros
const filtroBusqueda = document.querySelector('#filtrar')
const tarjetas = document.getElementsByClassName('tarjetas')
const filtroRating = document.getElementsByClassName('review-filter')
const filtroCategorias = document.getElementsByClassName('filtroCategorias')
const checkboxes = document.querySelectorAll(".review-filter")
const botonLimpiar = document.querySelector(".botonLimpiar")

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
      if (checkbox2.value === tarjeta.dataset.categoria) {
        return true
      }
    }
  }
  return false
}

const compararRatingConTarjeta = (tarjeta) => {
  for (let checkbox of filtroRating) {
    if (checkbox.checked) {
      if (checkbox.value === tarjeta.dataset.rating) {
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
  mostrandoCantidadDeProductosFiltrados()
}
for (let checkbox of filtroRating) {
  checkbox.oninput = () => {
    filtrarTarjetas()
    mostrandoCantidadDeProductosFiltrados()
  }
}
for (let checkbox2 of filtroCategorias) {
  checkbox2.oninput = () => {
    filtrarTarjetas()
    mostrandoCantidadDeProductosFiltrados()
  }
}
//Boton limpiar Filtros
botonLimpiar.onclick = () => {
  filtroBusqueda.value = ""
  for (let checkbox of checkboxes) {
    checkbox.checked = false
    for (let checkbox2 of filtroCategorias) {
      checkbox2.checked = false
      for (let tarjeta of tarjetas) {
        tarjeta.classList.remove('hidden')
        mostrandoCantidadDeProductosFiltrados()
      }
    }
  }
};



