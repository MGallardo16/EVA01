const productos =[


//Se hace una lista de productos.
//Cada producto tiene un id, nombre, precio e imagen.
    {
    id: 1,
    nombre: "Monopoly Banco Electrónico",
    precio: 30990,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_647182-MLC41723922306_052020-F-monopoly-banco-electronico--juego-de-mesa--hasbro.webp",
    descripcion: "Monopoly Banco Electrónico (Hasbro Gaming) – ¡Olvídate del Efectivo y Domina el Mercado! <br> Lleva la experiencia clásica de comprar y vender propiedades a un nuevo nivel tecnológico con Monopoly Banco Electrónico. Realiza transacciones al instante, gestiona tu fortuna con tarjetas bancarias y experimenta un juego más ágil, moderno y dinámico."
    },
    {
        id: 2,
        nombre: "Jenga Clásico",
        precio: 16990,
        imagen: "https://hasbrostore.cl/28317-large_default/juego-de-mesa-hasbro-games-jenga.jpg",
        descripcion: "Jenga Clásico (Hasbro Gaming) - El Juego de Torre de Madera Favorito de Todos <br> ¡Desafía la gravedad, pon a prueba tu pulso y vive la emoción al máximo con el icónico Jenga Clásico! Ideal para reuniones familiares, noches de juegos con amigos o para pasar un rato lleno de risas y tensión estratégica."
    },
    {
        id: 3,
        nombre: "Uno",
        precio: 3990,
        imagen: "https://images.mattel.net/image/upload/w_646,f_auto,q_60,dpr_2.0,c_pad/shop-emea-prod/products/letko17qizbj7u4dp7sl_d4122cf0-6d35-4671-b8dd-b8bde0f53948.jpg",
        descripcion: "UNO Clásico con Comodines Personalizables (Mattel Games) – ¡El Juego de Cartas N.º 1 del Mundo! <br>Disfruta de partidas llenas de adrenalina, giros inesperados y diversión garantizada con el inolvidable UNO. Esta edición renovada no solo incluye la dinámica clásica de emparejar colores y números, sino también comodines borrables para que crees tus propias reglas y desafíes a tus amigos como nunca antes."
      },
    {
        id: 4,
        nombre: "Dos",
        precio: 8990,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_824353-CBT75005986781_032024-O.webp",
        descripcion: "DOS Segunda Edición en Estuche Metálico (Mattel Games) – ¡La Secuela del Juego de Cartas N.º 1! <br> Si te encanta UNO, prepárate para multiplicar la diversión con DOS Segunda Edición. Esta versión actualizada añade nuevas reglas y una mecánica mejorada donde juegas en dos pilas de descarte al mismo tiempo. Además, viene en un resistente estuche metálico coleccionable, perfecto para proteger tus cartas y llevar la diversión a todas partes."
      },
      {
        id: 5,
        nombre: "Ajedrez Clásicode Madera",
        precio: 12990,
        imagen: "https://ansaldo.cl/cdn/shop/files/36046.jpg?v=1755182271&width=713",
        descripcion: "Ajedrez Clásico de Madera – Elegancia, Estrategia y Tradición <br> Lleva a tu hogar el juego de estrategia por excelencia con este hermoso Juego de Ajedrez de Madera. Con un acabado atemporal y elegante, es el complemento perfecto tanto para aficionados del pensamiento táctico como para quienes buscan un elemento decorativo de distinción."      
   
      },
      {
        id: 6,
        nombre: "Catan: El Juego",
        precio: 28990,
        imagen: "https://www.goodgames.com.au/cdn/shop/files/0002063_catan-board-game-base-game-6th-edition-pre-order_1.png?v=1741300826",
        descripcion: "Catan: El Juego (Klaus Teuber) – El Clásico Moderno de Estrategia y Comercio <br> Sumérgete en la era de los descubrimientos y coloniza la próspera isla de Catan. En este mundialmente aclamado juego de mesa, competirás por construir caminos, fundar poblados y expandir tus ciudades mediante la recolección, el comercio astuto y la gestión inteligente de recursos."
      },
      {
        id: 7,
        nombre: "Juego de Mesa Ludo",
        precio: 7990,
        imagen: "https://media.falabella.com/falabellaCL/140395813_04/w=1500,h=1500,fit=cover",
        descripcion: "Juego de Mesa Ludo / Parchís Clásico – ¡Diversión Garantizada para Toda la Familia! <br> Revive los mejores momentos en familia con el infaltable juego de recorrido y estrategia Ludo / Parchís Clásico. Con su colorido tablero de cuatro zonas (amarillo, azul, rojo y verde) y sus piezas de gran visibilidad, es el juego ideal para introducir a los más pequeños en los juegos de mesa o para disfrutar de una tarde llena de competencia amigable."
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
    const contenedor = document.getElementById("producto-lista");
    contenedor.innerHTML = "";
    productos.forEach(producto => {
        contenedor.innerHTML+= `
      <div class="col-md-4 mb-4">
        <div class="card bg-dark text-light h-100">
          <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}" style="height:320px; object-fit: cover; witdh:100%">
          <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">$${producto.precio}</p>
            <a href="producto_e.html?id=${producto.id}" class="btn btn-danger">
              Ver producto
            </a>
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





