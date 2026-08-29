const productos =[

//Se hace una lista de productos.
//Cada producto tiene un id, nombre, precio e imagen. 
    {
    id: 1,
    nombre: "Monopoly Electrónico",
    precio: 30990,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_647182-MLC41723922306_052020-F-monopoly-banco-electronico--juego-de-mesa--hasbro.webp"
 
    },
    {
        id: 2,
        nombre: "Jenga",
        precio: 16990,
        imagen: "https://hasbrostore.cl/28317-large_default/juego-de-mesa-hasbro-games-jenga.jpg"
    },
    {
        id: 3,
        nombre: "Uno",
        precio: 3990,
        imagen: "https://images.mattel.net/image/upload/w_646,f_auto,q_60,dpr_2.0,c_pad/shop-emea-prod/products/letko17qizbj7u4dp7sl_d4122cf0-6d35-4671-b8dd-b8bde0f53948.jpg"
    },
    {
        id: 4,
        nombre: "Ajedrez de Madera",
        precio: 14990,
        imagen: "https://ansaldo.cl/cdn/shop/files/36046.jpg?v=1755182271&width=713"
    }
    ];

//--------------------------------------------------------------
//Se crea un array vacío que representa el carrito de compras.
//Aquí se irá guardando los productos que se vayan agregando.
let carrito = []; 


//--------------------------------------------------------------
//Esta función  es la que dibuja la forma en que se verán los productos en la página web.
// El document.getElementById("productos-lista") buscará en el contenedor html donde van las cards.
// El contenedor.innerHTML = "" Limpia el contenedor antes de ser llenado.
// productos.forEach(producto => { ... }) recorre cada producto y genera una card con el nombre, imagen y precio, con un botón para agregar al carrito.


function mostrarProductos() {
    const contenedor = document.getElementById("productos-lista");
    contenedor.innerHTML = "";
    productos.forEach(producto => {
        contenedor.innerHTML+= `
      <div class="col-md-4 mb-4">
        <div class="card bg-dark text-light h-100">
          <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
          <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">$${producto.precio}</p>
            <button class="btn btn-danger" onclick="agregarAlCarrito(${producto.id})">
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>
    `;
  });
}

//--------------------------------------------------------------
//Agregar al carrito se ejecuta cuando se le hace click en "añadir al carrito".
//find busca el producto usando el id que tiene como parámetro.
//carrito.push(producto) agrega al array el producto.
//actualizarCarrito() llama a la función que muestra el carrito actualizado.

function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    carrito.push(producto);
    actualizarCarrito();
}


//--------------------------------------------------------------
//Actualizar carrito muestra el contenido del carrito.
//El if (carrito.length === 0) verifica si el carrito está vacío, si lo está, muestra un mensaje y termina.
//El forEach recorre cada producto del carrito y lo dibuja con: Nombre, precio y botón de eliminar.
//Reduce() suma todos los precios para calcular el total.
//innerHTML += va agregando cada producto, al final muestra el total calculado.

function actualizarCarrito() {
    const contenedorCarrito = document.getElementById("carrito-contenido");
    contenedorCarrito.innerHTML = "";

    if (carrito.length === 0) {
        contenedorCarrito.innerHTML = "<p>El carrito está vacío</p>";
    return;
    }

    carrito.forEach((producto, index) => {
        contenedorCarrito.innerHTML += `
        <div class="d-flex justify-content-between align-items-center mb-2">
        <span>${producto.nombre} - $${producto.precio}</span>
        <button class="btn btn-sm btn-outline-light" onclick="eliminarDelCarrito(${index})">Eliminar</button>
      </div>
    `;
    });

    const total = carrito.reduce((sum, producto) => sum + producto.precio, 0);
    contenedorCarrito.innerHTML += `<p>Total: $${total}</p>`;
}


//--------------------------------------------------------------
//eliminarDelCarrit borra un producto del carrito según su posición.
//splice(index, 1) elimina UN producto en la posición indicada.
//actualizarCarrito() llama a la función para mostrar el carrit sin el producto eliminado.

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

//--------------------------------------------------------------
//mostrarProductos() llama a la función al cargar la página para que los productos aparezcan de inmediato.

mostrarProductos();
