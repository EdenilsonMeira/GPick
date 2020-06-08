// -- Declarations --
var mainImg = document.querySelectorAll("img")[0];
var firstImg = "images/closed.png";
var blackSpotImg = document.getElementById('blackSpot-img');
var rndNum = 0;
var rndCord = 0;
var folderLoc = "";
var x;
var scoreCount=1;
var counter = 1;
var apChkBx = document.getElementById('AutoPlay_chkbox');

// -- Button Play --
function actionPlay(){
  rndNum = Math.floor(Math.random()*12)+1;
  rndCord = Math.floor(Math.random()*6)+1;
  x = document.getElementById(rndNum).value;
  switch(rndCord)
  {
    case 1:
    folderLoc = "A";
    break;
    case 2:
    folderLoc = "B";
    break;
    case 3:
    folderLoc = "D";
    break;
    case 4:
    folderLoc = "G";
    break;
    case 5:
    folderLoc = "E";
    break;
    case 6:
    folderLoc = "E_sm";
    break;
  }
  mainImg.setAttribute("src","images/"+folderLoc+"/"+rndNum+".png");
  document.getElementById("feature-title-PC").innerText = "Play count: "+counter++;
}

// -- Reset Play --

// reset counter
function resetPlay(){
  document.getElementById("feature-title-PC").innerText = "Play Counter";
  mainImg.setAttribute("src",firstImg);
  counter = 1;
}

// reset scored
function resetScore(){
  document.getElementById("feature-title-SC").innerText = "Score";
  mainImg.setAttribute("src",firstImg);
  scoreCount = 1;
}

//reset Game
function resetGame(){
  document.getElementById("feature-title-PC").innerText = "Play Counter";
  document.getElementById("feature-title-SC").innerText = "Score";
  mainImg.setAttribute("src",firstImg);
  counter = 1;
  scoreCount = 1;
}

// -- Checkboxes --

// cheatSheet
function cheatSheetBox(){
  if(event.target.checked){
    mainImg.setAttribute("src","images/cheatSheet.png");
  }else{
    mainImg.setAttribute("src",firstImg);
  }
}

// open openCords
function openCordsBox(){
  if(event.target.checked){
  blackSpotImg.style.visibility = "visible";
  }else{
    blackSpotImg.style.visibility = "hidden";
  }
}

// -- Radio Buttons --

function checkResults(){
  if(document.getElementById('1').checked){
     if(x ==='A'){
      document.getElementById("feature-title-SC").innerHTML = "Score: "+scoreCount++;
      alert("Good Job - Your Score goes up!");
    }else{
     alert(document.getElementById(rndNum).value+", please try again!");
   }
  }
  else if(document.getElementById('2').checked){
      if(x ==='A#'){
        document.getElementById("feature-title-SC").innerHTML = "Score: "+scoreCount++;
        alert("Good Job - Your Score goes up!");
      }else{
        alert(document.getElementById(rndNum).value+", please try again!");
      }
  }
  else if(document.getElementById('3').checked){
    if(x ==='B'){
    document.getElementById("feature-title-SC").innerHTML = "Score: "+scoreCount++;
    alert("Good Job - Your Score goes up!");
  }else{
    alert(document.getElementById(rndNum).value+", please try again!");
  }
  }
  else if(document.getElementById('4').checked){
    if(x ==='C'){
  document.getElementById("feature-title-SC").innerHTML = "Score: "+scoreCount++;
    alert("Good Job - Your Score goes up!");
  }else{
    alert(document.getElementById(rndNum).value+", please try again!");
  }
  }
  else if(document.getElementById('5').checked){
    if(x ==='C#'){
    document.getElementById("feature-title-SC").innerHTML = "Score: "+scoreCount++;
    alert("Good Job - Your Score goes up!");
  }else{
    alert(document.getElementById(rndNum).value+", please try again!");
  }
  }
  else if(document.getElementById('6').checked){
    if(x ==='D'){
    document.getElementById("feature-title-SC").innerHTML = "Score: "+scoreCount++;
    alert("Good Job - Your Score goes up!");
  }else{
    alert(document.getElementById(rndNum).value+", please try again!");
  }
  }
  else if(document.getElementById('7').checked){
    if(x ==='D#'){
    document.getElementById("feature-title-SC").innerHTML = "Score: "+scoreCount++;
    alert("Good Job - Your Score goes up!");
  }else{
    alert(document.getElementById(rndNum).value+", please try again!");
  }
  }
  else if(document.getElementById('8').checked){
    if(x ==='E'){
    document.getElementById("feature-title-SC").innerHTML = "Score: "+scoreCount++;
    alert("Good Job - Your Score goes up!");
  }else{
    alert(document.getElementById(rndNum).value+", please try again!");
  }
  }
  else if(document.getElementById('9').checked){
    if(x ==='F'){
    document.getElementById("feature-title-SC").innerHTML = "Score: "+scoreCount++;
    alert("Good Job - Your Score goes up!");
  }else{
    alert(document.getElementById(rndNum).value+", please try again!");
  }
  }
  else if(document.getElementById('10').checked){
    if(x ==='F#'){
    document.getElementById("feature-title-SC").innerHTML = "Score: "+scoreCount++;
    alert("Good Job - Your Score goes up!");
  }else{
    alert(document.getElementById(rndNum).value+", please try again!");
  }
  }
  else if(document.getElementById('11').checked){
    if(x ==='G'){
    document.getElementById("feature-title-SC").innerHTML = "Score: "+scoreCount++;
    alert("Good Job - Your Score goes up!");
  }else{
    alert(document.getElementById(rndNum).value+", please try again!");
  }
  }
  else if(document.getElementById('12').checked){
    if(x ==='G#'){
    document.getElementById("feature-title-SC").innerHTML = "Score: "+scoreCount++;
    alert("Good Job - Your Score goes up!");
  }else{
    alert(document.getElementById(rndNum).value+", please try again!");
  }
  }
// sets autoplay if checkbox is checked.
  if(apChkBx.checked){
    actionPlay();
  }

}
