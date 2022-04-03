const readlineSync = require("readline-sync")

// erstelle eine array für g 
class geographie1 {
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
  }
};
function database1() {
  let qg1 = new geographie1(Niederlande,Amsterdam)
  let qg2= new geographie1(Griechenland,Athen)
  let qg3 = new geograhie1(Deutschland,Berlin)
  const geographieArray= [qg1, qg2, qg3, ];
  return geographieArray;
}






// JSON ist in JavaScript enthalten 
// --> kein import oder require für JSON nötig
const jsonString1 = JSON.stringify(geographieArray);
JSON.parse(JSON.stringify(geographieArray))


console.log(jsonstring1);

// Erstellen des Arrays Matheaufgaben

// Konstruktur 
class mathe1 {
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
  }
};
function database2() {
  let qm1 = new mathe1(Was  ist die erste  Ableitung der Zahl 7,0)
  let qm2 = new mathe1(Was ist die erste Ableitung von 5x^4+6x^2+1,20x^3+12x)
  let qm3 = new mathe1(Was ist die erste  Ableitung der Zahl 10*e^x^4,10*4x^3*e^x^4)
  const matheArray = [qm1, qm2, qm3, ];
  return matheArray;
}
// JSON ist in JavaScript enthalten 
// --> kein import oder require für JSON nötig
const jsonString2 = JSON.stringify(mathearray);
JSON.parse(JSON.stringify(mathearray))


console.log(jsonstring2);
// --> ergibt das Array als JSON-String:
// [{"id":1,"name":"Alice"},{"id":2,"name":"Bob"}]



// Erstellen des Arrays Geographie

// Konstruktur 




// Erstellen des Arrays Matheaufgaben

// Konstruktur 
class geschichte1 {
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
  }
};
function database3() {
  let qh1 = new geschichte1(In welchem Jahr begann der Zweite Weltkrieg?,1939)
  let qh2 = new geschichte2(Im Zuge welcher Revolution wurde Ludwig XVI. zum Tode verurteilt und hingerichtet?,Französische Revolution)
  let qh3 = new geschichte3(Wer war der erste Bundeskanzler der Bundesrepublik Deutschland?,Konrad Adenauer)
  const geschichteArray = [qh1, qh2, qh3, ];
  return geschichteArray;
}
// JSON ist in JavaScript enthalten 
// --> kein import oder require für JSON nötig
const jsonString3 = JSON.stringify(geschichteArray);
JSON.parse(JSON.stringify(geschichteArray))


console.log(jsonstring3);
// --> ergibt das Array als JSON-String:
// [{"id":1,"name":"Alice"},{"id":2,"name":"Bob"}]



/*// Erstellen des Arrays Matheaufgaben

// Konstruktur 
class geographie1 {
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
  }
};
function database3() {
  let question1 = new geographie1(Was  ist die erste  Ableitung der Zahl 7,0)
  let question2 = new geographie11(Was ist die erste Ableitung von 5x^4+6x^2+1,20x^3+12x)
  let question3 = new geograhie11(Was ist die erste  Ableitung der Zahl 10*e^x^4,10*4x^3*e^x^4)
  const mathearray = [question1, question2, question3, ];
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
*/
exports.mathe1 = mathe1;
exports.database1 = database1;
exports.geograhie1 = geographie1;
exports.database2 = database2;
exports.geschichte1 = gesschichte1;
exports.database3 = database3;
