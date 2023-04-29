const questBtn = document.querySelectorAll('.accordion');

questBtn.forEach(button => button.addEventListener('click', showHidePanel))

function showHidePanel(){
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if(panel.style.display === "block"){
        panel.style.display = "none";
    } else{
        panel.style.display = "block";
    }
}

