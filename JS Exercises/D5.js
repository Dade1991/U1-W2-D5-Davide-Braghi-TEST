/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"]

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i])
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

console.log(pets.sort())

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

console.log(pets.reverse())

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

// for (let i = 0; i < pets.length; i++) {
const cat = pets.pop()
pets.unshift(cat)

console.log(pets)
// }

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
]

cars[0].licencePlate = "licence plate: DH311ZX"
cars[1].licencePlate = "licence plate: FT654JH"
cars[2].licencePlate = "licence plate: UI376BY"

console.log(cars)

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

const newCar = {
  brand: "Audi",
  model: "A3",
  color: "silver",
  trims: ["RS", "xeno-led", "four wheels drive"],
  ["license plate"]: "CW557IG",
}

cars.push(newCar)

console.log(cars)

for (let i = 0; i < cars.length; i++) {
  delete cars[i].trims[cars[i].trims.length - 1] // non sarebbe basatato fare:   delete cars[i].trims[trims.length - 1]    ????
  // cars.trims.splice(3, 0)
}
console.log(cars)

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []

for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0])
}

console.log(justTrims)

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (let i = 0; i < cars.length; i++) {
  if (cars[i].color.charAt(0) === "b") {
    console.log("Fizz")
  } else {
    console.log("Buzz")
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let i = 0

const target = 32

while (i < numericArray.length) {
  console.log(numericArray[i])
  if (numericArray[i] === 32) {
    console.log("è arrivato a 32! dopo " + i + " tentativi")
    break
  }
  i++
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"]

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]

console.log(alphabet)

const arrayAlphaNum = []

for (let i = 0; i <= alphabet.length; i++)
  switch (alphabet[i]) {
    case "g":
  }

console.log()

// let a = "g" && "n" && "u" && "z" && "d"

// switch (a) {
//   case "a":
//     1
//   case "b":
//     2
//   case "c":
//     3
//   case "d":
//     4
//   case "e":
//     5
//   case "f":
//     6
//   case "g":
//     7
//   case "h":
//     8
//   case "i":
//     9
//   case "j":
//     10
//   case "k":
//     11
//   case "l":
//     12
//   case "m":
//     13
//   case "n":
//     14
//   case "o":
//     15
//   case "p":
//     16
//   case "q":
//     17
//   case "r":
//     18
//   case "s":
//     19
//   case "t":
//     20
//   case "u":
//     21
//   case "v":
//     22
//   case "w":
//     23
//   case "x":
//     24
//   case "y":
//     25
//   case "z":
//     26
//   default:
//     "Hope you will find it next time"
// }

// charactersArray.push(a)

// console.log(charactersArray)
