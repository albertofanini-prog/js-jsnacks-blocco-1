const dispari = []

let find = false

for (i = 0; i < 8; i++){

    user = parseInt(prompt('Scrivi un numero diverso per sei volte.'))

    if (user %2 === 0){

    } else if (find = true){
        dispari.push(user);
    }
    
}

let answer = document.querySelector('.view');
answer.innerHTML = `I numeri dispari da te digitati sono: ${dispari}.`