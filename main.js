const filtroNombre = document.querySelector('#filtrar')

const tarjetas = document.getElementsByClassName('tarjetas')
const filtroRating = document.getElementsByClassName('review-filter')

const filtroCategorias = document.getElementsByClassName('filtroCategorias')


const checkboxes = document.querySelectorAll(".review-filter")
// const chexboxescategorias = document.querySelectorAll('.reestablecer')
const botonLimpiar = document.querySelector("button")

//--------------




//-------------------------------------codigo para checkbox categoria test ultimo
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
    const titulo = tarjeta.dataset.nombre;
    const busqueda = filtroNombre.value;
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
      for (let tarjeta of tarjetas){
      tarjeta.classList.remove('hidden')
      }
    }
  }
};



//--------------------------------

