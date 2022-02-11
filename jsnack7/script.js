let number = 2

for (i = 1, i < 1001; i++){

    let numbers = [i];

    powerNumber = number ** numbers;
}

let answer = document.querySelector('.view');
answer.innerHTML = `Le potenze di 2 fino a mille sono ${powerNumber}`;


