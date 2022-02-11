let words = []

while (words.lenght !==2 ){

    const firstWord = prompt('Scrivi una parola.');
    words.push(firstWord);

    const secondWord = prompt('Scrivi un altra parola');
    words.push(secondWord);

    let longest = `${firstWord} è più lunga di ${secondWord}`

    if(secondWord.lenght > firstWord.length){
        longest = `${secondWord} è più lunga di ${firstWord}`;
    }

    else if (firstWord.length === secondWord.length){
        longest = `Le parole sono uguali`
    }
    
    let answer = document.querySelector('.longest');
    answer.innerHTML = `${longest} è la parola pà lunga.`
}
