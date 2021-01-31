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
  document.cookie="pawcahontas=true";}

function clickA1() {
  alert("You clicked the window");
}
