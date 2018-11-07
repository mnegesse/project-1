//select the valeus element by the class name
// let value = document.getElementsByClassName('anmi1');
// tell the computer what to do
console.log("check")
function changeanimation() {
  let text = document.querySelector('#val')
  console.log(window.scrollY);
  if (1336 <= window.scrollY){
    text.className = "animated anmi1";
  } else {
    text.className = "";
  }
}

window.addEventListener("scroll", changeanimation);

function changeanimation2() {
  let text2 = document.querySelector('#mak')
  if (1336 <= window.scrollY){
    text2.className = "animated anmi2";
  } else {
    text2.className = "";
  }
}

window.addEventListener("scroll", changeanimation2);

function changeanimation3() {
  let text3 = document.querySelector('#sup')
  if (1336 <= window.scrollY){
    text3.className = "animated anmi3";
  } else {
    text3.className = "";
  }
}

window.addEventListener("scroll", changeanimation3);

function changeanimation4() {
  let text4 = document.querySelector('#str')
  if (1336 <= window.scrollY){
    text4.className = "animated anmi4";
  } else {
    text4.className = "";
  }
}

window.addEventListener("scroll", changeanimation4);

function changeanimation5() {
  let text5 = document.querySelector('#qa')
  if (449 <= window.scrollY && 1300 >= window.scrollY){
    text5.className = "item " + "animated zoom-in";
  } else {
    text5.className = "item";
  }
}

window.addEventListener("scroll", changeanimation5);

function changeanimation6() {
  let text6 = document.querySelector('#thr')
  if (449 <= window.scrollY && 1300 >= window.scrollY){
    text6.className = "animated zoom-in2";
  } else {
    text6.className = "";
  }
}

window.addEventListener("scroll", changeanimation6);

function changeanimation7() {
  let text7 = document.querySelector('#kar')
  if (449 <= window.scrollY && 1300 >= window.scrollY){
    text7.className = "animated zoom-in2";
  } else {
    text7.className = "";
  }
}

window.addEventListener("scroll", changeanimation7);

function changeanimation8() {
  let text8 = document.querySelector('#sli')
  if (449 <= window.scrollY && 1300 >= window.scrollY){
    text8.className = "animated zoom-in2";
  } else {
    text8.className = "";
  }
}

window.addEventListener("scroll", changeanimation8);

function changeanimation9() {
  let text9 = document.querySelector('#unc')
  if (449 <= window.scrollY && 1300 >= window.scrollY){
    text9.className = "animated zoom-in2";
  } else {
    text9.className = "";
  }
}

window.addEventListener("scroll", changeanimation9);
