const audioA = new Audio("./Sound/boom.wav");
const audioS = new Audio("./Sound/clap.wav");
const audioD = new Audio("./Sound/hihat.wav");
const audioF = new Audio("./Sound/kick.wav");
const audioG = new Audio("./Sound/openhat.wav");
const audioH = new Audio("./Sound/ride.wav");
const audioJ = new Audio("./Sound/snare.wav");
const audioK = new Audio("./Sound/tick.wav");
const audioL = new Audio("./Sound/tom.wav");
const audioAAmir = new Audio("./Sound/aamir.wav");

document.addEventListener("keydown", function (e) {
  if (e.key === "a" || e.key === "A") {
    audioA.play();
    audioA.currentTime = 0;
  } else if (e.key === "s" || e.key === "S") {
    audioS.play();
    audioS.currentTime = 0;
  } else if (e.key === "d" || e.key === "D") {
    audioD.play();
    audioD.currentTime = 0;
  } else if (e.key === "f" || e.key === "F") {
    audioF.play();
    audioF.currentTime = 0;
  } else if (e.key === "g" || e.key === "G") {
    audioG.play();
    audioG.currentTime = 0;
  } else if (e.key === "h" || e.key === "H") {
    audioH.play();
    audioH.currentTime = 0;
  } else if (e.key === "j" || e.key === "J") {
    audioJ.play();
    audioJ.currentTime = 0;
  } else if (e.key === "k" || e.key === "K") {
    audioK.play();
    audioK.currentTime = 0;
  } else if (e.key === "l" || e.key === "L") {
    audioL.play();
    audioL.currentTime = 0;
  } else {
    audioAAmir.play();
    audioAAmir.currentTime = 0;
  }
});
