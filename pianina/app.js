function kuyla(val) {
  document.querySelector(`.${val}`).classList.add("pressed");
  setTimeout(function () {
    document.querySelector(`.${val}`).classList.remove("pressed");
  }, 50);
  switch (val) {
    case "q":
      let q = new Audio("ee/Q.mp3");
      q.play();
      break;

    case "w":
      let w = new Audio("ee/W.mp3");
      w.play();
      break;

    case "e":
      let e = new Audio("ee/E.mp3");
      e.play();
      break;

    case "r":
      let r = new Audio("ee/R.mp3");
      r.play();
      break;

    case "t":
      let t = new Audio("ee/T.mp3");
      t.play();
      break;
    case "y":
      let y = new Audio("ee/Y.mp3");
      y.play();
      break;

    case "u":
      let u = new Audio("ee/U.mp3");
      u.play();
      break;

    case "i":
      let i = new Audio("ee/I.mp3");
      i.play();
      break;

    case "o":
      let o = new Audio("ee/O.mp3");
      o.play();
      break;

    case "p":
      let p = new Audio("ee/P.mp3");
      p.play();
      break;
  }
}

document.addEventListener("keydown", function (e) {
  let harf = e.key.toLocaleLowerCase();
  if (
    harf == "q" ||
    harf == "w" ||
    harf == "e" ||
    harf == "r" ||
    harf== "t" ||
    harf == "y" ||
    harf == "u" ||
    harf == "i" ||
    harf == "o" ||
    harf == "p"
  ) {
    kuyla(harf);
  }
});
