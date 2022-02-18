let sportsClicked = false;
let worldClicked = false;
let anythingClicked = false;
let musicClicked = false;
let moviesClicked = false;
let answered = 0;
let answeredCorrectly = 0;
let answerArray = [0, 0, 0, 0, 0];

const d = new Date();
let sportsIndex = 5;
let worldIndex = 6;
let anythingIndex = 7;
let musicIndex = 8;
let moviesIndex = 9;

let url = "https://raw.githubusercontent.com/swammtrivia/swammtrivia.github.io/main/FebruaryQuestions.json";

// Load JSON text from server hosted file and return JSON parsed object
function loadJSON(filePath) {
  // Load json file;
  var json = loadTextFileAjaxSync(filePath, "application/json");
  // Parse json
  return JSON.parse(json);
}

// Load text with Ajax synchronously: takes path to file and optional MIME type
function loadTextFileAjaxSync(filePath, mimeType)
{
  var xmlhttp=new XMLHttpRequest();
  xmlhttp.open("GET",filePath,false);
  if (mimeType != null) {
    if (xmlhttp.overrideMimeType) {
      xmlhttp.overrideMimeType(mimeType);
    }
  }
  xmlhttp.send();
  if (xmlhttp.status==200 && xmlhttp.readyState == 4 )
  {
    return xmlhttp.responseText;
  }
  else {
    // TODO Throw exception
    return null;
  }
}

var obj = loadJSON(url);

window.onload = function ()  {
  document.getElementById("Sports").innerHTML = "<span class=\"first-letter\">S</span>ports &emsp;" + obj[sportsIndex]['Question'];
  document.getElementById("World").innerHTML = "<span class=\"first-letter\">W</span>orld &emsp;" + obj[worldIndex]['Question'];
  document.getElementById("Anything").innerHTML = "<span class=\"first-letter\">A</span>nything &emsp;" + obj[anythingIndex]['Question'];
  document.getElementById("Music").innerHTML = "<span class=\"first-letter\">M</span>usic &emsp;" + obj[musicIndex]['Question'];
  document.getElementById("Movies").innerHTML = "<span class=\"first-letter\">M</span>ovies &emsp;" + obj[moviesIndex]['Question'];
}





function sportsAnswer() {
  if(!sportsClicked) {
    answered += 1;
    let sports = document.getElementById("Sports_Answer").value;
    if(sports.toLowerCase() === obj[sportsIndex]['Answer'].toLowerCase()) {
      // document.getElementById("Sports_Button").style.background = 'Green';
      document.getElementById("Sports_Button").style.background = 'green';
      document.getElementById("Sports_Answer").style.background = 'green';
      answeredCorrectly += 1;
      answerArray[0] = 1;
    }
    else {
      document.getElementById("Sports_Button").style.background = 'Red';
      document.getElementById("Sports_Answer").style.background = 'Red';
    }
    document.getElementById("Sports_Answer").readOnly = true;
    sportsClicked = true;
  }
  else{
    return;
  }
}

function worldAnswer() {
  if(!worldClicked) {
    answered += 1;
    let world = document.getElementById("World_Answer").value;
    if(world.toLowerCase() === obj[worldIndex]['Answer'].toLowerCase()) {
      document.getElementById("World_Button").style.background = 'green';
      document.getElementById("World_Answer").style.background = 'green';
      answeredCorrectly += 1;
      answerArray[1] = 1;
    }
    else {
      document.getElementById("World_Button").style.background = 'Red';
      document.getElementById("World_Answer").style.background = 'Red';
    }
    document.getElementById("World_Answer").readOnly = true;
    worldClicked = true;
  }
  else{
    return;
  }
}

function anythingAnswer() {
  if(!anythingClicked) {
    answered += 1;
    let anything = document.getElementById("Anything_Answer").value;
    if(anything.toLowerCase() === obj[anythingIndex]['Answer'].toLowerCase()) {
      document.getElementById("Anything_Button").style.background = 'green';
      document.getElementById("Anything_Answer").style.background = 'green';
      answeredCorrectly += 1;
      answerArray[2] = 1;
    }
    else {
      document.getElementById("Anything_Button").style.background = 'Red';
      document.getElementById("Anything_Answer").style.background = 'Red';
    }
    document.getElementById("Anything_Answer").readOnly = true;
    anythingClicked = true;
  }
  else {
    return;
  }
}

function musicAnswer() {
  if(!musicClicked) {
    answered += 1;
    let music = document.getElementById("Music_Answer").value;
    if(music.toLowerCase() === obj[musicIndex]['Answer'].toLowerCase()) {
      document.getElementById("Music_Button").style.background = 'green';
      document.getElementById("Music_Answer").style.background = 'green';
      answeredCorrectly += 1;
      answerArray[3] = 1;
    }
    else {
      document.getElementById("Music_Button").style.background = 'Red';
      document.getElementById("Music_Answer").style.background = 'Red';
    }
    document.getElementById("Music_Answer").readOnly = true;
    musicClicked = true;
  }
  else{
    return;
  }
}

function moviesAnswer() {
  if(!moviesClicked) {
    answered += 1;
    let movie = document.getElementById("Movies_Answer").value;
    if(movie.toLowerCase() === obj[moviesIndex]['Answer'].toLowerCase()) {
      document.getElementById("Movies_Button").style.background = 'green';
      document.getElementById("Movies_Answer").style.background = 'green';
      answeredCorrectly += 1;
      answerArray[4] = 1;
    }
    else {
      document.getElementById("Movies_Button").style.background = 'Red';
      document.getElementById("Movies_Answer").style.background = 'Red';
    }
    document.getElementById("Movies_Answer").readOnly = true;
    moviesClicked = true;
  }
  else{
    return;
  }
}

function popup() {
  if(answered == 5){
    document.getElementById('sports_correct').innerHTML = obj[sportsIndex]['Answer'];
    document.getElementById('world_correct').innerHTML = obj[worldIndex]['Answer'];
    document.getElementById('anything_correct').innerHTML = obj[anythingIndex]['Answer'];
    document.getElementById('music_correct').innerHTML = obj[musicIndex]['Answer'];
    document.getElementById('movies_correct').innerHTML = obj[moviesIndex]['Answer'];
    let textArea = document.getElementById("popup_body");
    textArea.innerHTML = "You got a " + answeredCorrectly + "/" + answered + "! Share with your friends below";
    document.getElementById("textMessage").href = "sms:+&body=My%20S.W.A.M.M.%20score%20today%20was%20" + answeredCorrectly + "/" + answered + textMessageDecoder();
    // green check is %E2%9C%85%20, red x is %E2%9D%8C%20
  }
  else {
    let textArea = document.getElementById("popup_body");
    textArea.innerHTML = "You didn't finish the questions, go back and take some guesses!";
  }
}

function textMessageDecoder() {
  let message = "%20";
  for (var i = 0; i < 5; i++) {
    if(answerArray[i] == 1) {
      message += "%E2%9C%85%20";
    }
    else {
      message += "%E2%9D%8C%20";
    }
  }
  return message;
}
