let prim =
  "Primus is known for their blend of funk, metal, and experimental sounds.";
let faith =
  "Faith No More melds rock, metal, and funk into a distinctive sound.";
let fish =
  "Fishbone, a ska punk and funk ensemble bursts with infectious energy.";

document.querySelector("#primus").addEventListener("mousedown", event => {
  event.target.innerText = prim;
});

document.querySelector("#primus").addEventListener("mouseup", event => {
  event.target.innerText = "Primus Hold Here";
});

document.querySelector("#fnm").addEventListener("mousedown", event => {
  event.target.innerText = faith;
});

document.querySelector("#fnm").addEventListener("mouseup", event => {
  event.target.innerText = "Faith No More Hold Here";
});

document.querySelector("#fishbone").addEventListener("mousedown", event => {
  event.target.innerText = fish;
});

document.querySelector("#fishbone").addEventListener("mouseup", event => {
  event.target.innerText = "Fishbone Hold Here";
});
