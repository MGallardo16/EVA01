const listaProductos = document.querySelector('#listaProductos');
let productosArray = [];


document.addEventListener("DOMContentLoaded", function(){

    this.addEventListener();

});

function eventListener(){
    listaProductos.addEventListener('click', getDataElements);
}

function getDataElements(e){
    if (e.target.classList.contains(btn-add)){
        const elementHtml = e.target.parentElement.parentElement;
        selectData(elementHtml);
    }    
}

function selectData(producto){
    const producto = {
        nombre: productos.querySelector("nombre").src,
        precio: productos.querySelector("precio").src,
        imagen: productos.querySelector("imagen").src,
        id: productos.querySelector("id"),
        cantidad: 1
    }

    productosArray: [...productosArray, producto];
    produtosHtml();
}

function productosHtml(){

    productosArray.forEach(producto => {
        const {imagen, nombre, precio, cantidad, id} = producto;

        const tr = document.createElement('tr');

        const tdImg = document.createElement('td');
        const producImg= document.createElement('img');
        producImg.src= imagen;
        tdImg.appendChild(producImg);

        const tdNombre = document.createElement('td');
        const producNombre= document.createElement('nombre');
        producNombre.src= nombre;
        tdNombre.appendChild(producNombre);
        
        
        const tdPrecio = document.createElement('td');
        const producPrecio= document.createElement('precio');
        producPrecio.src= precio;
        tdPrecio.appendChild(producPrecio);

        const tdCant = document.createElement('td');
        const producCant= document.createElement('input');
        producCant.type= 'number',
        producCant.min = 1,
        producCant.value= cantidad,
        producCant.dataset.id= id;
        tdCant.appendChild(producCant);
        
        const tdBorrar = document.createElement('td');
        const producBorrar = document.createElement('button');
        producBorrar.type= 'button';
        producBorrar.textContent= 'x',
        tdBorrar.appendChild(producBorrar);



        tr.appendChild(tdImg, tdNombre, tdPrecio, tdCant, tdBorrar);

    })
}


//Se dejó hasta el contentProducts en el video. 