//Projekt Gruppe B, TIF21A
//Karteikartensystem mit Anforderungen für 3 Personen.
//Storage erstellen

//LocalStorage anlegen bzw Dependency einbetten(installieren)
const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./database');

//Staaten ablegen in Datenbank JSON "zustand1"
const db1 = [
  {question:"Niederlande",answer:"Amsterdam"}
]

//Ablegen in DB erfolgt
const europa = JSON.stringify(db1);
localStorage.setItem("Europa", europa);
//Test-Abruf aus DB erfolgt.
const europaString = localStorage.getItem("Europa", europa);
const landAuslesen = JSON.parse(europaString);
//Ausgabe wird erzeugt, überprüfe Ergebnis 
//Ergebnis undefined, wenn keine neue Position erzeugt
//ansonsten Ergebnis bei [19]-> "Kroatien" "Zagreb"
console.log(landAuslesen[19]);

//Überprüfe, ob Daten hinzufügbar sind
landAuslesen.push({land: "FantasieLand", hauptstadt: "SouthPark"});

//neu erzeugtes Array aus DB to String -> wird abgelegt in newStr
const newStr = JSON.stringify(landAuslesen);
localStorage.setItem("Europa_add", newStr);
//Ausgabe newStr -> Array "landAuslesen" wurde um 1 Position erweitert und neu gespeichert
//console.log(newStr);
const zustand3 = JSON.parse(newStr);
//Ausgabe neu erzeugtes Array aus "newStr"
console.log(zustand3);
//Ausgabe neu erzeugtes Array aus DB an 21. Stelle
//console.log(landAuslesen[20]);


//Versuch: Schreibe neues Literal in Array

//Ausgabe neues Land
function printLand(name) {
  console.log(`Land: ${name.getLand()}`);
  console.log(`Hauptstadt: ${name.getHauptstadt()}`);
}
//Erzeuge neue Klasse für Land, Hauptstadt Literale
class AddLand { 
  constructor(land, hauptstadt) {
    this.land = land;
    this.hauptstadt = hauptstadt;
  }
//Funktion Zugriff auf Eigenschaft Land
  getLand(){
    return `${this.land}`
  }
//Funktion Zugriff auf Eigenschaft Hauptstadt
  getHauptstadt(){
    return `${this.hauptstadt}`
  }
    
  }

//Konstruktor wird mit neuen Werten belegt
const neuesLand = new AddLand('Test1', 'TestStadt1');
printLand(neuesLand);
console.log(neuesLand);
//Notiz: nachschauen wie man Konstruktor mit 2 Werten belegt via prompt

  
   /*console.log(zustand3.length);
console.log(zustand3.length+1);
zustand3.push(zustand3.length+1, ["{land: 'Diese', hauptstadt: 'Andere'}"]);
console.log(zustand3[22]);

let add = zustand3.push(zustand3.length+1, prompt([]));
console.log(zustand3); */