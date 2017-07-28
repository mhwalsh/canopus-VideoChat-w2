console.log('is this working?');

// global vars
var someName = 'Millie'; //global scope

// function declarations

// sayHello logs "HEY!"
function sayHello() {
  console.log('HEY!');
}

//sayWhatImTold takes aWord and logs it
// returns aWord with an !
function sayWhatImTold(aWord) {
  //aWord is locally scoped to sayWhatImTold
  console.log('I was told to say' + aWord); //side effect

  return aWord + '!';
}

// a word is not global, so cause an error here
// console.log('this will not work', aWord);

// call sayHello
sayHello();

// call sayWhatImTold and capture the return
var anExcitedWord = sayWhatImTold('eric banana');
// log the return of the function stored in the variable anExcitedWord
console.log(anExcitedWord);
