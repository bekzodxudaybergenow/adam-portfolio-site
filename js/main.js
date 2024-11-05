let sidebarOpenBtn = document.querySelector('.sidebar-humburger--btn');
let sidebar = document.querySelector('.sidebar');



sidebarOpenBtn.addEventListener('click', () => {
    sidebar.classList.add('sidebar-show');
})