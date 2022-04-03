const readlineSync = require('readline-sync');
const { ut } = require('../utils');
const pc = require('picocolors');
const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./database');

function learn() {
  console.log(`${pc.blue('Menu>Lernen \n\n')}`);
  console.log('--- ToDo: Kategorie wählen ---');
  // "..." -> fasst alle Kategorien aus getCategories zusammen und schreibt sie in "Alle"
  const options  = ["Alle", ...ut.getCategories()]; 
  //["Alle", ["B", "C"]] --> ["Alle", "B", "C"]
  const choice = readlineSync.keyInSelect(options,'Was möchtest Du tun?');
  console.clear();
  courses(options[choice]);
}

function courses(choice){
  if (choice === "Alle") {
    let allQuestions = ut.getAllQuestions();
    let laenge = ut.RangeSlider(allQuestions.length);
    ut.showQuestions(allQuestions, laenge);
  } else {
    let category = ut.getTasks(choice);
    let laenge = ut.RangeSlider(category.questions.length);
    ut.showQuestions(category.questions, laenge);  
  }
  ut.goBack();
  // readlineSync.question("Warten");
}

exports.learn = learn;  
exports.courses=courses;