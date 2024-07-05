async function cargarProductos(gridProductos) {

    const response = await fetch('http://localhost:8080/productos')
    const productos = await response.json()

    gridProductos.innerHTML = ''
    productos.forEach(producto => {
        const div = document.createElement('div')
        div.className = "producto"
        div.id = "producto"
        div.innerHTML = `
                <div class="detalleProducto">

                    <img src="${producto.rutaImagen}"
                    alt="">
                    <div class="divDescripcion">
                        <h3 class="nombreProducto">${producto.descripcion}</h3>
                    </div>
                    <div class="divPrecio">
                        <h3 class="precio">$${producto.precio}</h3>
                    </div>

                    <div class="buttonCantidad">
                        <button class="btn minus-btn">-</button>
                        <input type="text" class="buttonCantidad-input" value="1">
                        <button class="btn plus-btn">+</button>
                    </div>

                    <button class="buttonComprar">Comprar</button>

                 </div>
        `

        gridProductos.appendChild(div)

    });

    const event = new CustomEvent('productosCargados');
    document.dispatchEvent(event);
    
}


document.addEventListener('DOMContentLoaded', () => {

    const gridProductos = document.getElementById('gridProductos')
    const quantityInput = document.querySelector('.buttonCantidad-input');

    cargarProductos(gridProductos)

})

/*Agregar NO HAY STOCK*/
