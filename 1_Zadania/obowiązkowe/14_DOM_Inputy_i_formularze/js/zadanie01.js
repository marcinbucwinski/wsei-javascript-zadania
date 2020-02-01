document.addEventListener("DOMContentLoaded", function () {
var invoiceData = document.getElementById("invoiceData");
invoiceData.style.display = "none";
var Checkbox = document.getElementById("invoice");
Checkbox.addEventListener('click', function (){
    if(Checkbox.checked == true){
        invoiceData.style.display = "block";
    }else{
        invoiceData.style.display = "none";
    }
});
    
});
