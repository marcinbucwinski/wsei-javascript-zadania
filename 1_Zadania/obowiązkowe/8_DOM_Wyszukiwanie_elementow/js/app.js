document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
     */
    //Zadanie 0
     var classElement = document.querySelector('.title');
     function getDataAnimation(element) {
        var newElement = element.dataset.animation;
        return newElement;
     }
     console.log(getDataAnimation(classElement));


     //Zadanie 1

     var classHome1 = document.querySelector('#home');
     var classHome2 = document.getElementById('home');
     console.log(classHome1);
     console.log(classHome2);

     var liElement = document.querySelector('li');
     console.log(liElement);

     var classBlock = document.querySelector('.block');
     console.log(classBlock);


    //Zadanie 2

    const tagNav = document.querySelector('nav').querySelectorAll('li');
    console.log(tagNav.length);

    const paragraf = document.querySelectorAll('div p')
    console.log(paragraf.length);

    const tagArticle = document.querySelectorAll('article div');
    console.log(tagArticle.length);


    //Zadanie 3

    const classFirst = document.querySelector('article.first');
    const h1 = classFirst.querySelectorAll('h1');
    console.log(h1.length);



});
