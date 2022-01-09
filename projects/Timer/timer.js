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
      this.onStart();
    }
    this.tick;
    this.t = setInterval(this.tick, 1000);
  };
  pause = () => {
    clearInterval(this.t);
  };
  tick = () => {
    if (this.duration.value <= 0) {
      this.pause();
      if (this.onComplete) this.onComplete();
    } else {
      if (this.onTick) this.onTick();
      this.duration.value--;
    }
  };
}
