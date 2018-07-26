alert('Cześć kochanie, naciśnij proszę ikonkę CSS po czym zjedź na sam dół i połóż kursor na kwadracie (będziesz wiedziała którym) :)');
alert('Aha, tylko nie ściągaj go zbyt szybko !');


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
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block"
    }
    }
function myCOL2() {
    var x =document.getElementById("myAKA2");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block"
    }
    }
function myCOL3() {
    var x =document.getElementById("myAKA3");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block"
        }
    }
function myCOL4() {
    var x
    =document.getElementById("myAKA4");
    if (x.style.display === "block") {
        x.style.display = "none";
        } else {
            x.style.display = "block"
        }
}