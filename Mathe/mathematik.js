const readlineSync = require('readline-sync');
const pc = require('picocolors');


function matheAufgaben() {
  console.log(`${pc.blue('Menu>Lernen>Mathematik \n\n')}`);
  console.log('\n\n' + 'Es gibt 27 Fragen zum Fach Mathematik. Die Fragen werden zufällig ausgewählt.'+'\n\n');
    RangeSlider();
    //finish();
  }
    //const number1 = prompt('Wie viele Fragen möchtest du beantworten? Gib eine Zahl zwischen 1 und 27 an');
  //}
  //Methode zum Aufrufen von Mathe aus DB
  /*static fragenAufruf() {
    console.log('Es werden alle Fragen der Kategorie Mathe angezeigt')
    const getQuestion = localStorage.getItem("Mathe");
    const parseQuestion = JSON.parse(getQuestion);
    console.log(getQuestion)
*/
//function finish() {
//}
function RangeSlider(){
  var readlineSync = require('readline-sync'),
  MAX = 30, MIN = 0, value = 0, key;
console.log(
  '\n\n' + 'Wie viele Fragen möchten Sie beantworten?'+
  '\n\n' + (new Array(20)).join(' ') +
  '[A] <- -> [D]  Bestätige: [SPACE]\n');
while (true) {
  console.log('\x1B[1A\x1B[K|' +
    (new Array(value + 1)).join('-') + 'O' +
    (new Array(MAX - value + 1)).join('-') + '| ' + value);
  key = readlineSync.keyIn('',
    {hideEchoBack: true, mask: '', limit: 'ad '});
  if (key === 'a') { if (value > MIN) { value--; } }
  else if (key === 'd') { if (value < MAX) { value++; } }
  else { break; }
}
console.log(`\nA User möchte : ${value} Fragen beantworten. `);
  return value
}
// Nutzer hat seine Anzahl an Fragen ausgewählt
 /* if (key==='z' oder key==='x')
  console.log( " Drücke f wenn du deine Anzahl an Fragen getroffen hast ")
    if (key==='f') {
   console.log( ' Du hast '+value+ 'Fragen ausgewählt' )
      break;
      
   }
  
  }





  
  /*var readlineSync = require('readline-sync');
 
  MAX = 30, MIN = 0, value = 15, key;
  console.log(
  '\n\n' + 'Wie viele Fragen möchten Sie beantworten?'+
  '\n\n' + (new Array(20)).join(' ') +
  '[A] <- -> [D]  FIX: [SPACE]\n');
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
  return value;
  }


/*function SicherheitsAbfrage(){
    var readlineSync = require('readline-sync');
    let input1 = readlineSync.keyInYN(`Bist dur sicher, dass du ${value} Fragen beantworten möchtest?`); 
    if(input1===true){
      const affe = require("lodash");
let array1 = ["banane","keine ahnung","3",4,5,6,"asfdge"]
let anzahl = 5
let randomArray = affe.sampleSize(array1, anzahl)
console.log(randomArray)
      for(let i = 0; i <= value; i++) {
      localStorage.getItem('Mathe')
}   
console.log(anzahl_von_fragen:antworten);
    //}
    else {
        console.log('Du bist noch nicht fertig')
      }
}
*/

  

  



  

//RangeSlider();

//exports.SicherheitsAbfrage = SicherheitsAbfrage;
exports.matheAufgaben = matheAufgaben;
exports.RangeSlider = RangeSlider;
//exports.finish=finish;

//exports.RangeSlider = RangeSlider;



/*const readlineSync = require("readline-sync")
class mathe1 {
    constructor (question, answer) {
      this.question = question;
      this.answer = answer;
    }
  };
function database (){
 let question1= new mathe1(Berechen die Extrempunkte der Funktion  f(1/3x^3-9x,t(3/-18)))
let questions2 = new mathe1(Was ist die erste  Ableitung der funktion f(x)= 10*e^x^4, 10*4x^3*e^x^4)
  let question2 = new mathe1(Schreibe den Audruck 1/x um, x^-1)
  let question3= new mathe1 (Was ist die erste Ableitung von ln ( x^5 -1, 5x^4/x^5-1)
    const mathearray = [questions1,questions2,questions3,];
  return mathearray;
  }

// JSON ist in JavaScript enthalten
// --> kein import oder require für JSON nötig
const jsonString = JSON.stringify(mathearray);
JSON.parse(JSON.stringify(mathearray))


console.log(jsonstring);
// --> ergibt das Array als JSON-String:
// [{"id":1,"name":"Alice"},{"id":2,"name":"Bob"}]


  //oder
  /*let matheArray1 = []
  matheArray1.push(card1)
  matheArray1.push(card2)
  matheArray1.push(card3)
  matheArray1.push(card4)
*/
//}


/* class mathe {
   constructor (question, answer) {
     this.question = question;
     this.answer = answer;
   }
 };

 let mathe1 = new card(, antwort)
 let mathe2 = new card(frage, antwort)
 let mathe3 = new card(frage, antwort)
 let mathe4 = new card(frage, antwort)
 let matheArray = [card1,card2,card3,card4]
 //oder
 let matheArray1 = []
 matheArray1.push(card1)
 matheArray1.push(card2)
 matheArray1.push(card3)
 matheArray1.push(card4)

}



console.log ( mathearray)

exports.mathe1=mathe1;
exports.database=database;/
*/
