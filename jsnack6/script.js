let number = []

let singleNumber = parseFloat(prompt('Inserisci un numero e calcola il cubo di esso.'));
number.push(singleNumber);

let cube = (number * number * number);
console.log(cube);

let answer = document.querySelector('.view');
answer.innerHTML = `Il cubo del numero da te inserito è: ${cube}.`;
