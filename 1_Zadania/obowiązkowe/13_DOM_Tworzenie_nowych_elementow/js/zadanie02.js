    var addElement = document.getElementById("addBtn");
    var tableElement = document.getElementById("orders");
    addElement.addEventListener('click', clickMe);
    function clickMe(){
        var idElement = "";
        var itemElement = "";
        var quantityElement = "";
        var trElement="";
        var tdElement="";
        idElement = document.getElementById("orderId");
        itemElement = document.getElementById("item");
        quantityElement = document.getElementById("quantity");
        trElement = document.createElement("tr");
        tdElement = document.createElement("td");
        tdElement.innerHTML = idElement.value;
        trElement.appendChild(tdElement);
        tdElement = document.createElement("td");
        tdElement.innerHTML = itemElement.value;
        trElement.appendChild(tdElement);
        tdElement = document.createElement("td");
        tdElement.innerHTML = quantityElement.value;
        trElement.appendChild(tdElement);
        tableElement.appendChild(trElement);
    }
