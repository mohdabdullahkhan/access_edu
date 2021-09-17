window.addEventListener('DOMContentLoaded', 
function(){
    alert("DOM tree created");
});


// hamburger code

document.querySelector(".burger").addEventListener("click", (e) => {

    document.querySelector(".navigation").classList.toggle("abdullah");
});