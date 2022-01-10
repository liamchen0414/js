let frequency = 50;
class Timer {
  constructor(duration, startBtn, pauseBtn, myCallbacks) {
    if (myCallbacks) {
      this.onStart = myCallbacks.onStart;
      this.onTick = myCallbacks.onTick;
      this.onComplete = myCallbacks.onComplete;
    }
    this.pauseBtn = pauseBtn;
    this.duration = duration;
    this.startBtn = startBtn;
    this.startBtn.addEventListener("click", this.start);
    this.pauseBtn.addEventListener("click", this.pause);
  }
  start = () => {
    if (this.onStart) {
      this.onStart(this.duration.value);
    }
    this.tick;
    this.t = setInterval(this.tick, frequency);
  };
  pause = () => {
    clearInterval(this.t);
  };
  tick = () => {
    if (this.duration.value <= 0) {
      this.pause();
      if (this.onComplete) this.onComplete();
    } else {
      if (this.onTick) {
        this.duration.value = (this.duration.value - frequency / 1000).toFixed(
          2
        );
        this.onTick(this.duration.value);
      }
    }
  };
}
