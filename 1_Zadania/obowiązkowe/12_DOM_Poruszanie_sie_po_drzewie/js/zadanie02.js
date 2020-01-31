Array.from(document.getElementsByClassName("button")).forEach(element => {
    element.addEventListener("click", function() {
        var Color = "#" + Math.floor(Math.random()*16777215).toString(16);
        if (this.parentElement)
            this.parentElement.style.backgroundColor = Color;
    })
});
