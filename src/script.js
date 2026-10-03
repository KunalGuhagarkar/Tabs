const navItems = document.querySelectorAll("a");

// navItems.map(item => {
//     console.log(item.innerHTML)
// })

navItems.forEach((element) => {
    element.addEventListener("click", (e) => {
        navItems.forEach((element) => element.classList.remove("active"));
        element.classList.add("active");
        console.log(element.id)
    });
});


