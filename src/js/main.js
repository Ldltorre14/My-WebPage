

// ************* FUNCTIONS **************
const configMenuOpen = (menuButton, navHeader, navLinks) => {
    navHeader.style.height = '40%';
    navHeader.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    navLinks.forEach(function(link) {
        link.style.color = 'rgba(137, 137, 137, 1.0)';
        link.style.display = 'block';
    });
}

const configMenuClose = (menuButton, navHeader, navLinks) =>{
    navHeader.style.setProperty('width', '100%');
    navHeader.style.setProperty('height', '10%');
    navHeader.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    navLinks.forEach(function(link) {
        link.style.color = 'rgba(137, 137, 137, 0.0)';
        link.style.display = 'none';
    });
}



// ************ EVENT LISTENERS *********************
// Redirect to Github/Linkedin
document.addEventListener("DOMContentLoaded", function(){
    var element = document.getElementById("github-icon")
    element.addEventListener("click", function(){
        window.open("https://github.com/Ldltorre14","_blank")
    })
})

document.addEventListener("DOMContentLoaded", function(){
    var element = document.getElementById("linkedin-icon")
    element.addEventListener("click", function(){
        window.open("https://www.linkedin.com/in/leonardo-octavio-perez-de-la-torre-164a6b23b",
        "_blank")
    })
})


document.addEventListener("DOMContentLoaded", function () {
    var menuButton = document.querySelector(".menu-icon");
    var navHeader = document.querySelector(".nav-header");
    var navLinks = document.querySelectorAll(".nav"); 

    var isMenuOpen = false;

    menuButton.addEventListener("click", function () {
        if (!isMenuOpen) {
            // Show Menu
            configMenuOpen(menuButton,navHeader,navLinks)
        } else {
            // Hide Menu   
            configMenuClose(menuButton,navHeader,navLinks)
        }
        if(document.documentElement.clientWidth >= 1024 && !isMenuOpen){
            navLinks.forEach(function (link){
                link.style.display = 'block';
            })
        }
        // Toggle the menu state
        isMenuOpen = !isMenuOpen;
    });
});






