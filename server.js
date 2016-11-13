var words = {
  "rainbow": 5,
  "unicorn": 3,
  "doom": -3
};

console.log("server is starting");

var express = require('express');

var app = express();

var server = app.listen(3000, listening);

app.use(express.static("website"));

function listening() {
  console.log("listening. . . ");
}

app.get('/flower', sendFlower);

function sendFlower(request, response) {

  response.send("I love flowers too!");
}

app.get('/searchFlower/:flower/:num?', searchFlower);

function searchFlower(request, response) {
  var data = request.params;
  var num = data.num;
  var reply = "";
  for(var i =0;i<num;i++) {
    reply += "I love " + data.flower + " too! ";
  }
  response.send(reply);
}

app.get('/all', sendAll);

function sendAll(request, response) {
  response.send(words);
}

app.get('/add/:word/:score?', addWord);

function addWord(request, response) {
  var data = request.params;
  var word = data.word;
  var score = Number(data.score);
  words[word] = score;

  var reply = {
    msg: "Thank you for your word"
  }
  response.send(reply);
}

app.get('/search/:word/', searchWord);

function searchWord(request, response) {
  var word = request.params.word;
  var reply;
  if(words[word]) {
    reply = {
      status: "Found",
      word: word,
      score: words[word]
    }
  } else {
    reply = {
      status: "Not found",
      word: word
    }
  }
  response.send(reply);
}
