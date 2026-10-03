const navItems = document.querySelectorAll("a");

// navItems.map(item => {
//     console.log(item.innerHTML)
// })

navItems.forEach((element) => {
    element.addEventListener("click", (e) => {
        navItems.forEach((element) => element.classList.remove("active"));
        element.classList.add("active");
        
        switch (element.id) {
            case 'first-tab':
                console.log("Text for first tab");
                break;
            case 'second-tab':
                console.log("Text for second tab");
                break;
            default:
                break;
        }
    });
});


