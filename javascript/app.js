const myImg = document.getElementById("2");

document.getElementsByTagName;
document.getElementsByClassName;

myImg.style.transition = "all 3s";

setInterval(() => {
  const x = Math.floor(document.body.clientWidth * 0.5 * Math.random());
  const y = Math.floor(document.body.clientHeight * 0.5 * Math.random());
  myImg.style.transform = `translate(${x}px, ${y}px)`;
}, 3000);
