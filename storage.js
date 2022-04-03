const readlineSync = require("readline-sync")
// Konstruktur 
class mathe1 {
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
  }
};
function database() {
  let questions2 = new mathe1(Was ist die erste  Ableitung der funktion f(x) = 10 * e ^ x ^ 4, 10 * 4x ^ 3 * e ^ x ^ 4)
  let question3 = new mathe1(Schreibe den Audruck 1 / x um, x ^ -1)
  let question4 = new mathe1(Was ist die erste Ableitung von ln(x ^ 5 - 1, 5x ^ 4 / x ^ 5 - 1))
  const mathearray = [questions1, questions2, questions3, question4];
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
exports.database = database;