var menuElement = document.getElementsByClassName("menu")[0];
document.getElementsByClassName("button")[0].addEventListener("click", function(){  
    var liElement = document.createElement("li");
    liElement.innerHTML = `Element ${menuElement.children.length+1} - w chwili dodania było ${menuElement.children.length} elementów`;
    menuElement.append(liElement);
})
