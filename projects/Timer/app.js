const startBtn = document.querySelector("#start");
const pauseBtn = document.querySelector("#pause");
const durationInput = document.querySelector("#duration");

const timer = new Timer(durationInput, startBtn, pauseBtn, {
  onStart() {
    console.log("Timer Started");
  },
  onTick() {
    console.log("Timer Running");
    // add border animation in there
  },
  onComplete() {
    console.log("Timer Completed");
  },
});
