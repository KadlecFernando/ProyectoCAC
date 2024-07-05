document.addEventListener('DOMContentLoaded', function() {
  function setupButtonEvents() {
      const quantityInputs = document.querySelectorAll('.buttonCantidad-input');
      const minusBtns = document.querySelectorAll('.minus-btn');
      const plusBtns = document.querySelectorAll('.plus-btn');

      minusBtns.forEach((minusBtn, index) => {
          minusBtn.addEventListener('click', function() {
              const quantityInput = quantityInputs[index];
              if (parseInt(quantityInput.value) > 1) {
                  quantityInput.value = parseInt(quantityInput.value) - 1;
              }
          });
      });

      plusBtns.forEach((plusBtn, index) => {
          plusBtn.addEventListener('click', function() {
              const quantityInput = quantityInputs[index];
              quantityInput.value = parseInt(quantityInput.value) + 1;
          });
      });
  }

  setupButtonEvents();

  document.addEventListener('manejoCantidades', setupButtonEvents);
});