document.addEventListener("DOMContentLoaded", function(){

    var teamElement1 = document.getElementById("team1");
    var pointElement1 = document.getElementById("points1");
    var teamElement2 = document.getElementById("team2");
    var pointElement2 = document.getElementById("points2");
    var buttonElement = document.querySelector("button");
    var table = document.querySelector("table");
    buttonElement.type="button";
    buttonElement.addEventListener('click', function(){    
        if(teamElement1.value != teamElement2.value && pointElement1.value > 0 && pointElement2.value > 0){
            var rowElement = table.insertRow(3),
            cell1 = rowElement.insertCell(0),
            cell2 = rowElement.insertCell(1),
            cell3 = rowElement.insertCell(2);
            cell1.innerHTML = teamElement1.value;
            cell2.innerHTML = teamElement2.value;
            cell3.innerHTML = pointElement1.value + ' - ' + pointElement2.value;
        }
     });
});
