document.addEventListener("DOMContentLoaded", function () {
    var divElement = document.querySelectorAll("div");
    for (var i = 0; i < divElement.length; i++) {
        divElement[i].addEventListener('click', clickButtons);
    }
    function clickButtons(event) {
        this.children[0].children[0].style.backgroundColor = "red";
        this.children[0].children[4].style.backgroundColor = "blue";
        this.children[0].children[1].style.backgroundColor = "green";
        this.children[0].children[2].style.backgroundColor = "green";
        this.children[0].children[3].style.backgroundColor = "green";
    }
});
