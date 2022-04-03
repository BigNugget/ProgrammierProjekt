const readlineSync = require("readline-sync");
const pc = require('picocolors');
const { ut } = require('../utils');
const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./database');

function questions() {
  console.log(`${pc.blue('Menu>Lernen>CRUD \n\n')}`);
  console.log("Create -- Update -- Delete");
  console.log('Wähle aus')
  const options = ut.getCategories();
	const choice = readlineSync.keyInSelect(options,'Wähle ein Fach aus: ');
  return options[choice]; 
}
//Kategorie holen
function selectQuestion(category) {
  const options = category.questions.map(question => question.question);
  const choice = readlineSync.keyInSelect(options,'Wähle eine Frage aus: ');
  return category.questions[choice];
}

function courses(choice){
  console.log('\n');
  ut.neueFrage(choice);
}

exports.questions = questions; 
exports.courses=courses;
exports.selectQuestion = selectQuestion;