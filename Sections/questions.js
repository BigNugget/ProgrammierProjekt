const readlineSync = require("readline-sync");
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
  console.log(' Zu welchem fach möchtest du deine Fragen hinzufügen?')
  const options  = ['Geographie', 'Mathematik', 'Geschichte', ' Programm beenden'];
	const choice = readlineSync.keyInSelect(options,'Wähle ein Fach aus ');
  
  courses(options[choice]);
}

 function courses(choice){
  switch (choice) {
    case "Geographie":
        let a1= prompt (" Tippe hier deine Frage zum fach Geographie ein  ")
        let alteGeographieDaten = JSON.parse(localStorage.getItem('database1'));
				let neueFrage1 =a1 ;
				alteGeographieDaten.push(neueFrage1);
				localStorage.setItem(JSON.stringify(alteGeographieDaten));
      //Json.parse(alteGographiedatw)
      //JSON.parse(JSON.stringify(alteGeographieDaten))
      console.log(alteGeographieDaten)
      break;
    case "Mathematik":
      let a2 = prompt (" Tippe hier deine Frage zum fach Mathematik ein  ")
        let alteMatheDaten = JSON.parse(localStorage.getItem('database2'));
			let neueFrage2 = a2;
			alteGeographieDaten.push(neueFrage2);
				localStorage.setItem(JSON.stringify(alteMatheDaten));
		break;
		case "Geschichte":
      let a3= prompt (" Tippe hier deine Frage zum Fach Geschichte ein  ")
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
  


exports.questions = questions; 
exports.courses=courses;