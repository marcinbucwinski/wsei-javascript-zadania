Array.from(document.getElementsByClassName("deleteBtn"))
    .forEach(element => {
        element.addEventListener("click", function() {
            this.parentElement.parentElement.remove();
        })
    })
