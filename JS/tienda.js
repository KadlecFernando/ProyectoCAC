

async function cargarFiltros(ulFiltros){
    const response = await fetch('http://localhost:8080/tiposproductos')
    const filtros = await response.json()
    
    ulFiltros.innerHTML = ''

    filtros.forEach(filtro => {
        const li = document.createElement('li')
        li.innerHTML = `
            <li class="filtrosLi" data-id-tipo = ${filtro.idTipo} > ${filtro.descripcion} </li>
            `
        ulFiltros.appendChild(li)
    })
    
    const eventFiltrar = new CustomEvent('filtrar');
    document.dispatchEvent(eventFiltrar);
}

async function cargarProductos(gridProductos, esPorTipo, idTipo) {

    let response = await fetch('http://localhost:8080/productos');

    if (esPorTipo === true){
       response = await fetch(`http://localhost:8080/productos/productostipo/${idTipo}`)   
    }

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
                        <input type="text" class="buttonCantidad-input" value="1" readonly>
                        <button class="btn plus-btn">+</button>
                    </div>

                    <button class="buttonComprar" data-producto-id="${producto.idProducto}">Comprar</button>

                 </div>
        `

        gridProductos.appendChild(div)

    })

    const eventCantidad = new CustomEvent('manejoCantidades');
    const eventComprar = new CustomEvent('comprar');
    document.dispatchEvent(eventCantidad);
    document.dispatchEvent(eventComprar);
}


document.addEventListener('DOMContentLoaded', () => {

    const gridProductos = document.getElementById('gridProductos')
    const quantityInput = document.querySelector('.buttonCantidad-input');
    const ulFiltros = document.getElementById('ulFiltros')

    cargarFiltros(ulFiltros)
    
    cargarProductos(gridProductos)


})

/*Agregar Compra o NO HAY STOCK*/

.addEventListener('click', async (e) => {

})

/*Filtros categorias*/
