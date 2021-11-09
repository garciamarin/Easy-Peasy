
const toggleZIndex = function() {
    const myNavBar = document.getElementById("myNavbar");
    const navBarOpen = myNavBar.classList.value.includes("show");
    const zIndex = navBarOpen ? 0 : -1;

    const dishBoxes = document.getElementsByClassName("dishBox");
    // console.log(dishBoxes)
    for (var i=0; i<dishBoxes.length;i++) {
        const dishBox = dishBoxes[i];
        dishBox.style["z-index"] = zIndex;
    }
}

const menuButton = document.getElementById("menu-button");
menuButton.addEventListener("click", toggleZIndex)
