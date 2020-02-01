var ulElement = document.querySelector("ul");
    var aElement = document.querySelector("a");
    aElement.addEventListener('click', function(){
        for(var i=0; i<4; i++){
            if(ulElement.childElementCount>0){
                ulElement.children[0].remove();
            }
        }
    });
    
