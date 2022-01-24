import { TimeSelectorService } from './../time-selector/time-selector.service';
import { IPomoTask, IPomoTime, IUserTime } from './../time.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  currentPomo: number = 1;
  workTimer!: IPomoTime;
  breakTimer!: IPomoTime;
  break = false;
  paused = false;

  constructor(timeSelector: TimeSelectorService) {
    this.workTimer = timeSelector.getUserTime().workTime;
    this.breakTimer = timeSelector.getUserTime().breakTime;
  }

  pomodoros: IPomoTask[] = [
    { completed: false },
    { completed: false },
    { completed: false },
    { completed: false },
  ];

  startWorkTimer(userTime: IUserTime) {
    this.break = false;

    const { workTime, breakTime } = JSON.parse(JSON.stringify(userTime));

    if (this.pomodoros.every((pomo) => pomo.completed)) {
      this.pomodoros.forEach((pomo) => (pomo.completed = false));
      this.currentPomo = 1;
    }

    const interval = setInterval(() => {
      if (this.hasEnded(workTime)) {
        clearInterval(interval);
        this.pomodoros[this.currentPomo - 1].completed = true;
        this.currentPomo++;
        this.startBreakTimer(userTime);
      } else {
        this.calculateTime(workTime);
        this.workTimer = workTime;
      }

      // console.log(this.workTimer);
    }, 1000);
  }

  startBreakTimer(userTime: IUserTime) {
    this.break = true;

    const { workTime, breakTime } = JSON.parse(JSON.stringify(userTime));

    const interval = setInterval(() => {
      if (this.hasEnded(breakTime)) {
        clearInterval(interval);
        this.startWorkTimer(userTime);

        // console.log(JSON.stringify(this.pomodoros));
      } else {
        this.calculateTime(breakTime);
        this.breakTimer = breakTime;
      }
      console.log(this.breakTimer);
    }, 1000);
  }

  hasEnded(time: IPomoTime) {
    return time.minutes === 0 && time.seconds === 0;
  }

  calculateTime(time: IPomoTime) {
    if (!this.paused) {
      if (time.seconds === 0) {
        time.minutes -= 1;
        time.seconds = 60;
      }
      time.seconds -= 1;
    }
  }

  togglePause() {
    this.paused = !this.paused;
  }
}
