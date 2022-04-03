const readlineSync = require("readline-sync");
const { admin, start1} = require("./Sections/admin");
const { learn, } = require("./Sections/learn");
const { mathe1,database1,geographie1,database2,geschichte3,database3 } = require("storage");
const { matheaufgaben,RangeSlider } = require("./Mathe/mathematik");
//const { geschichtsaufgaben } = require("./Geschichte/geschichte");
const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./database');
const {questions} = require('./Sections/questions');


/*
// Hier kriegt ihr die Daten aus Mathe Datenbank
let matheDaten = JSON.parse(localStorage.getItem('Mathe'));

//Hier kriegt ihr die Daten aus Geographie
let geographieDaten = JSON.parse(localStorage.getItem('Geographie'));

//Hier kriegt ihr die Daten aus Geschichte
let geschichteDaten = JSON.parse(localStorage.getItem('Geschichte'));

//Falls ihr ne Frage hinzufügen wollt:
BsP: Mathe
let alteMatheDaten = JSON.parse(localStorage.getItem('Mathe'));
let neueFrage = {question: "Kam zuerst das Ei oder das Huhn", answer: "Atome"};
alteMatheDaten.push(neueFrage);
localStorage.setItem(JSON.stringify(alteMatheDaten));


//Falls ihr ne Frage löschen wollt:
BsP: Mathe
let alteMatheDaten = JSON.parse(localStorage.getItem('Mathe'));
let frageZuLöschen = {question: ..., answer: ...}
let neueMatheDaten = []
for(let i =0; i < alteMatheDaten.length; i++){
	if(alteMatheDaten[i].question !== frageZuLöschen.question && alteMatheDaten[i].answer !== frageZuLöschen.answer ){
	neueMatheDaten.push(alteMatheDaten[i]);
	}
}
localStorage.setItem(JSON.stringify(neueMatheDaten));
*/

//Hier kriegt ihr die Daten aus Geographie
//let geographieDaten = JSON.parse(localStorage.getItem('Geographie'));

//Hier kriegt ihr die Daten aus Geschichte
//let geschichteDaten = JSON.parse(localStorage.getItem('Geschichte'));

//Falls ihr ne Frage hinzufügen wollt:
/*BsP: Mathe
let alteMatheDaten = JSON.parse(localStorage.getItem('Mathe'));
let neueFrage = {question: "Kam zuerst das Ei oder das Huhn", answer: "Atome"};
alteMatheDaten.push(neueFrage);
localStorage.setItem(JSON.stringify(alteMatheDaten));
*/

//Falls ihr ne Frage löschen wollt:
/*BsP: Mathe
let alteMatheDaten = JSON.parse(localStorage.getItem('Mathe'));
let frageZuLöschen = {question: ..., answer: ...}
let neueMatheDaten = []
for(let i =0; i < alteMatheDaten.length; i++){
	if(alteMatheDaten[i].question !== frageZuLöschen.question && alteMatheDaten[i].answer !== frageZuLöschen.answer ){
	neueMatheDaten.push(alteMatheDaten[i]);
	}
}
localStorage.setItem(JSON.stringify(neueMatheDaten));
*/




// -+-



/*const mathezufall = require("lodash");
//let array1 = ["banane","keine ahnung","3",4,5,6,"asfdge"]

let randomArray = mathezufall.sampleSize(mathearray, array.length)
console.log(randomArray)
*/

start();

function mainMenu() {
   
  console.log('--- HAUPTMENÜ ---');
  const options = ['Lernen', 'Verwaltung', 'Programm beenden'];
  const choice = readlineSync.keyInSelect(options,'Was möchtest Du tun?');
  console.clear();
  return options[choice];
}
 
function start(){
console.log('Herzlich Willkommen  ')
const choice = mainMenu();
  switch (choice) {
    case "Lernen":
      learn();
      break;
    case "Verwaltung":
      admin();
      break;
    case "Programm beenden":
      console.log('Auf Wiedersehen!');
      //process.exit(1);
      break;
    default:
      console.log('ungültige Eingabe!');
      break;
  }

  console.clear();  

  
}
  
  






  