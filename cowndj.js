const cowsay = require("cowsay");
var oneLinerJoke = require('one-liner-joke');  
/*
The variable getRandomJoke will contain a random joke with a format:
{"body":"Artificial intelligence is no match for natural stupidity.","tags":["intelligence","stupid"]}
*/
var getRandomJoke = oneLinerJoke.getRandomJoke();
console.log(getRandomJoke);


console.log(cowsay.say({
    text : getRandomJoke.body ,
    e : "oO",
    T : "HH "
}));

// or cowsay.think()