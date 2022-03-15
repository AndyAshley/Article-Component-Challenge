const footer = document.getElementsByClassName("footer");
const button = document.getElementById("share-button");
const path = document.getElementById("share-path");
const notSharing = document.getElementsByClassName("footer-text");
const isSharing = document.getElementsByClassName("footer-share");

//desktop elements
const buttonDesktop = document.getElementById("share-button-desktop");
const pathDesktop = document.getElementById("share-path-desktop");
const shareContainer = document.getElementById("share-desktop");
const shareSquare = document.getElementById("button-square");
let toggle = false;

const toggleState = () => {
  if (toggle === false) {
    toggle = true;
  } else if (toggle === true) {
    toggle = false;
  }
};

const share = () => {
  if (toggle === false) {
    footer[0].classList.add("bg-blue");
    button.classList.toggle("active");
    path.classList.toggle("active");
    isSharing[0].classList.add("active");
    notSharing[0].classList.add("not-active");
  } else if (toggle === true) {
    footer[0].classList.remove("bg-blue");
    button.classList.toggle("active");
    path.classList.toggle("active");
    isSharing[0].classList.remove("active");
    notSharing[0].classList.remove("not-active");
  }
  toggleState();
};

const shareDesktop = () => {
  if (toggle === false) {
    buttonDesktop.classList.toggle("active");
    pathDesktop.classList.toggle("active");
    shareContainer.classList.toggle("active");
    shareSquare.classList.toggle("active");
  } else if (toggle === true) {
    footer[1].classList.remove("bg-blue");
    buttonDesktop.classList.toggle("active");
    pathDesktop.classList.toggle("active");
    shareContainer.classList.toggle("active");
    shareSquare.classList.toggle("active");
  }
  toggleState();
};
