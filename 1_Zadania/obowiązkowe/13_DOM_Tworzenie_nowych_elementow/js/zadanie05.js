var moveElement = document.querySelectorAll("a.moveBtn");
    for(var i=0; i<moveElement.length; i++){
        moveElement[i].addEventListener('click', function(){
            var liElement;
            var idElement; 
            var tempElement;
            var list1 = document.getElementById("list1");
            var list2 = document.getElementById("list2");
            liElement = this.parentElement;
            idElement = document.getElementById(this.parentElement.parentElement.idElement);
            tempElement = this.parentElement.parentElement.idElement;
            idElement.removeChild(liElement);
                if(tempElement == "list1"){
                    list2.appendChild(liElement);
                }
                else{
                    list1.appendChild(liElement);
                }
            }    
        );
    }
