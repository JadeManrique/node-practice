const fs = require('fs');


fs.readFile('database', function(err, buf) {
  var tempText = (buf.toString());
  var data = tempText;

    fs.writeFile('database', data, function(err, data) {
     if (err) console.log(err);
        console.log("Successfully Written to File");
    });

});

var text = fs.readFileSync('database').toString('utf8');
