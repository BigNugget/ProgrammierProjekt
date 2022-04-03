const readlineSync = require('readline-sync');
const pc = require('picocolors');

function geographieAufgaben(){
  console.log(`${pc.blue('Menu>Lernen>Geographie \n\n')}`);
  console.log('Es gibt 12 Fragen zum Fach Geographie. Die Fragen werden zufällig ausgewählt.');
	// const number1 = prompt('Wie viele Fragen möchtest du beantworten? Gib eine Zahl zwischen 1 und 12 an');
RangeSlider();
}

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

exports.geographieAufgaben = geographieAufgaben;
exports.RangeSlider = RangeSlider;  