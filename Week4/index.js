let prim =
  "Primus is known for their blend of funk, metal, and experimental sounds.";
let faith =
  "Faith No More melds rock, metal, and funk into a distinctive sound.";
let fish =
  "Fishbone, a ska punk and funk ensemble bursts with infectious energy.";
let testvarp = 0;
let testvarf = 0;
let testvarfi = 0;
document.querySelector(#primus).addEventListener("click", event => {
  if (testvarp == 0) {
    event.target.innerText = prim;
    testvarp = 1;
  } else {
    event.target.innerText = "Primus Click Here";
    testvarp = 0;
  }
});

document.querySelector("#fnm").addEventListener("click", event => {
  if (testvarf == 0) {
    event.target.innerText = faith;
    testvarf = 1;
  } else {
    event.target.innerText = "Faith No More Click Here";
    testvarf = 0;
  }
});
document.querySelector("#fishbone").addEventListener("click", event => {
  if (testvarfi == 0) {
    event.target.innerText = fish;
    testvarfi = 1;
  } else {
    event.target.innerText = "Fishbone Click Here";
    testvarfi = 0;
  }
});
