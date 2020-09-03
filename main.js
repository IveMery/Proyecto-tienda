const filtroNombre = document.querySelector('#filtrar')
console.log(filtroNombre)
const tarjetas = document.getElementsByClassName('tarjetas')
const filtroRating = document.getElementsByClassName('review-filter')
const filtroCategorias = document.getElementsByClassName('filtroCategorias')

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


// recorro uno a uno los checkbox
for (let checkbox of filtroRating) {
    // si le hacen clic a uno de los checkbox
    checkbox.onclick = () => {
        // recorro una a una las tarjetas
        for (let tarjeta of tarjetas) {
            // si el checkbox esta seleccionado
            if (checkbox.checked) {
                const rating = tarjeta.dataset.rating;
                // me fijo si el valor del checkbox es igual al rating de la tarjeta
                if (checkbox.value === rating) {
                    tarjeta.classList.remove('hidden');
                } else {
                    tarjeta.classList.add('hidden');
                }
                // si el checkbox NO esta seleccionado... 
            } else {
                tarjeta.classList.remove('hidden');
            }
        }
    };
}


// recorro uno a uno los checkbox
for (let checkbox of filtroCategorias) {
    // si le hacen clic a uno de los checkbox
    checkbox.onclick = () => {
        // recorro una a una las tarjetas
        for (let tarjeta of tarjetas) {
            // si el checkbox esta seleccionado
            if (checkbox.checked) {
                const categor = tarjeta.dataset.categoria;
                // me fijo si el valor del checkbox es igual al rating de la tarjeta
                if (checkbox.value == categor) {
                    tarjeta.classList.remove('hidden');
                } else {
                    tarjeta.classList.add('hidden');
                }
                // si el checkbox NO esta seleccionado... 
            }
             else {
                tarjeta.classList.remove('hidden');
            }
        }
    };
}

