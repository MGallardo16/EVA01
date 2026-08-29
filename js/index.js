let usuarioLogueado = false;

const destacados = productos.slice(0,2);

function mostrarDestacados(){
    const contenedor = document.getElementById("preview-productos");
    contenedor.innerHTML = "";

    destacados.forEach(productos =>{
        contenedor.innerHTML += `
      <div class="col-md-6 mb-4">
        <div class="card bg-dark text-light h-100">
          <img src="${productos.imagen}" class="card-img-top" alt="${productos.nombre}">
          <div class="card-body">
            <h5 class="card-title">${productos.nombre}</h5>
            <p class="card-text">$${productos.precio}</p>
            <button class="btn btn-danger" ${usuarioLogueado ? "" : "disabled"}>
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>
    `
    });
}

mostrarDestacados();