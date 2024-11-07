let sidebarOpenBtn = document.querySelector('.sidebar-humburger--btn');
let sidebar = document.querySelector('.sidebar');
let closeBtn = document.querySelector('.close-btn');
let headerShade = document.querySelector('.header-shade');



sidebarOpenBtn.addEventListener('click', () => {
    sidebar.classList.add('sidebar-show');
    headerShade.classList.add('shade');

})
closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('sidebar-show');
    headerShade.classList.remove('shade');
})

headerShade.addEventListener('click', () => {
    sidebar.classList.remove('sidebar-show');
    headerShade.classList.remove('shade');
})