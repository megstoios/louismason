$(document).ready(function() {

  var lcrc = document.getElementById("lcrc")
  var lcrcpdf = document.getElementById("lcrcpdf")
  var demon = document.getElementById("demon")
  var demonpdf = document.getElementById("demonpdf")
  var ramraid = document.getElementById("ramraid")
  var ramraidpdf = document.getElementById("ramraidpdf")
  var current = document.getElementById("current")
  var contact = document.getElementById("contact")
  var email = document.getElementById("email")
  var louismason = document.getElementById("louismason")
  var horror = document.getElementById("horror")
  var horrorimg = document.getElementById("horrorimg")
  var gradshow = document.getElementById("gradshow")
  var gradshowimg = document.getElementById("gradshowimg")

  louismason.onclick = function() {
    current.style.display = "block";
    lcrcpdf.style.display = "none";
    demonpdf.style.display = "none";
    ramraidpdf.style.display = "none";
    email.style.display = "none";
    horrorimg.style.display = "none";
    gradshowimg.style.display = "none";
  }

  lcrc.onclick = function() {
      current.style.display = "none";
      lcrcpdf.style.display = "block";
      demonpdf.style.display = "none";
      ramraidpdf.style.display = "none";
      email.style.display = "none";
      horrorimg.style.display = "none";
      gradshowimg.style.display = "none";
    }

  demon.onclick = function() {
      current.style.display = "none";
      demonpdf.style.display = "block";
      lcrcpdf.style.display = "none";
      ramraidpdf.style.display = "none";
      email.style.display = "none";
      horrorimg.style.display = "none";
    }

  ramraid.onclick = function() {
      current.style.display = "none";
      ramraidpdf.style.display = "block";
      demonpdf.style.display = "none";
      lcrcpdf.style.display = "none";
      email.style.display = "none";
      horrorimg.style.display = "none";
      gradshowimg.style.display = "none";
    }

  contact.onclick = function() {
      email.style.display = "block";
      current.style.display = "none";
      ramraidpdf.style.display = "none";
      demonpdf.style.display = "none";
      lcrcpdf.style.display = "none";
      horrorimg.style.display = "none";
      gradshowimg.style.display = "none";
    }

    horror.onclick = function() {
        horrorimg.style.display = "block";
        email.style.display = "none";
        current.style.display = "none";
        ramraidpdf.style.display = "none";
        demonpdf.style.display = "none";
        lcrcpdf.style.display = "none";
        gradshowimg.style.display = "none";
      }

    gradshow.onclick = function() {
        gradshowimg.style.display = "block";
        email.style.display = "none";
        current.style.display = "none";
        ramraidpdf.style.display = "none";
        demonpdf.style.display = "none";
        lcrcpdf.style.display = "none";
        horrorimg.style.display = "none";
      }


})
