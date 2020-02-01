document.addEventListener('click', function (element) {
    if (element.target.className === 'btn btn-primary') {
        const emailValue = document.getElementById('email').value;
        const nameValue = document.getElementById('name').value;
        const surnameValue = document.getElementById('surname').value;
        const pass1Value = document.getElementById('pass1').value;
        const pass2Value = document.getElementById('pass2').value;
        const errorMessageValue = document.getElementsByClassName('error-message')[0];
        const checkBoxValue = document.getElementById('agree').checked;

        while (errorMessageValue.firstChild) {
            errorMessageValue.removeChild(errorMessageValue.firstChild);
        }

        if (!emailValue.includes('@')) {
            errorMessageValue.appendChild(document.createTextNode('Email musi posiadać znak @'));
        }
        if (nameValue.length < 6) {
            errorMessageValue.appendChild(document.createTextNode('Twoje imię jest za krótkie'));
        }
        if (surnameValue.length < 6) {
            errorMessageValue.appendChild(document.createTextNode('Twoje nazwisko jest za krótkie'));
        }
        if (pass1Value === '' || pass2Value === '' || pass1Value !== pass2Value) {
            errorMessageValue.appendChild(document.createTextNode('Hasła nie są takie same lub puste'));
            if (checkBoxValue !== true) {
                errorMessageValue.appendChild(document.createTextNode('Musisz zaakceptować warunki'));
            }

        }
    }
})
