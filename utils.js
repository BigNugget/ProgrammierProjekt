const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./database');
const pc = require('picocolors');
const readlineSync = require('readline-sync');
const fs = require('fs');

//Klasse Utils wird verwendet, um eine Zufallszahl zu erzeugen
class Utils {
  static random(upperlimit) {
    return Math.floor(Math.random() * upperlimit);
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
    
    /*const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.push("Kiwi");
    */
  
  
  
  
//Füge neue Kategorie hinzu zu /database -- Start Funktion
  static setThema(thema) {
      // Wir erstellen ein leeres Array
      let neuesThema = {
        questions: []
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
  static editThema(altesThema, neuesThema) {
      let array = getFrageAusKategorie(altesThema);
      let editedThema = JSON.stringify(array);
      localStorage.removeItem(altesThema);
      localStorage.setItem(neuesThema, editedThema);
      console.log(`Die Kategorie "${pc.green(altesThema)}" wurde geändert zu  "${pc.green(neuesThema)}".`);
      console.log();
      
    }
//Ende Funktion

//Start von Funktion
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
//Anzahl Kategorien wird in Array geschrieben
  static getCategories(){
    return (fs.readdirSync("./database"));
    
  }
//Ende von Funktion -- hol Kategorie aus Array getCategories
  static getTasks(categoryName){
    let task = localStorage.getItem(categoryName);
    return JSON.parse(task);
  } 

  
  static saveTask(obj) {
    let category = Utils.getTasks(obj.category);
    if (category.questions === null) category.questions = [];
    category.questions.push(obj);
    localStorage.setItem(obj.category, JSON.stringify(category));
  }
  }
  
exports.ut = Utils;
