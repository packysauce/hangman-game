var word = 'ducky';
var dashes = []
var alreadyGuessed = []
var wordArray = word.split("")


for (var i = 0; i < word.length; i++) {
    dashes.push('_')
}



var currentResultEl = document.getElementById('current-result');
var guessesEl = document.getElementById('guessed');


currentResultEl.innerText = dashes.join(' ');


document.onkeyup = function(event) {
    var key = event.key

    // console.log(key)
   
   
    alreadyGuessed.push(key);
    guessesEl.innerText = alreadyGuessed.join('  ')

    for (var j = 0; j < wordArray.length; j++){
        var letters = wordArray[j]


        if (letters === key){

            console.log ("this is a good guess")
            
        } else { console.log ("this is not correct")}
        
    }



}