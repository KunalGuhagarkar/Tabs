const navItems = document.querySelectorAll("a");
const customContainer = document.getElementById("custom-container");

navItems.forEach((element) => {
    element.addEventListener("click", (e) => {
        navItems.forEach((element) => element.classList.remove("active"));
        element.classList.add("active");

        switch (element.id) {
            case "first-tab":
                customContainer.innerHTML = "<h1>Text for First Tab</h1>";
                break;
            case "second-tab":
                customContainer.innerHTML = "<h1>Text for Second Tab</h1>";
                break;
            case "third-tab":
                customContainer.innerHTML = "<h1>Text for Third Tab</h1>";
                break;
            case "fourth-tab":
                customContainer.innerHTML = "<h1>Text for Fourth Tab</h1>";
                break;
            default:
                break;
        }
    });
});
