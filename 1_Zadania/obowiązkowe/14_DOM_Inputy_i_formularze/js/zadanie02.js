document.addEventListener("DOMContentLoaded", function(){
    var imageElement = document.querySelectorAll("img");    
    var selectElement = document.querySelector('select.form-control');        
    imageElement[0].style.display = "none";
    imageElement[1].style.display = "none";
    imageElement[2].style.display = "block";         
    selectElement.addEventListener('change', function(){
        if(selectElement.value == "Windows"){
            imageElement[2].style.display = "block";
            imageElement[0].style.display = "none";
            imageElement[1].style.display = "none";
        }
        else{
            if(selectElement.value == "Ubuntu"){
                imageElement[1].style.display = "block";
                imageElement[0].style.display = "none";
                imageElement[2].style.display = "none";
            }
            else{
                imageElement[0].style.display = "block";
                imageElement[1].style.display = "none";
                imageElement[2].style.display = "none";
            }
        }        
     });    
});
