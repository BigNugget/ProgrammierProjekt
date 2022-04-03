const readlineSync = require("readline-sync");
const { database1 } = require('../storage');
/*const { mathe1,database1,geographie1,database2,geschichte3,database3 } = require("storage");
/*

//Falls ihr ne Frage hinzufügen wollt:
BsP: Mathe
let alteMatheDaten = JSON.parse(localStorage.getItem('Mathe'));
let neueFrage = {question: "Kam zuerst das Ei oder das Huhn", answer: "Atome"};
alteMatheDaten.push(neueFrage);
localStorage.setItem(JSON.stringify(alteMatheDaten));
*/

function questions() {
   console.log('Menu>Lernen>Fragen erstellen \n\n')
  console.log(' Zu welchem Fach möchtest du deine Fragen hinzufügen?')
  const options  = ['Geographie', 'Mathematik', 'Geschichte'];
	const choice = readlineSync.keyInSelect(options,'Wähle ein Fach aus ');
  
  courses(options[choice]);
}

 function courses(choice){
  switch (choice) {
    case "Geographie":
        console.log('\n');
        let a1= prompt ("Tippe hier deine Frage zum Fach Geographie ein")
        database1();
const readlineSync = require("readline-sync");
const { database1 } = require('../storage');
/*const { mathe1,database1,geographie1,database2,geschichte3,database3 } = require("storage");
/*

//Falls ihr ne Frage hinzufügen wollt:
BsP: Mathe
let alteMatheDaten = JSON.parse(localStorage.getItem('Mathe'));
let neueFrage = {question: "Kam zuerst das Ei oder das Huhn", answer: "Atome"};
alteMatheDaten.push(neueFrage);
localStorage.setItem(JSON.stringify(alteMatheDaten));
*/

function questions() {
   console.log('Menu>Lernen>Fragen erstellen \n\n')
  console.log(' Zu welchem Fach möchtest du deine Fragen hinzufügen?')
  const options  = ['Geographie', 'Mathematik', 'Geschichte'];
	const choice = readlineSync.keyInSelect(options,'Wähle ein Fach aus ');
    
  courses(options[choice]);
}
  
 function courses(choice){
  switch (choice) {
    case "Geographie":
        console.log('\n');
        let a1= prompt ("Tippe hier deine Frage zum Fach Geographie ein")
        database1();
      //Json.parse(alteGographiedatw)
      //JSON.parse(JSON.stringify(alteGeographieDaten))
      let altegDaten = JSON.parse(localStorage.getItem('database1'));
			let neueFrage1 = a1;
			alteGeographieDaten.push(neueFrage1);
				localStorage.setItem(JSON.stringify(altegDaten));
    case "Mathematik":
      console.log('\n');
      let a2 = prompt ("Tippe hier deine Frage zum Fach Mathematik ein")
        let alteMatheDaten = JSON.parse(localStorage.getItem('database2'));
			let neueFrage2 = a2;
			alteGeographieDaten.push(neueFrage2);
				localStorage.setItem(JSON.stringify(alteMatheDaten));
		break;
		case "Geschichte":
      console.log('\n');
      let a3= prompt ("Tippe hier deine Frage zum Fach Geschichte ein")
        let alteGeschichteDaten = JSON.parse(localStorage.getItem('database3'));
let neueFrage3= a3;
alteGeographieDaten.push(neueFrage3);
localStorage.setItem(JSON.stringify(alteGeschichteDaten));
    }
  }
/*
  
        
      /*matheaufgaben();
      //matheaufgaben.matheaufgaben();
      //matheaufgaben.fragenAufruf();
       //localStorage.setItem('mathe', JSON.stringify(dateaes));
      break;
    case "Geschichte":
      let Geschichte = localStorage.getItem("Geschichte");
      break;
      
            
    default:
      console.log('ungültige Eingabe!');
      break;
      */
  /* let a1= prompt ("Tippe hier deine Frage zum Fach Geographie ein")
        let alteGeographieDaten = JSON.parse(localStorage.getItem('database1'));
				let neueFrage1 =a1 ;
				alteGeographieDaten.push(neueFrage1);
				localStorage.setItem(JSON.stringify(alteGeographieDaten));*/
  
exports.a1 = a1;
exports.questions = questions; 
exports.courses=courses;
//e1();
      //Json.parse(alteGographiedatw)
      //JSON.parse(JSON.stringify(alteGeographieDaten))
      break;
    case "Mathematik":
      console.log('\n');
      let a2 = prompt ("Tippe hier deine Frage zum Fach Mathematik ein")
        let alteMatheDaten = JSON.parse(localStorage.getItem('database2'));
			let neueFrage2 = a2;
			alteGeographieDaten.push(neueFrage2);
				localStorage.setItem(JSON.stringify(alteMatheDaten));
		break;
		case "Geschichte":
      console.log('\n');
      let a3= prompt ("Tippe hier deine Frage zum Fach Geschichte ein")
        let alteGeschichteDaten = JSON.parse(localStorage.getItem('database3'));
let neueFrage3= a3;
alteGeographieDaten.push(neueFrage3);
localStorage.setItem(JSON.stringify(alteGeschichteDaten));
    }
  }
/*

      
      /*matheaufgaben();
      //matheaufgaben.matheaufgaben();
      //matheaufgaben.fragenAufruf();
       //localStorage.setItem('mathe', JSON.stringify(dateaes));
      break;
    case "Geschichte":
      let Geschichte = localStorage.getItem("Geschichte");
      break;

      
    default:
      console.log('ungültige Eingabe!');
      break;
      */
  /* let a1= prompt ("Tippe hier deine Frage zum Fach Geographie ein")
        let alteGeographieDaten = JSON.parse(localStorage.getItem('database1'));
				let neueFrage1 =a1 ;
				alteGeographieDaten.push(neueFrage1);
				localStorage.setItem(JSON.stringify(alteGeographieDaten));*/


exports.questions = questions; 
exports.courses=courses;