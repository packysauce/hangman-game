var word = 'ducky';
var dashes = []
var alreadyGuessed = []


for (var i = 0; i < word.length; i++) {
    dashes.push('_')
}

var currentResultEl = document.getElementById('current-result');
var guessesDisplayEl = document.getElementById('guessed');


currentResultEl.innerText = dashes.join(' ');


document.onkeyup = function(event) {
    var key = event.key

    // console.log(key)
   
   
    alreadyGuessed.push(key);
    guessesDisplayEl.innerText = alreadyGuessed.join('  ')

    for (var i = 0; i < word.length; i++){

        if (event.key === i)
        
    }



}