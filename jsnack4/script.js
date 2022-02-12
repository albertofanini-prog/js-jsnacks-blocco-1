/*---Invitati alla festa---*/

//Creare una lista esclusiva di invitati
let guests = [
    'alberto',
    'gianluca',
    'massimo',
    'alessio'
]
console.log(guests);

//Chidere il nome all'invitato
let guest = prompt('Benvenuto! Inserisci il tuo nome e verifica se sei tra gli invitati.');
console.log(guest);

//Dare un valore booleano
let find = false;
console.log(find);

//Controllare che il nome sia nella lista di invitati
for (let i = 0; i < guests.length; i++){

    if(guest === guests[i]){
        find = true;
    }
}

//Stampare un messaggio all'user con l'esito del controllo
if(find === true){
    alert('Sei tra gli invitati! Ti aspettiamo sabato sera alla dance hall.');
    
    //Comunicare l'esito positivo
    let answer = document.querySelector('.guests');
    answer.innerHTML = `Sei inivtato alla festa! Ti aspettiamo sabato sera alla dance hall.`,
}   else{
        alert('Purtroppo non sei tra gli invitati!');

        //Comunicare l'esito negativo
        let answer = document.querySelector('.guests');
        answer.innerHTML = `Non sei inivtato alla festa.`;
}