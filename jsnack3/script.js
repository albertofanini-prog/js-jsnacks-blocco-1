//Chiedere all'user di inserire un numero per 5 volte
//Stampare la somma di tutti i numeri inseriti
//Eseguire sia con for che con while

let numbers = [];

/*for (i = 0; i < 5; i++){
    let userNumber = parseInt( prompt ('Inserire un numero per 5 volte.'));
    numbers.push(userNumber);

    let answer = document.querySelector('.numbers');
    answer.innerHTML = `Hai inserito: ${numbers}`;
}*/

while (numbers.length <=4){
    let userNumber = parseInt ( prompt ('Inserire un numero per 5 volte.'));
  
    if (userNumber !== isNaN);
    numbers.push(userNumber);

    let answer = document.querySelector('.numbers');
    answer.innerHTML = `Hai inserito: ${numbers}.`;
}

let total = 0;
for(i = 0; i < 5; i++){
    total += numbers[i];
}

let totalOne = document.querySelector('.numbers');
totalOne.innerHTML = `La somma dei numeri da te inseriti è ${total}.`;