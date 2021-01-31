function setCookie2(cname, cvalue) {
  document.cookie = cname + "=" + cvalue;
}
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function checkPawca() {
  var pawca = getCookie("pawcahontas");
  if (pawca != "") {
    alert("Veronica Maus");
  } else {
    alert("The lamp is very dusty, but nothing interesting here just now.");
  }
}
function setPawca() {
  document.cookie="pawcahontas=true";
  show
}
function show(elem1, elem2) {
  var x = document.getElementById(elem1);
  x.style.display = "block";
  var y = document.getElementById(elem2);
  y.style.display = "block";
}
function hide(elem1, elem2) {  
  var x = document.getElementById(elem1);
  x.style.display = "none";
  var y = document.getElementById(elem2);
  y.style.display = "none";

}
function clickA1() {
  show('bandw','bandwtext');}
function clickA2() {
  show('vero','verotext');}
function clickA3() {}
function clickB1() {
  show('hiss','hisstext');}
function clickB2() {
  show('pawca','pawcatext');}
function clickB3() {
  show('frida','fridatext');}
function clickC1() {
  show('nyancy','nyancytext');}
function clickC2() {
  show('purrot','purrottext');}
function clickC3() {
  show('holm','holmtext');}
