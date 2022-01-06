const btn = document.querySelector("button");
const moveX = (element, amount, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bodyBoundary = document.body.clientWidth;
      const elRight = element.getBoundingClientRect().right;
      const currLeft = element.getBoundingClientRect().left;
      if (elRight + amount > bodyBoundary) {
        reject();
      } else {
        element.style.transform = `translateX(${currLeft + amount}px)`;
        resolve();
      }
    }, delay);
  });
};

moveX(btn, 600, 1000)
  .then(() => moveX(btn, 600, 1000))
  .then(() => moveX(btn, 600, 1000))
  .then(() => moveX(btn, 600, 1000))
  .then(() => {
    console.log("done");
  })
  .catch(() => {
    console.log("error");
  });
