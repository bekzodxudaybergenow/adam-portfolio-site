let sidebarOpenBtn = document.querySelector('.sidebar-humburger--btn');
let sidebar = document.querySelector('.sidebar');
let closeBtn = document.querySelector('.close-btn');
let headerShade = document.querySelector('.header-shade');
let headerNav = document.querySelector('.header-nav');



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

// window.onscroll = () => {
//     let temp = 0;
//     if(window.scrollY > 0) {
//         // headerNav.style = 'transform: translateY(-100%)';
//         console.log(window.scrollY);
//         temp = window.scrollY;
//     }
//     // if(temp <)
//     console.log(`Temp: ${temp}`);
// }