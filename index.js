const readlineSync = require("readline-sync");
const { admin, start1} = require("./Sections/admin");
const { learn } = require("./Sections/learn");
const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./database');
const {questions,courses} = require('./Sections/questions');
const pc = require('picocolors');
const { ut } = require('./utils');
var inquirer = require('inquirer');

start();

function mainMenu() {
   
  console.log('--- HAUPTMENÜ ---');
  const options = ['Lernen', 'Verwaltung'];
  const choice = readlineSync.keyInSelect(options,'Was möchtest Du tun?');
  console.clear();
  return options[choice];
}

function start(){
  
console.log(`${pc.blue('Menu \n\n')}`);
console.log(``)
console.log(`${pc.green("Hallo")} und ${pc.red("Willkommen!")}`);
ut.getCategories();
  
const choice = mainMenu();
  switch (choice) {
    //Wenn Lernen ausgewählt wird, gelangt man zur nächsten Ansicht, in welcher die         verschiedenen Fächer ausgewählt werden können
    case "Lernen":
      learn();
      break;
    //Wenn Verwaltung ausgewählt wird, gelangt man zur nächsten Ansicht, in welcher         neue Kategorien/Fragen/Antworten erstellt werden können  
    case "Verwaltung":
      admin();
      break;
    //Beendet das Programm
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