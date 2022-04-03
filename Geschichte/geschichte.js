const readlineSync = require('readline-sync');
//const { learn } = require("./sections/learn");

function geschichtsaufgaben() {
   console.log( ' Es gibt 15 Fragen zum Fach Geschichte. Die Fragen werden zufällig ausgewählt');
	const number1 = prompt('Wie viele Fragen möchtest du beantworten? Gib eine Zahl zwischen 1 und 15 an');

  while (true) {
  
  switch (number1) {
    //Nutzer möchte eine Aufgabe rechen 
    case 1:
     Aufgabe1();
      
      
      break;
    //Nutzer möchte 2 Aufgaben rechen 
    case 2:
      Aufgabe2 ();
      break;

    case 3:
      //Geschichte();
      break;
    case 4:
      console.log('Auf Wiedersehen!');
      process.exit(1);
      break;
    default:
      console.log('ungültige Eingabe!');
      break;
      
  }
  console.clear();
	}
}

exports.geschichtsaufgaben = geschichtsaufgaben;