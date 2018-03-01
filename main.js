var words = [
    "duck",
    "fish",
    "cat",
    "dog",
    "horse",
    "donkey",
    "pig",
    "cow",
    "goat",
    "chicken"
]


var selectedWord = words[Math.floor(Math.random()*words.length)];
var dashes = [];
var alreadyGuessed = [];
var letterArray = selectedWord.split("");


for (var i = 0; i < letterArray.length; i++) {
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

    for (var j = 0; j < letterArray.length; j++){
        var guessLetter = letterArray[j];


        if (guessLetter === key){
            
            console.log("this is correct")
            

            
        } else { 
            console.log ("this is not correct")}
        
    }



}