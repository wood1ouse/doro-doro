import { IPomoTime } from './../time.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  constructor() {}

  currentTimer!: ReturnType<typeof setInterval>

  startTimer(time: IPomoTime) {
    this.currentTimer= setInterval(() => {
      if (time.seconds === 0) {
        time.minutes -= 1;
        time.seconds = 60;
      }
      time.seconds -= 1;
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.currentTimer)
  }
}
