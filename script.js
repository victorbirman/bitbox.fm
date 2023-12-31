const audioPlayer = document.createElement("audio");
let audioDiv = document.querySelector(".radio");
let dropdown = document.querySelector(".dropdown");
audioPlayer.src = "https://ipanel.instream.audio:7011/stream";
const hamburgerMenu = document.querySelector(".hamburger-menu");
function playAudio() {
  if (audioPlayer.paused) {
    let playPromise = audioPlayer.play();
    if (playPromise !== undefined) {
      playPromise
        .then(x => {
          audioDiv.innerHTML = "<b>II</b> EN VIVO";
        })
        .catch(error => {
          console.log("audio not loaded");
        });
    }
  } else {
    audioPlayer.pause();
    audioDiv.innerHTML = "&#9658; EN VIVO";
  }
}
function dropdownToggle() {
  if (dropdown.style.visibility === "hidden") {
    dropdown.style.visibility = "visible";
  } else dropdown.style.visibility = "hidden";
}

function dropdownHide() {
  dropdown.style.visibility = "hidden";
}

function toggleFullMenu() {
  if (hamburgerMenu.style.display === "block") {
    hamburgerMenu.style.display = "none";
  } else {
    hamburgerMenu.style.display = "block";
  }
}
