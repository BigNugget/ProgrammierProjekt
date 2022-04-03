const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./database');
const pc = require('picocolors');
const readlineSync = require('readline-sync');
const fs = require('fs');
var inquirer = require('inquirer');

//Klasse Utils wird verwendet, um eine Zufallszahl zu erzeugen
class Utils {
//Zufallszahlen erzeugen für RangeSlider-Fragen, die abgefragt werden aus index von /database
  static randomize(questions) {
    return questions.sort(() => Math.random() - 0.5);
  }

  //Start Funktion

  static createDB(thema) {
    if (localStorage.length === 0) {

      console.log();
      console.log("Datenbank '/database' enthält keine Daten und wird deshalb mit Standardwertene belegt.");
      console.log();

      localStorage.setItem("Mathe", JSON.stringify([]));
      console.log(`Bereich "${pc.green('Mathe')}" für Mathe wurde angelegt`);
      console.log();

      Utils.setFrage("Mathe", "Was  ist die erste  Ableitung der Zahl 7?", "0");
      Utils.setFrage("Mathe", "Was ist die erste Ableitung von 5x^4+6x^2+1", "20x^3+12x");
      setFrage("Mathe", "Was ist die erste  Ableitung der Zahl 10*e^x^4", "10*4x^3*e^x^4");

      console.log("Die Datenbank /database wurde erstellt.");
      console.log()
    } else {
      //User soll erstellen können.
      Utils.setThema(readlineSync.question("Kategorie eingeben:  "));

    }
  };
  //Ende Funktion

  //Füge neue Kategorie hinzu zu /database -- Start Funktion
  static setThema(thema) {
    // Wir erstellen ein leeres Array
    let neuesThema = {
      questions: [],
      name: thema
    }
    if (localStorage.getItem(thema) === null) {
      let array = JSON.stringify(neuesThema);
      localStorage.setItem(thema, array);
      console.log(`Neue Kategorie : "${pc.green(thema)}" wurde erstellt.`);
      console.log();
    } else {
      console.log(`Die Kategorie "${pc.green(thema)}" ist bereits vorhanden`);
      console.log();
    }
  };
  //Ende Funktion

  //Lösche Thema aus /database -- Start Funktion
  static deleteThema(thema) {
    localStorage.removeItem(thema);
    console.log(`Die Kategorie "${pc.green(thema)}" wurde komplett gelöscht.`);
    console.log();
  }
  //Ende Funktion

//Bearbeite ThemenNamen in /database -- Start Funktion
  
//Name der Kategorie ändern
  static updateThema(category) {
    let newName = readlineSync.question("Wie soll die Kategorie heißen? ");
    for (let i=0; i < category.questions.length; i++) {
      category.questions[i].category = newName;
    }
    
    Utils.deleteThema(category.name);
    category.name = newName;
    localStorage.setItem(newName, JSON.stringify(category));
  }
  //Ende Funktion

  //Start von Funktion -- neue Frage wird erstellt.
  static neueFrage(category) {
    let question = readlineSync.question("Frage: ");
    let answer = readlineSync.question("Antwort: ");
    //let category = readlineSync.question("Kategorie: ")
    let obj = {
      question: `${question}`,
      answer: `${answer}`,
      category: `${category}`
    }
    Utils.saveTask(obj);
    return obj;
    console.log(obj)
  }
  //Alle Kategorien werden in Array geschrieben
  static getCategories() {
    return (fs.readdirSync("./database"));
  }
  //Ende von Funktion -- hol Kategorie aus Array getCategories
  static getTasks(categoryName) {
    let task = localStorage.getItem(categoryName);
    return JSON.parse(task);
  }
  
  static saveTask(obj) {
    let category = Utils.getTasks(obj.category);
    if (category.questions === null) category.questions = [];
    category.questions.push(obj);
    localStorage.setItem(obj.category, JSON.stringify(category));
  }

  static getAllQuestions() {
    let allQuestions = [];
    for (let category of Utils.getCategories()) {
      allQuestions = allQuestions.concat(Utils.getTasks(category).questions);
    }
    return allQuestions;
  }

  static deleteQuestion(question) {
    let categoryName = question.category;
    let category = Utils.getTasks(categoryName);

    // Es wird Rückwärts gezählt, da die Länge durch das Entfernen von Elementen            verkürzten  
    for (let i=category.questions.length - 1; i >= 0; i--) {
      if (category.questions[i].question === question.question) {
        console.log(category.questions);
        category.questions.splice(i, 1);
        console.log(category.questions);
      }
    }

    localStorage.setItem(question.category, JSON.stringify(category));
  }

  static RangeSlider(laenge) {
    var readlineSync = require('readline-sync'),
      MAX = laenge, MIN = 0, value = 0, key;
    console.log(
      '\n\n' + 'Wie viele Fragen sollen gestellt werden?' +
      '\n\n' + (new Array(20)).join(' ') +
      '[A] <- -> [D]  Bestätige: [SPACE]\n');
    while (true) {
      console.log('\x1B[1A\x1B[K|' +
        (new Array(value + 1)).join('-') + 'O' +
        (new Array(MAX - value + 1)).join('-') + '| ' + value);
      key = readlineSync.keyIn('',
        { hideEchoBack: true, mask: '', limit: 'ad ' });
      if (key === 'a') { if (value > MIN) { value--; } }
      else if (key === 'd') { if (value < MAX) { value++; } }
      else { break; }
    }
    console.log(`\nA User möchte : ${value} Frage(n) beantworten. `);
    return value
  }
// zufällige Fragen stellen 
  static showQuestions(questions, laenge){
    let randomQuestions = Utils.randomize(questions);
//Iteration durchwürfelt Fragen aus gewählter Kategorie
    for (let i = 0; i < laenge; i++) {
      console.log(randomQuestions[i].question);
      let antwort = readlineSync.question('Antwort: ')
      if(randomQuestions[i].answer===antwort){
        console.log('Richtig!');
      }
      else{
        console.log(
          `Falsch, \n\n
          Die Richtige Antwort lautet ${randomQuestions[i].answer}.`
        );
      }
    }
  }
  static goBack() {
  console.log("Wenn du zurückgehen möchtest, drücke 'z'")
  if (key===z) {
    start();
  }
  } 
}
exports.ut = Utils;