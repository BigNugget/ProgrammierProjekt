const readlineSync = require("readline-sync");
/*

//Falls ihr ne Frage hinzufügen wollt:
BsP: Mathe
let alteMatheDaten = JSON.parse(localStorage.getItem('Mathe'));
let neueFrage = {question: "Kam zuerst das Ei oder das Huhn", answer: "Atome"};
alteMatheDaten.push(neueFrage);
localStorage.setItem(JSON.stringify(alteMatheDaten));
*/

function questions() {
  console.log(' Zu welchem fach möchtest du deine Fragen hinzufügen?')
  const options  = ['Geographie', 'Mathematik', 'Geschichte', ' Programm beenden'];
	const choice = readlineSync.keyInSelect(options,'Wähle ein Fach aus ');
  
  courses(options[choice]);
}

function courses(choice){
  switch (choice) {
    case "Geographie":
        let qg= prompt (" Tippe hier deine Frage zum fach Geographie ein  ")
        let alteGeographieDaten = JSON.parse(localStorage.getItem('Geographie'));
				let neueFrage1 = qg;
				alteGeographieDaten.push(neueFrage1);
				localStorage.setItem(JSON.stringify(alteGeographieDaten));
      break;
    case "Mathematik":
      let qm= prompt (" Tippe hier deine Frage zum fach Mathematik ein  ")
        let alteMatheDaten = JSON.parse(localStorage.getItem('Mathe'));
			let neueFrage2 = qm;
			alteGeographieDaten.push(neueFrage2);
				localStorage.setItem(JSON.stringify(alteMatheDaten));
		break;
		case "Geschichte":
      let g2= prompt (" Tippe hier deine Frage zum fach Mathematik ein  ")
        let alteGeschichteDaten = JSON.parse(localStorage.getItem('Geschichte'));
let neueFrage3= qg;
alteGeographieDaten.push(neueFrage3);
localStorage.setItem(JSON.stringify(alteGeschichteDaten));
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
  }
}

exports.questions = questions; 
exports.courses=courses;