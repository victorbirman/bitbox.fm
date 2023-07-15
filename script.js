const audioPlayer = document.createElement("audio");
let dropdown = document.querySelector(".dropdown");
audioPlayer.src = "https://ipanel.instream.audio:7011/stream";

function playAudio() {
  if (audioPlayer.paused) {
    audioPlayer.play();
  } else {
    audioPlayer.pause();
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
