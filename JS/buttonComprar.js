document.addEventListener('DOMContentLoaded', function() {

    const buttonsComprar = document.querySelectorAll('.buttonComprar')
    const quantityInputs = document.querySelectorAll('.quantityInputs')
    
    
    function setupButtonEvents() {
  
        buttonsComprar.forEach((buttonComprar, index) => {
            buttonComprar.addEventListener('click', function() {
                const quantityInput = quantityInputs[index];
                

            });
        });
  
    }
  
    setupButtonEvents();
  
    document.addEventListener('comprar', setupButtonEvents);
  });