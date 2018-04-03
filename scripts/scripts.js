const library = require("./mini-library.js");


var commandArgs = process.argv;
var otherArgs = [];

commandArgs.shift();
commandArgs.shift();

for (var i = 0; i < commandArgs.length; i++) {
    otherArgs.push(parseInt(commandArgs[i]));
}

console.log(otherArgs);

//console.log( library.rgb() );

//console.log( library.date() );

//console.log( library.wink("Hey sexy") );

//console.log( library.numbre() );

console.log( "The sum 400 and 20 is " + library.add(400,20) + "." );

console.log( "The Mean is: " + "\"" + library.mean(otherArgs) + "\"." );

console.log( "The Median is: " + "\"" + library.median(otherArgs) + "\"." );

console.log( "The Mode is: " + "\"" + "Way too hard. Come back later, bubs.\"");
