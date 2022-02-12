let userNumbers = prompt('Scrivi un numero di 4 cifre,')
let numbers = userNumbers.split('')
let splittedNumbers = []

for (i = 0; i < numbers.length; i++){
    splittedNumbers.push(numbers[i])

    let single = document.querySelector('.viewS')
    single.innerHTML = `I numeri da te inseriti sono: ${numbers}`
}

let total = 0

for (i = 0; i < splittedNumbers.length; i++){
    total += splittedNumbers[i];

    let tot = document.querySelector('.viewTot')
    tot.innerHTML = `La somma dei numeri da te inseriti è: ${tot}`
}