function toggleTab(evt, tabName) {
    var content = document.getElementById(tabName);
    if (content.style.display === "block") {
        content.style.display = "none";
        evt.currentTarget.classList.remove("active");
    } else {
        content.style.display = "block";
        evt.currentTarget.classList.add("active");
    }
}

function toggleSubMenu(evt, submenuId) {
    var submenu = document.getElementById(submenuId);
    if (submenu.style.display === "block") {
        submenu.style.display = "none";
        evt.currentTarget.classList.remove("active");
    } else {
        submenu.style.display = "block";
        evt.currentTarget.classList.add("active");
    }
}
