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
var splitWord = selectedWord.split("");


for (var i = 0; i < splitWord.length; i++) {
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


    for (var j = 0; j < splitWord.length; j++){
        var letter = splitWord[j];


        if (letter === key){
            
                console.log("got this far")
            
            

            
        } else { 
            console.log ("this is not correct")}
     
            


    }


}
