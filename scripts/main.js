alert('Wstawaj piękna kobietko');

var myImage = document.getElementById("zamiana");

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/4.jpg') {
      myImage.setAttribute ('src','images/5.jpg');
    } else {
      myImage.setAttribute ('src','images/4.jpg');
    }
}
function myCOL() {
    var x =document.getElementById("myAKA");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none"
    }
    }
function myCOL2() {
    var x =document.getElementById("myAKA2");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none"
    }
    }
function myCOL3() {
    var x =document.getElementById("myAKA3");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none"
        }
    }