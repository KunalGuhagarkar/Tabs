
const navItems = document.querySelectorAll('a');

// navItems.map(item => {
//     console.log(item.innerHTML)
// })

navItems.forEach(element => {
    element.addEventListener('click', activeBtn);
});

function activeBtn() {
    console.log('Active');
}