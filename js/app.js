console.log('ciao')
let numeriRandom = [];
let timerEl = document.getElementById('timer');




// alla chiusura dell'alert, far partire un timer di 30 secondi


//al termine far vedere quanti e quali numeri sono stati indovinati tramite console





//mostrare numeri all'utente tramite alert
while (numeriRandom.length < 5) {
    numeriRandom.push(generatoreNumRandom())
    // numeriRandom.toString(numeriRandom)
}
alert('Memorizza questi numeri:  ' + numeriRandom);

const clock = setTimeout (inserimentoNumeriUtente, 30000)

let numeriUtente = []
console.log(numeriUtente, 'numeri utente');



//far inserire all'utente tramite prompt, i numeri visti 
function inserimentoNumeriUtente(){
    for (let i = 0; numeriUtente.length < 5; i++) {
        prompt('Inserisci un numero alla volta tra quelli che hai visto')
        let numeriScelti = prompt()
        numeriUtente.push(numeriScelti)
        parseInt(numeriUtente)
        console.log(numeriUtente, 'numero utente')
    }
}

let numeriDaControllare = false

for (let i = 0; i <= numeriRandom.length; i++) {
    numeriRandom.includes(numeriUtente)

    if (!numeriRandom.includes(numeriUtente[i])) {
        console.log('Hai vinto')
        numeriDaControllare = true
    }
}

console.log(numeriDaControllare, 'numeri da controllare')



    let numeriIndovinati = document.getElementById('numeri-indovinati');
    numeriIndovinati.innerHTML += numeriUtente;
    // let numeriEstrattiRandom = document.getElementById('numeri-random-estratti');
    // numeriEstrattiRandom.innerHTML += numeriRandom


// setTimeout (, 1000)
// console.log(ciao)


// windows.addEventListener('click', function() ){
//     timer()
// }
// alert.addEventListener('click', function (){
//     setTimeout(timer, 3000)
// })
// counter = 30
// // timerEl = counter

// function timer(timer){
//     counter--
//     if (timer() === 0){
//         timer.append('Tempo scaduto')
//     }
//     return timer
// }

console.log(numeriRandom)


// let numeriAlertEl = document.getElementById('numeri-alert')
// numeriAlertEl.innerHTML += numeriRandom

// numeriRandom= document.getElementById('numeri')
// numeriRandom.innerHTML += numeriRandom

function generatoreNumRandom(num) {
    let numeri = Math.floor(Math.random() * 100)
    let numeroEstratto = numeriRandom.includes(numeri)
    if (numeroEstratto) {
        return generatoreNumRandom
    } else {
        return numeri
    }
}
