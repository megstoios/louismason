$(document).ready(function() {

  var lcrc = document.getElementById("lcrc")
  var lcrcpdf = document.getElementById("lcrcpdf")
  var demon = document.getElementById("demon")
  var demonpdf = document.getElementById("demonpdf")
  var ramraid = document.getElementById("ramraid")
  var ramraidpdf = document.getElementById("ramraidpdf")
  var special = document.getElementById("special")
  var specialpdf = document.getElementById("specialpdf")
  var current = document.getElementById("current")
  var contact = document.getElementById("contact")
  var email = document.getElementById("email")
  var louismason = document.getElementById("louismason")
  var horror = document.getElementById("horror")
  var horrorimg = document.getElementById("horrorimg")
  var gradshow = document.getElementById("gradshow")
  var gradshowimg = document.getElementById("gradshowimg")
  var villages = document.getElementById("villages")
  var villagesimg = document.getElementById("villagesimg")
  var future = document.getElementById("future")
  var futureimg = document.getElementById("futureimg")
  var share = document.getElementById("share")
  var shareimg = document.getElementById("shareimg")

  louismason.onclick = function() {
    current.style.display = "block";
    lcrcpdf.style.display = "none";
    demonpdf.style.display = "none";
    ramraidpdf.style.display = "none";
    specialpdf.style.display = "none";
    email.style.display = "none";
    horrorimg.style.display = "none";
    gradshowimg.style.display = "none";
    villagesimg.style.display = "none";
    futureimg.style.display = "none";
    shareimg.style.display = "none";
  }

  lcrc.onclick = function() {
      current.style.display = "none";
      lcrcpdf.style.display = "block";
      demonpdf.style.display = "none";
      ramraidpdf.style.display = "none";
      specialpdf.style.display = "none";
      email.style.display = "none";
      horrorimg.style.display = "none";
      gradshowimg.style.display = "none";
      villagesimg.style.display = "none";
      futureimg.style.display = "none";
      shareimg.style.display = "none";
    }

  demon.onclick = function() {
      current.style.display = "none";
      demonpdf.style.display = "block";
      lcrcpdf.style.display = "none";
      ramraidpdf.style.display = "none";
      specialpdf.style.display = "none";
      email.style.display = "none";
      horrorimg.style.display = "none";
      villagesimg.style.display = "none";
      futureimg.style.display = "none";
      shareimg.style.display = "none";
    }

  ramraid.onclick = function() {
      current.style.display = "none";
      ramraidpdf.style.display = "block";
      demonpdf.style.display = "none";
      lcrcpdf.style.display = "none";
      specialpdf.style.display = "none";
      email.style.display = "none";
      horrorimg.style.display = "none";
      gradshowimg.style.display = "none";
      villagesimg.style.display = "none";
      futureimg.style.display = "none";
      shareimg.style.display = "none";
    }

  contact.onclick = function() {
      email.style.display = "block";
      current.style.display = "none";
      ramraidpdf.style.display = "none";
      demonpdf.style.display = "none";
      lcrcpdf.style.display = "none";
      specialpdf.style.display = "none";
      horrorimg.style.display = "none";
      gradshowimg.style.display = "none";
      villagesimg.style.display = "none";
      futureimg.style.display = "none";
      shareimg.style.display = "none";
    }

    horror.onclick = function() {
        horrorimg.style.display = "block";
        email.style.display = "none";
        current.style.display = "none";
        ramraidpdf.style.display = "none";
        demonpdf.style.display = "none";
        lcrcpdf.style.display = "none";
        specialpdf.style.display = "none";
        gradshowimg.style.display = "none";
        villagesimg.style.display = "none";
        futureimg.style.display = "none";
        shareimg.style.display = "none";
      }

    gradshow.onclick = function() {
        gradshowimg.style.display = "block";
        email.style.display = "none";
        current.style.display = "none";
        ramraidpdf.style.display = "none";
        demonpdf.style.display = "none";
        lcrcpdf.style.display = "none";
        specialpdf.style.display = "none";
        horrorimg.style.display = "none";
        villagesimg.style.display = "none";
        futureimg.style.display = "none";
        shareimg.style.display = "none";
      }

      villages.onclick = function() {
          gradshowimg.style.display = "none";
          email.style.display = "none";
          current.style.display = "none";
          ramraidpdf.style.display = "none";
          demonpdf.style.display = "none";
          lcrcpdf.style.display = "none";
          specialpdf.style.display = "none";
          horrorimg.style.display = "none";
          villagesimg.style.display = "block";
          futureimg.style.display = "none";
          shareimg.style.display = "none";
        }

        future.onclick = function() {
            gradshowimg.style.display = "none";
            email.style.display = "none";
            current.style.display = "none";
            ramraidpdf.style.display = "none";
            demonpdf.style.display = "none";
            lcrcpdf.style.display = "none";
            specialpdf.style.display = "none";
            horrorimg.style.display = "none";
            villagesimg.style.display = "none";
            futureimg.style.display = "block";
            shareimg.style.display = "none";
          }

          share.onclick = function() {
              gradshowimg.style.display = "none";
              email.style.display = "none";
              current.style.display = "none";
              ramraidpdf.style.display = "none";
              demonpdf.style.display = "none";
              lcrcpdf.style.display = "none";
              specialpdf.style.display = "none";
              horrorimg.style.display = "none";
              villagesimg.style.display = "none";
              futureimg.style.display = "none";
              shareimg.style.display = "block";
            }

            special.onclick = function() {
                gradshowimg.style.display = "none";
                email.style.display = "none";
                current.style.display = "none";
                ramraidpdf.style.display = "none";
                demonpdf.style.display = "none";
                lcrcpdf.style.display = "none";
                specialpdf.style.display = "block";
                horrorimg.style.display = "none";
                villagesimg.style.display = "none";
                futureimg.style.display = "none";
                shareimg.style.display = "none";
              }


})
