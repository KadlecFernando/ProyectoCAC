document.addEventListener('DOMContentLoaded', function() {
    const quantityInput = document.querySelector('.buttonCantidad-input');
    const minusBtn = document.querySelector('.minus-btn');
    const plusBtn = document.querySelector('.plus-btn');
  
    minusBtn.addEventListener('click', function() {
      // Decrementar el valor del input si es mayor que 1
      if (parseInt(quantityInput.value) > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
      }
    });
  
    plusBtn.addEventListener('click', function() {
      // Incrementar el valor del input
      quantityInput.value = parseInt(quantityInput.value) + 1;
    });
});