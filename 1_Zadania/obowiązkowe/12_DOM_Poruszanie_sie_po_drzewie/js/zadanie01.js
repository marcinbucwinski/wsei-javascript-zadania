Array.from(document.getElementsByClassName("button")).forEach(element => {
    element.addEventListener("click", function() {
        let click = this.nextElementSibling
        if (click)
            click.style.display = (click.style.display == "block" || !click.style.display) ? "none" : "block";
    })
});
