let testvar1 = 0;
let testvar2 = 0;
document.querySelector("1").addEventListener("click", event => {
  if (testvar1 == 0) {
    event.target.innerText = "test success";
    testvar1 = 1;
  } else {
    event.target.innerText = "Click Here";
    testvar1 = 0;
  }
});

document.querySelector("2").addEventListener("click", event => {
  if (testvar2 == 0) {
    event.target.innerText = "test success";
    testvar2 = 1;
  } else {
    event.target.innerText = "Click Here";
    testvar2 = 0;
  }
});
