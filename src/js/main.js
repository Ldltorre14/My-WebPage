
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


//Show Menu
document.addEventListener("DOMContentLoaded", function(){
    var menuButton = document.querySelector(".menu-icon")
    var navHeader = document.querySelector(".nav-header")
    var nav = document.querySelector(".nav")
    

    menuButton.addEventListener("click", function(){
        navHeader.style.setProperty('width','45%')
        navHeader.style.setProperty('height','60%')
    })
})

//Hide Menu
document.addEventListener("DOMContentLoaded",function(){
    var menuButton = document.querySelector(".menu-icon")
    var navHeader = document.querySelector(".nav-header")
    var nav = document.querySelector(".nav")

    menuButton.addEventListener("click", function(){
        
    })
})





