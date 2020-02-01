document.addEventListener('keyup', function (element) {
    const inputElement = document.getElementById('name');
    const inputValue = document.getElementById('name').value;
    const typeElement = document.getElementById('type');
    var cardElement = '';
    if (element.target.id === 'name') {
        if (inputValue[0] == 4) {
            cardElement = 'VISA';
            if (inputValue.length >= 13 && inputValue.length <= 16) {
                inputElement.style.border = 'green';
            } else {
                inputElement.style.border = 'none';
            };
        };
        if (inputValue[0] == 5) {
            cardElement = 'MasterCard';
            if (inputValue.length === 16) {
                inputElement.style.border = 'green';
            } else {
                inputElement.style.border = 'none';
            }
        };
        if (inputValue[0] == 3) {
            if (inputValue[1] == 4 || inputValue[1] == 7) {
                cardElement = 'American Express';
                if (inputValue.length === 15) {
                    inputElement.style.border = 'green';
                } else {
                    inputElement.style.border = 'none';
                }
            }
        };
        typeElement.innerHTML = '';
        typeElement.appendChild(document.createTextNode(cardElement));
    }
})
