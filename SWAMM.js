let sportsClicked = false;
let worldClicked = false;
let anythingClicked = false;
let musicClicked = false;
let moviesClicked = false;
let answered = 0;
let answeredCorrectly = 0;
let answerArray = [0, 0, 0, 0, 0];

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const d = new Date();
console.log(d.getDate());
// 5 * (d.getDate() - 18) + x
let sportsIndex = 5 * (d.getDate() - 1) + 0;
let worldIndex = 5 * (d.getDate() - 1) + 1;
let anythingIndex = 5 * (d.getDate() - 1) + 2;
let musicIndex = 5 * (d.getDate() - 1) + 3;
let moviesIndex = 5 * (d.getDate() - 1) + 4;

let url = "https://raw.githubusercontent.com/swammtrivia/swammtrivia.github.io/main/" + month[d.getMonth()] + "Questions.json";

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
    if(sports.toLowerCase().trim() === obj[sportsIndex]['Answer'].toLowerCase()) {
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
    document.getElementById('sports_correct').innerHTML = obj[sportsIndex]['Answer'];
  }
  else{
    return;
  }
}

function worldAnswer() {
  if(!worldClicked) {
    answered += 1;
    let world = document.getElementById("World_Answer").value;
    if(world.toLowerCase().trim() === obj[worldIndex]['Answer'].toLowerCase()) {
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
    document.getElementById('world_correct').innerHTML = obj[worldIndex]['Answer'];
  }
  else{
    return;
  }
}

function anythingAnswer() {
  if(!anythingClicked) {
    answered += 1;
    let anything = document.getElementById("Anything_Answer").value;
    if(anything.toLowerCase().trim() === obj[anythingIndex]['Answer'].toLowerCase()) {
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
    document.getElementById('anything_correct').innerHTML = obj[anythingIndex]['Answer'];
  }
  else {
    return;
  }
}

function musicAnswer() {
  if(!musicClicked) {
    answered += 1;
    let music = document.getElementById("Music_Answer").value;
    if(music.toLowerCase().trim() === obj[musicIndex]['Answer'].toLowerCase()) {
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
    document.getElementById('music_correct').innerHTML = obj[musicIndex]['Answer'];
  }
  else{
    return;
  }
}

function moviesAnswer() {
  if(!moviesClicked) {
    answered += 1;
    let movie = document.getElementById("Movies_Answer").value;
    if(movie.toLowerCase().trim() === obj[moviesIndex]['Answer'].toLowerCase()) {
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
    document.getElementById('movies_correct').innerHTML = obj[moviesIndex]['Answer'];
  }
  else{
    return;
  }
}

function popup() {
  // let hrefText = document.href('textMessage').innerHTML;
  if(answered == 5){
    console.log("here");
    document.getElementById('textMessage').href = "sms:+&body=My%20S.W.A.M.M.%20score%20today%20was%20" + answeredCorrectly + "/" + answered + textMessageDecoder() + "%0Acheck%20us%20out%20at%20swammtrivia.github.io";
    // green check is %E2%9C%85%20, red x is %E2%9D%8C%20
  }
  else {
    document.getElementById('textMessage').href = "sms:+&body=I%20didn%27t%20finish%20S.W.A.M.M.%20today";
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
