const readlineSync = require('readline-sync');
const localstorage = require('node-localstorage').LocalStorage;
const localStorage = new localstorage('./database');
const {questions,courses,selectQuestion} = require('./questions.js')
const pc = require('picocolors');
const { ut } = require('../utils');

function admin() {
  console.log(pc.blue(`Menu>Verwaltung \n\n`));
  console.log('--- Verwaltungsmodus---');
  console.log('Was möchten sie tun?');
  const options = [ 'Fragen erstellen', 'Neue Kategorie erstellen', 'Kategorie bearbeiten', 'Kategorie löschen', 'Fragen bearbeiten', 'Frage löschen', 'Zurück' ];
  const choice = readlineSync.keyInSelect(options,'Was möchtest Du tun?');
  console.clear();
  start1(options[choice])
}

function start1(choice) {
  switch (choice) {
    case "Fragen erstellen":
     	courses(questions());
      break;
    case "Neue Kategorie erstellen":
      ut.createDB();
      break;
    case "Kategorie bearbeiten":
      ut.updateThema(ut.getTasks(questions()));
      //ut.editThema();
      break;
    case "Kategorie löschen":
      ut.deleteThema(questions());
      break;
    case "Fragen bearbeiten":
      let questionToEdit = selectQuestion(ut.getTasks(questions()));
      ut.editQuestions();
      break;
    case "Frage löschen":
      let question = selectQuestion(ut.getTasks(questions()));
      ut.deleteQuestion(question);
      break;
    case "Zurück":
      ut.goBack();
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

function admin1() {
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
  let newCategory = readlineSync.prompt("Wie soll die neue Kategorie heissen?");
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