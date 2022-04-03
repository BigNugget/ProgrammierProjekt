const readlineSync = require("readline-sync");
const { neueFrage } = require('../utils');
const pc = require('picocolors');
const { ut } = require('../utils');
const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./database');
/*const { mathe1,database1,geographie1,database2,geschichte3,database3 } = require("storage");
/*

//Falls ihr ne Frage hinzufügen wollt:
BsP: Mathe
let alteMatheDaten = JSON.parse(localStorage.getItem('Mathe'));
let neueFrage = {question: "Kam zuerst das Ei oder das Huhn", answer: "Atome"};
alteMatheDaten.push(neueFrage);
localStorage.setItem(JSON.stringify(alteMatheDaten));
*/

function questions() {
   console.log(`${pc.blue('Menu>Lernen>Fragen erstellen \n\n')}`);
  console.log(' Zu welchem Fach möchtest du deine Fragen hinzufügen?')
  const options  = ut.getCategories();
	const choice = readlineSync.keyInSelect(options,'Wähle ein Fach aus ');
  
  courses(options[choice]);
}

 function courses(choice){
        console.log('\n');
        ut.neueFrage(choice);
  }

exports.questions = questions; 
exports.courses=courses;