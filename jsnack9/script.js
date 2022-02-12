const numbers = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
]

let summ = 0;

for (let i = 0; i < numbers.length; i++){

    summ += numbers[i];
}

let answerSumm = document.querySelector('.summ');
answerSumm.innerHTML = `La somma dei numeri da 1 a 10 è: ${summ}`

let media = summ / 10;

let answerMedia = document.querySelector('.media');
answerMedia.innerHTML = `La media dei numeri da 1 a 10 è: ${media}`