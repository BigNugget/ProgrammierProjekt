const readlineSync = require('readline-sync');
//const readlineSync = require('./Mathe');
const { matheAufgaben } = require('../Mathe/mathematik');
const { ut } = require('../utils');
const {  geschichtsAufgaben   }= require ('../Geschichte/geschichte')
const pc = require('picocolors');

const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./database');

function learn() {
  console.log(`${pc.blue('Menu>Lernen \n\n')}`);
  console.log('--- ToDo: Fach auswählen ---');
  const options  = ['Geographie', 'Mathematik', 'Geschichte'];
  const choice = readlineSync.keyInSelect(options,'Was möchtest Du tun?');
  console.clear();
  courses(options[choice]);
}

function courses(choice){
  switch (choice) {
      // Wenn Geographie ausgewählt wird wird die Funktion database ausgeführt
    case "Geographie":
      database1();
      break;
    case "Mathematik":
      //matheaufgaben.matheaufgaben();
      matheAufgaben();
      
       //localStorage.setItem('mathe', JSON.stringify(dateaes));
      break;
    case "Geschichte":
      geschichtsAufgaben();
      break;

      
    default:
      console.log('ungültige Eingabe!');
      break;
  }
}

exports.learn = learn;  


 /*const choice = readlineSync.keyInSelect(options,'Was möchtest Du tun?');
  console.clear();
  return options[choice];
}
}
function affe() {
  console.log('--- ToDo: Fach auswählen ---');
  const choice = readlineSync.keyInSelect(
    ['Geographie', 'Mathematik', 'Geschichte'],
    'Was möchtest Du tun?',
    
  );
    while (true) {
  
  switch (choice) {
    case 0:
      Geographie();
      break;
    case 1:
      Matheaufgaben();
      break;

    case 3:
      Geschichte();
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

exports.affe = affe;



/*function learn() {
  console.clear();
  
  while (true) {
    console.log('TODO: Fach auswählen…');
    console.log('Mathematik');
    console.log('Geographie');
     console.log('Politik');
    console.log('TODO: Ask for number of questions…');
    console.log(
      'TODO: validate number, check number < Anzahl Fragen'
    );
    console.log('TODO: Ablauf Lernmodus');
    console.log(
      'Du hast (X von Y)|alle  Fragen richtig beantwortet!'
    );
    const choice = readlineSync.keyInSelect(
      ['Weiterlernen', 'Zurück zum Hauptmenü'],
      'Willst Du weiterlernen?',
      { cancel: false }
    );                
    if (choice === 1) {
      return;
    } else {
      console.clear();
      console.log('OK, nächste Runde!');
    }
  }
}
*/









  
  
