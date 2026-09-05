//De esta forma obtenemos el id desde la URL.
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));




//Buscamos el producto dentro de la lista.
const producto = productos.find(p => p.id === id);


//Mostramos el producto en el contenedor
function mostrarProducto() {
    const contenedor = document.getElementById("detalle-producto");


    if (!producto) {
        contenedor.innerHTML = "<p>Producto no encontrado</p>";
        return;
    }


    contenedor.innerHTML = `
    <div class="col-md-6">
      <img src="${producto.imagen}" alt="${producto.nombre}"
           class="imagen img-fluid rounded shadow" style="max-height:400px; object-fit:cover;">
    </div>
    <div class="col-md-6">
      <h3 class="nombre fw-bold">${producto.nombre}</h3>
      <p class="precio fs-4 text-danger">$${producto.precio}</p>
      <p class="descripcion text-muted"> ${producto.descripcion}</p>
      <button class="btn btn-danger btn-lg btn-add" onclick="agregarAlCarrito(${producto.id}); iluminarCarrito();">
        Añadir al carrito
      </button>
    </div>
  `;
}


mostrarProducto();