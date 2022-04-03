const readlineSync = require('readline-sync');
const pc = require('picocolors');

function geschichtsAufgaben() {
console.log(`${pc.blue('Menu>Lernen>Geschichte \n\n')}`);
console.log( 'Es gibt 15 Fragen zum Fach Geschichte. Die Fragen werden zufällig ausgewählt.'+'\n\n');
RangeSlider();
}
    //const number1 = prompt('Wie viele Fragen möchtest du beantworten? Gib eine Zahl       zwischen 1 und 27 an');
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
exports.geschichtsAufgaben = geschichtsAufgaben;
exports.RangeSlider = RangeSlider;