var typedff= new Typed(".text", {
    strings:["DATA ANALYST", "PYTHON DEVELOPER","SQL DEVELOPER"],
    typeSpeed:100,
    backSpeed:80,
    backDelay:2000,
    loop:true
    
});

var sidenav=document.querySelector(".side-navbar")


function showNavbar()
{
    sidenav.style.left = "0"
}
function closeNavbar()
{
 sidenav.style.left="-60%"
}