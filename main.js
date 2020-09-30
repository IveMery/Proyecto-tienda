const filtroNombre = document.querySelector('#filtrar')
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
mostrandoProductosFiltros.textContent = `Mostrando ${cantidad} productos(s) de ${tarjetas.length}`
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

// console.log(btn_comprar_carrito)
// console.log(contenedor_principal)
// console.log(btn_seguir_compra)



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


//-------------------------------------codigo para checkbox categoria 
//fitrar por categorias


for (let checkbox2 of filtroCategorias) {
  checkbox2.onclick = () => {
    filtrarTarjetas2();
  };
}

const hayCheckbox2Seleccionado = () => {
  for (let checkbox2 of filtroCategorias) {
    if (checkbox2.checked) {
      return true;
    }
  }
};

const coincidenCheckbox2YTarjeta = tarjeta => {
  const categor = tarjeta.dataset.categoria;
  for (let checkbox2 of filtroCategorias) {
    if (checkbox2.value === categor && checkbox2.checked) {
      return true;
    }
  }
};

const filtrarTarjetas2 = () => {
  for (let tarjeta of tarjetas) {
    tarjeta.classList.add('hidden');
    if (hayCheckbox2Seleccionado()) {
      if (coincidenCheckbox2YTarjeta(tarjeta)) {
        tarjeta.classList.remove('hidden');
      }
    }
    else {
      tarjeta.classList.remove('hidden')
    }
  }
};
//----------------------------------------------------- Codigo nuevo raiting

// cuando se escriba algo en el input
filtroNombre.oninput = () => {
  // recorro una a una cada tarjeta
  for (let tarjeta of tarjetas) {
    // me fijo el nombre de la tarjeta y qué buscó el usuario
    const titulo = tarjeta.dataset.nombre.toLowerCase();
    const busqueda = filtroNombre.value.toLowerCase();
    // si el titulo incluye lo que buscó el usuario...
    if (titulo.includes(busqueda)) {
      // le quito la clase "hidden" a la tarjeta
      tarjeta.classList.remove('hidden');
    } else {
      // se la agrego
      tarjeta.classList.add('hidden');
    }
  }
};

for (let checkbox of filtroRating) {
  checkbox.onclick = () => {
    filtrarTarjetas();
  };
}

const hayCheckboxSeleccionado = () => {
  for (let checkbox of filtroRating) {
    if (checkbox.checked) {
      return true;
    }
  }
};

const coincidenCheckboxYTarjeta = tarjeta => {
  const rating = tarjeta.dataset.rating;
  for (let checkbox of filtroRating) {
    if (checkbox.value === rating && checkbox.checked) {
      return true;
    }
  }
};

const filtrarTarjetas = () => {
  for (let tarjeta of tarjetas) {
    tarjeta.classList.add('hidden');
    if (hayCheckboxSeleccionado()) {
      if (coincidenCheckboxYTarjeta(tarjeta)) {
        tarjeta.classList.remove('hidden');
      }
    }
    else {
      tarjeta.classList.remove('hidden')
    }
  }
};

//reestrablecer
botonLimpiar.onclick = () => {
  filtroNombre.value = ""
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



//--------------------------------



