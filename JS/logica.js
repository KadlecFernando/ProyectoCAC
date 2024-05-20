const toggle = document.getElementById('toggle');
const submenu = document.getElementById('submenu');

function handleClickOutside(event) {
    if (toggle.checked && !submenu.contains(event.target) && event.target !== toggle) { /*toggle checked es si está abierto, submenucontains se asegura que el click no fue adentro, event target toggle es tampoco si fue el checkbox*/
        toggle.checked = false; /* si estas condiciones se cumplen se cierra el menú y desmarca el checkbox */
    }
}
document.addEventListener('click', handleClickOutside); /*hay click tonces se ejecuta jefe */
