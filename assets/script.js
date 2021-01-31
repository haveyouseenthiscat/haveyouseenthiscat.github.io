function setCookie(cname, cvalue) {
  document.cookie = cname + "=" + cvalue;
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
function checkVisited(cname, char, chartext) {
  var cooky = getCookie(cname);
  if (cooky != "") {
    show(char, chartext);
  } else {
    alert("Nothing to see here...yet?");
  }
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
function switchImage(img1, img2) { 
  var x = document.getElementById(img1);
  x.style.display = "none";
  var y = document.getElementById(img2);
  y.style.display = "block";
}
function clickA1() {
  show('bandw','bandwtext');}
function clickA2() {
//  show('vero','verotext');} //local testing
  checkVisited('pawcahontas','vero','verotext');}
function clickA3() {
//  show('solve','namecheck');}
  checkVisited('holmeows','solve','namecheck');}
function clickB1() {
  show('hiss','hisstext');}
function clickB2() {
  setCookie("pawcahontas", "true");
  show('pawca','pawcatext');}
function clickB3() {
  show('frida','fridatext');}
function clickC1() {
//  show('nyancy','nyancytext');} //local testing
  checkVisited('purrot','nyancy','nyancytext');}
function clickC2() {
  setCookie("purrot", "true");
  show('purrot','purrottext');}
function clickC3() {
  setCookie("holmeows", "true");
  show('holm','holmtext');}
function checkNames() {
  var x = document.forms["thename"]["fname"].value;
  var y = document.forms["thename"]["sname"].value;
  var z = document.forms["thename"]["tname"].value;
  if (x == "Mango" && y == "Mundostina" && z == "Effanineffable") {
    hide('namecheck','solve');
    show('scratch','scratchtext');
  } else {
    show('namecheck','failtext');
  }
}
function checkPW() {
  var x = document.forms["laptop"]["pw"].value;
  if (x.toUpperCase() == "MEOW" ) {
    hide('password','hiss');
    show('ineffable','inefftext');
  } else {
    show('password','failpw');
  }
}
