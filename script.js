const menu = document.getElementById('items-liste');
const containerMenu = document.getElementById('container-menu-inactive');

menu.addEventListener('mouseover', () => {
    containerMenu.classList.add('container-menu-active');
})

containerMenu.addEventListener('mouseleave', () => {
    containerMenu.classList.remove('container-menu-active');
})



