//console.log("Hello World!");
//console.log(2 + 2);
//node will execute JS code;

var fileSystem = require('fs');
var https = require('https');

fileSystem.writeFile(__dirname + "/index.html", "<h1>HTML is Great</h1>", function(error){
    if(error) {
        return console.log(error);
    } else {
        return console.log("Congrats");
    }
});

var myPhotoLocation = 'https://raw.githubusercontent.com/LearnWebCode/welcome-to-git/master/images/dog.jpg';

https.get(myPhotoLocation, function(response) {
 response.pipe(fileSystem.createWriteStream(__dirname + "/mydog.jpeg"));
});