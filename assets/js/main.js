/* Scrivi un programma che stampi in console i numeri da 1 a 100 */

const listHTML = document.getElementById('lista')

for (let i = 1; i <=100; i++) {
    if (((i % 5) == 0) && ((i % 3) == 0)) {
        let listItem_BuzzFizz = `<li>BuzzFizz</li>`
        listHTML.innerHTML += listItem_BuzzFizz
        console.log('BuzzFizz');
    } else if ( (i % 3) == 0) {
        let listItem_Fizz = document.createElement("li")
        listItem_Fizz.innerHTML = 'Fizz';
        listHTML.appendChild(listItem_Fizz);
        console.log('Fizz');
    } else if ( (i % 5) == 0) {
        let listItem_Buzz = `<li>Buzz</li>`
        listHTML.innerHTML += listItem_Buzz;
        console.log('Buzz');
    } else {
        let listItem = `<li>${i}</li>`;
        listHTML.innerHTML += listItem; 
        console.log(i);
    }

}


/* for (let i= 1000; i >= 500; i--){
    console.log(i);

    let listItem = document.createElement('li' )
    listItem.append(`n° ${i}`) //inserisce nel li il contenuto 
    listHTML.append(listItem) //aggiunge li alla ul
    listItem.classList.add(`item-${i}`) //aggiunge la classe con classlist
} */