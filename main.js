var word = 'ducky';
var dashes = []
var alreadyGuessed = []


for (var i = 0; i < word.length; i++) {
    dashes.push('_')
}

var currentResultEl = document.getElementById('current-result');
var guessesDisplayEl = document.getElementById('previous-guesses');


currentResultEl.innerText = dashes.join(' ');


document.onkeyup = function (event) {
    var key = event.key
   
   
    alreadyGuessed.push(key);
    guessesDisplayEl.innertext = alreadyGuessed.join('  ')

}