document.addEventListener("DOMContentLoaded", function(){
    var classElement = document.getElementsByClassName("box");
    for (let i = 0; i < classElement.length; i++) {
        classElement[i].onclick = function(){
            this.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        }
    }
});
