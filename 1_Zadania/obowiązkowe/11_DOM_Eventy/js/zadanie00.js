//Zadanie 0a
var eventChildren = document.getElementsByClassName('parent');

for (var i=0; i<eventChildren.length; i++){
    eventChildren[i].addEventListener("mouseenter", function(e){
        this.children[0].style.display = "block";
    })
    eventChildren[i].addEventListener("mouseleave", function(e){
        this.children[0].style.display = "none";
    })
}

//Zadanie 0b
for (var i = 0; i < eventChildren.length; i++) {
    eventChildren[i].addEventListener("mouseleave", function() {
        function hideChildrenElement(element){
            element.firstElementChild.style.display='none';
        }
        hideChildrenElement(this);
    })
}
