//Dichiarare il dato richeisto
let numbers = []

for (i = 0; i < 5; i++){
    let userNumber = parseInt( prompt ('Inserire un numero'));
    numbers.push(userNumber);

    let answer = document.querySelector('.numbers');
    answer.innerHTML = `Hai inserito: ${numbers}`
}