var words = ["duck","fish","cat","dog","horse","donkey","pig","cow","goat","chicken"
]


var selectedWord = words[Math.floor(Math.random() * words.length)];
var dashes = [];
var alreadyGuessed = [];
var splitWord = selectedWord.split('');
var currentResultEl = document.getElementById('current-result');
var guessesEl = document.getElementById('guessed');
var guessesRemainEl = document.getElementById('guess-remain');
var okLetters = 'abcdefghijklmnopqrstuvwxyz'

function classFor(letter) {
      return 'letter_' + letter;
    }

for (var i = 0; i < splitWord.length; i++) {
    var blanks = document.createElement('span');
    blanks.classList.add(classFor(splitWord[i]));
    blanks.innerText = ' _ ';
    dashes.push(blanks);
}

for (var i = 0; i < dashes.length; i++){
    currentResultEl.appendChild(dashes[i])
}

document.onkeyup = function(event) {
    var key = event.key.toLowerCase();

    console.log('keypress')

    if (okLetters.indexOf(key) === -1) {
        return;

        console.log('good key')
    }

    if (alreadyGuessed.indexOf(key) !== -1){
        return;
        console.log('already guessed')
    }

    if (alreadyGuessed.length === 5){

    }

    alreadyGuessed.push(key);
    guessesEl.innerText = alreadyGuessed.join(' ');
    
    var keyClass = classFor(key);

    for (var i = 0; i < blanks.length; i++) {
        blanks[i].innerHTML = key;
    }
            





}
