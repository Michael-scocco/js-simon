/*
Esercizio di oggi, Simon Says nome repo:
js-simon
Descrizione:
Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta,
i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti
e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
*/

// Un alert() espone 5 numeri generati casualmente.

//1.creare una funzione random
function random(min, max) {
    return Math.floor(Math.random()* (max - min + 1) + min);
};
//2. puschiare i numeri in un array vuoto
var arrayAlert = [];
//2.1 creare un for per generare 5 numeri casuali e puschiarli
for (var i = 0; i < 5; i++) {
    var randomPc = random(1, 100);
    arrayAlert.push(randomPc);
    console.log(arrayAlert);

}
// 2.2 far apparire un allert con tutti i numeri presenti
alert("questo è il numero casuale " + arrayAlert);


// 3. Da li parte un timer di 30 secondi.
// 3.1 crare una variabile tempo
var timer = 5;
// 3.2 dare una varibile alla funzione setInterval, per far in modo che si blocchi
// con se stessa, come se fosse break
var breaked = setInterval(function(){

// se, timer è minore o uguale a zero, blocca il ciclo
    if (timer <= 0) {
        clearInterval(breaked);

        var arrayUser = [];
        var i = 0;
        var score = 0;
        var match;
        while (i < 5) {
            var insertNumber = Number(prompt('inserisci numeri'));

            if (arrayUser.includes(insertNumber) || insertNumber <= 1 || insertNumber > 100 || isNaN(insertNumber)) {
                console.log('hai sbagliato ad inserire il numero');

            }else if (arrayAlert === arrayUser) {
                match = `hai perso con il punteggio di ${score}`;
                console.log(match);

            }else if (!arrayUser.includes(insertNumber)) {
                arrayUser.push(insertNumber);
                score++;
                console.log(arrayUser, ' punteggio di ' + score);

                    if (arrayAlert !== arrayUser) {
                        match = `hai vinto con il punteggio di ${score}`;
                        console.log(match);
                    }
            }
        }

    }else {//altrimenti continua a decrementare
        timer--;
    }
    document.getElementById('tempo').innerHTML = timer;

}, 1000);// i millesimi sono intesi ke vengono moltiplicati alla varibile timer
