// logic that detects if two images in the dom are overlapping
function isTouching(a, b) {
  const aRect = a.getBoundingClientRect(); // get the boundary of object a
  const bRect = b.getBoundingClientRect(); // get the boundary of object b

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

const avatar = document.querySelector("#player");
const coin = document.querySelector("#coin");
let counter = 0;
window.addEventListener("keyup", function (e) {
  const currTop = extractPos(avatar.style.top);
  const currLeft = extractPos(avatar.style.left);
  if (e.key.includes("Down")) {
    avatar.style.top = `${currTop + 50}px`;
  } else if (e.key.includes("Up") && currTop >= 50) {
    avatar.style.top = `${currTop - 50}px`;
  } else if (e.key.includes("Right")) {
    avatar.style.left = `${currLeft + 50}px`;
    avatar.style.transform = "scale(1,1)";
  } else if (e.key.includes("Left") && currLeft >= 50) {
    avatar.style.left = `${currLeft - 50}px`;
    avatar.style.transform = "scale(-1,1)";
  }
  if (isTouching(avatar, coin)) {
    counter++;
    console.log(counter);
    moveCoin();
  }
});

const extractPos = (pos) => {
  if (!pos) return 0;
  return parseInt(pos.slice(0, -2));
};

const moveCoin = () => {
  const x = Math.floor(Math.random() * window.innerHeight * 0.5);
  const y = Math.floor(Math.random() * window.innerWidth * 0.5);
  coin.style.top = `${y}px`;
  coin.style.left = `${x}px`;
};
moveCoin();

// to make game good on the browser, we want to use canvas
