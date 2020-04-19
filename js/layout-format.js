function updateNav() {
    var navBarWidth = document.getElementById("nav-bar").clientWidth - 8;
    var navButtonsList = document.getElementById("nav-bar").children;
    for (let i = 0; i < navButtonsList.length; i++) {
        // This determines the maximum width for each item in the nav-bar
        navButtonsList[i].style.width = ((navBarWidth + 4 * (-4 * navButtonsList.length + 1)) / navButtonsList.length + "px");
    }
}

function updateLayout() {
    var footerWidth = document.getElementsByTagName("body")[0].clientWidth - 21;
    var articleWidth = 66 * (footerWidth + 21) / 100;
    var asideWidth = 34 * (footerWidth + 21) / 100 - 4;
    document.getElementsByTagName("article")[0].style.width = articleWidth + "px";
    document.getElementsByTagName("aside")[0].style.width = asideWidth + "px";
    if (document.getElementsByTagName("article")[0].clientWidth < 650) {
        document.getElementsByTagName("article")[0].style.width = footerWidth + 21 + "px";
        document.getElementsByTagName("aside")[0].style.width = footerWidth + 21 + "px";
        document.getElementsByTagName("article")[0].style.float = "none";
        document.getElementsByTagName("aside")[0].style.float = "none";
    } else {
        document.getElementsByTagName("article")[0].style.float = "left";
        document.getElementsByTagName("aside")[0].style.float = "right";
    }
}
function updateLoop() {
    updateNav();
    updateLayout();
    requestAnimationFrame(updateLoop);
}

updateLoop();