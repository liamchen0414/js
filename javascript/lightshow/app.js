function changeColor(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = randomColor();
      resolve();
    }, delay);
  });
}

function randomColor() {
  let color = "#";
  let hexArray = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * 15);
    color += hexArray[index];
  }
  return color;
}

async function lightshow() {
  await changeColor(1000);
  await changeColor(1000);
  await changeColor(1000);
  await changeColor(1000);
}
