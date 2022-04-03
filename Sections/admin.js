const readlineSync = require('readline-sync');
const localstorage = require('node-localstorage').LocalStorage;
const localStorage = new localstorage('./database');
const {questions,courses} = require('./questions.js')
const { database1 } = require('../storage')
const pc = require('picocolors');
const { ut } = require('../utils');

//const { learn } = require('./learn.js');

function admin() {
   console.log(pc.blue(`Menu>Verwaltung \n\n`));
  console.log('--- Verwaltungsmodus---');
  console.log('Was möchten sie tun?');
  const options = [ 'Fragen erstellen', 'Neue Kategorie erstellen'];
  const choice = readlineSync.keyInSelect(options,'Was möchtest Du tun?');
  console.clear();
  //console.log(choice);
  start1(options[choice])
}

function start1(choice) {
	console.log("Create")
  switch (choice) {
    case "Fragen erstellen":
     	questions();
      break;
    case "Neue Kategorie erstellen":
      //admin();
      ut.createDB();
      break;
    case "Programm beenden":
      console.log('Auf Wiedersehen!');
      process.exit(1);
      break;
    default:
      console.log('ungültige Eingabe!');
      break;
  }

  console.clear();  
}



exports.admin= admin;
exports.start1=start1;




/*function admin1() {
  console.clear();
  console.log('--- VERWALTUNG ---');
  console.log('TODO…');
  readlineSync.keyInPause( 
    'Mit Tastendruck [A-Z] zurück zum Hauptmenü',
    { 
      guide: false,
    }
  );
}


function newCategory(){
  console.clear();
  let newCategory = readlineSync.prompt("Wie soll ihre neue Kategorie heissen?");
  //const addCategory = JSON.stringify(newCategory);
  //localStorage.setItem(addCategory);
  
}

function newQuestion(){
  letNewQuestion = readlineSync.prompt("Neue Frage");
  letNewAnswer = readlineSync.prompt("Antwort dazu")
}



exports.admin1 = admin1;
exports.newCategory = newCategory;
exports.newQuestion = newQuestion

exports.admin = admin;

*/