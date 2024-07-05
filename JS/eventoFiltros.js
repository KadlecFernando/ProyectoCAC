document.addEventListener('DOMContentLoaded', function() {

    function setupButtonEvents() {
        const filtros = document.querySelectorAll('.filtrosLi')
        filtros.forEach((filtro, index) => {
            filtro.addEventListener('click', function() {
                cargarProductos(gridProductos,true,filtro.dataset.idTipo)  
            });
        });
  
    }
  
    setupButtonEvents();
  
    document.addEventListener('filtrar', setupButtonEvents);
  });