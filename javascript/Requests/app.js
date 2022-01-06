const myReq = new XMLHttpRequest();
let h1 = document.querySelector("h1");
myReq.onload = function () {
  const data = JSON.parse(this.responseText);
  h1.innerText = data.joke;
};
myReq.onerror = function (err) {
  console.log("ERROR!", err);
};
myReq.open("get", "https://icanhazdadjoke.com/", true);
myReq.setRequestHeader("Accept", "application/json");
myReq.send();
