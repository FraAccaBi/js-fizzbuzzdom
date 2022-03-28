/* Scrivi un programma che stampi in console i numeri da 1 a 100 */

const listHTML = document.getElementById('lista')

for (let i = 1; i <=100; i++) {
    if (((i % 5) == 0) && ((i % 3) == 0)) {
        let listItem_BuzzFizz = `<div class="list-item-BuzzFizz col text-center">BuzzFizz</div>`;
        listHTML.innerHTML += listItem_BuzzFizz
        console.log('BuzzFizz');
    } else if ( (i % 3) == 0) {
        let listItem_Fizz = document.createElement("div")
        listItem_Fizz.classList.add("list-item-Fizz")
        listItem_Fizz.classList.add("col");
        listItem_Fizz.classList.add("text-center");
        listItem_Fizz.innerHTML = 'Fizz';
        listHTML.appendChild(listItem_Fizz);
        console.log('Fizz');
    } else if ( (i % 5) == 0) {
        let listItem_Buzz = `<div class="list-item-Buzz col text-center">Buzz</div>`
        listHTML.innerHTML += listItem_Buzz;
        console.log('Buzz');
    } else {
        let listItem = `<div class="list-item-number col text-center">${i}</div>`;
        listHTML.innerHTML += listItem;
        console.log(i);
    }

}


