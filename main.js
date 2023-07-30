let toggleIcon = document.getElementById("toggle-icon")
let navLinks = document.getElementById("nav-link")
if(innerWidth >= 1024){
    navLinks.style.display = 'flex'
}else{
    navLinks.style.display = 'none'
}
toggleIcon.onclick = () =>{
    if(navLinks.style.display == 'none'){
        navLinks.style.display = "flex"
        console.log("done1")
    }else if(navLinks.style.display == 'flex'){
        navLinks.style.display = 'none'
        console.log("done")
    }
}