
//Klasse Utils wird verwendet, um eine Zufallszahl zu erzeugen
class Utils{
   static random(upperlimit){
     return Math.floor(Math.random()*upperlimit);
   }
}

function createDB() {
  if(localStorage.length === 0) {
    
    console.log();
    console.log("Datenbank '/database' enthält keine Daten und wird deshalb mit Standardwertene belegt.");
    console.log();
    
    localStorage.setItem("Mathe", JSON.stringify([]));
    console.log(`Bereich "${pc.green('Mathe')}" für Mathe wurde angelegt`);
    console.log();
    
    setFrage("Mathe", "Was  ist die erste  Ableitung der Zahl 7?", "0");
    setFrage("Mathe", "Was ist die erste Ableitung von 5x^4+6x^2+1", "20x^3+12x");
    setFrage("Mathe", "Was ist die erste  Ableitung der Zahl 10*e^x^4", "10*4x^3*e^x^4");
    
    console.log("Die Datenbank /database wurde erstellt.");
    console.log()
  }
};


//Füge neue Kategorie hinzu zu /database
function setThema(thema) {
  let neuesThema = [];
  if(localStorage.getItem(thema) === null) {
    let themen = JSON.stringify(neuesThema);
    localStorage.setItem(thema, themen);
    console.log(`Neue Kategorie : "${pc.green(thema)}" wurde erstellt.`);
    console.log();
  }
  else {
    console.log(`Die Kategorie "${pc.green(category)}" ist bereits vorhanden`);
    console.log();
  }
};

//Lösche Thema aus /database
function deleteThema(thema) {
  localStorage.removeItem(thema);
  console.log(`Die Kategorie "${pc.green(thema)}" wurde komplett gelöscht.`);
  console.log();
}

//Bearbeite ThemenNamen in /database
function editThema(altesThema, neuesThema) {
  let array = getAllQuestionsSelectedCategory(altesThema);
  let editedThema = JSON.stringify(array);
  localStorage.removeItem(altesThema);
  localStorage.setItem(neuesThema, editedThema);
  console.log(`Die Kategorie "${pc.magenta(altesThema)}" wurde geändert zu  "${pc.green(neuesThema)}".`);
  console.log();
}




exports.ut = Utils;
exports.setThema = setThema;
exports.deleteThema = deleteThema;
exports.editThema = editThema;
