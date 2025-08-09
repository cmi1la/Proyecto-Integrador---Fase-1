// -------------------------------------
//         variables globales
// -------------------------------------


// -------------------------------------
//         funciones globales
// -------------------------------------
function agregar(e) {
    e.preventDefault()

    console.log('Agregar()')

    const refNombre = document.querySelector('#nombre')
    const refPrecio = document.querySelector('#precio')
    const refStock = document.querySelector('#stock')
    const refMarca = document.querySelector('#marca')
    const refCategoria = document.querySelector('#categoria')
    const refDetalles = document.querySelector('#detalles')
    const refFoto = document.querySelector('#foto')
    const refEnvio = document.querySelector('#envio')

    const nombre = refNombre.value
    const precio = refPrecio.value
    const stock = refStock.value
    const marca = refMarca.value
    const categoria = refCategoria.value
    const detalles = refDetalles.value
    const foto = refFoto.value
    const envio = refEnvio.checked

    const producto = {
        nombre: nombre,
        precio: +precio,
        stock: parseInt(stock),
        marca: marca,
        categoria: categoria,
        detalles: detalles,
        foto: foto,
        envio: envio,
    }

    console.log(producto)
    productos.push(producto)

    representarTablaProductos()

    // borro los campos de entrada del formulario
    refNombre.value = ''
    refPrecio.value = ''
    refStock.value = ''
    refMarca.value = ''
    refCategoria.value = ''
    refDetalles.value = ''
    refFoto.value = ''
    refEnvio.checked = false
}

function representarTablaProductos() {
    let filasTabla = ''

    if(productos.length) {
        filasTabla += `
            <tr>
                <th>nombre</th>
                <th>precio</th>
                <th>stock</th>
                <th>marca</th>
                <th>categoría</th>
                <th>detalles</th>
                <th>foto</th>
                <th>envío</th>
            </tr>        
        `

        for(let producto of productos) {
            filasTabla += `
                <tr>
                    <td>${producto.nombre}</td>
                    <td class="centrar">$${producto.precio}</td>
                    <td class="centrar">${producto.stock}</td>
                    <td>${producto.marca}</td>
                    <td>${producto.categoria}</td>
                    <td>${producto.detalles}</td>
                    <td class="centrar"><img width="75" src="${producto.foto}" alt="foto de ${producto.nombre}"></td>
                    <td class="centrar">${producto.envio? 'Si':'No'}</td>
                </tr>        
            `
        }
    }
    else {
        filasTabla += '<h2>No se encontraron productos para mostrar</h2>'
    }

    document.querySelector('table').innerHTML = filasTabla
}


function start() {
    console.warn(document.querySelector('title').textContent)

    representarTablaProductos()
}

/* let popup = document.getElementById("popup");*/

/* function abrirPopup() {
    popup.classList.add("abrir-popup");
}

function cerrarPopup() {
    popup.classList.remove("abrir-popup");
} 

let popup = document.getElementById("popup");
let form = document.getElementById("alta-form");

form.addEventListener("submit", function(e) {
    e.preventDefault(); 

    if (form.checkValidity()) {
        abrirPopup();
    } else {
        form.reportValidity();
    }
});

function abrirPopup() {
    popup.classList.add("abrir-popup");
}

function cerrarPopup() {
    popup.classList.remove("abrir-popup");
} */


document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('alta-form');
  const popup = document.getElementById('popup');
  const cerrarBtn = document.getElementById('cerrarBtn');

  form.addEventListener('submit', function (e) {
    if (!form.checkValidity()) {
      e.preventDefault();
      form.reportValidity();
      return;
    }

    e.preventDefault();
    popup.classList.add('abrir-popup');
    popup.setAttribute('aria-hidden', 'false');
  });

  cerrarBtn.addEventListener('click', function () {
    popup.classList.remove('abrir-popup');
    popup.setAttribute('aria-hidden', 'true');
  });
});

let form = document.getElementById("alta-form");

function cerrarPopup() {
    popup.classList.remove("abrir-popup");
    form.reset()
}