//Dichiarare i due numeri
let firstNumber = parseFloat ( prompt ('Inserisci un numero.') );
let secondNumber = parseFloat ( prompt ('Inserisci un altro numero.') );

//Dare un valore a un numero
let greater =  firstNumber;

//Dare un valore al secondo numero
if ( secondNumber > firstNumber){
    greater = secondNumber;
}

//Comunicare l'esito
let answer = document.querySelector('.greater');
answer.innerHTML = `${greater} è il numero maggiore.`