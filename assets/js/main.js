/* Scrivi un programma che stampi in console i numeri da 1 a 100 */



for (let i = 1; i <=100; i++) {
    if (((i % 5) == 0) && ((i % 3) == 0)) {
        console.log('BuzzFizz');
    } else if ( (i % 3) == 0) {
        console.log('Fizz');
    } else if ( (i % 5) == 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}