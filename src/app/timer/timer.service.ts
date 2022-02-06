import { TimeSelectorService } from './../time-selector/time-selector.service';
import { IPomoTask, IPomoTime, IUserTime } from './../time.model';
import { Injectable } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  currentPomo: number = 0;
  workTimer!: IPomoTime;
  breakTimer!: IPomoTime;
  workInterval!: ReturnType<typeof setInterval>
  breakInterval!: ReturnType<typeof setInterval>

  constructor(
    private timeSelector: TimeSelectorService,
    private userData: UserDataService,
    private titleService: Title
  ) {}

  pomodoros: IPomoTask[] = [
    { completed: false },
    { completed: false },
    { completed: false },
    { completed: false },
  ];

  startWorkTimer(userTime: IUserTime) {
    this.workTimer = this.timeSelector.getUserTime().workTime;
    this.breakTimer = this.timeSelector.getUserTime().breakTime;

    this.userData.setUserData({ ...this.userData.getUserData(), break: false });

    const { workTime } = JSON.parse(JSON.stringify(userTime));

    if (this.pomodoros.every((pomo) => pomo.completed)) {
      this.pomodoros.forEach((pomo) => (pomo.completed = false));
      this.currentPomo = 0;
    }

    this.workInterval = setInterval(() => {
      if (this.hasEnded(workTime)) {
        clearInterval(this.workInterval);
        this.pomodoros[this.currentPomo].completed = true;
        this.currentPomo++;
        this.startBreakTimer(userTime);
      } else {
        this.calculateTime(workTime);
        this.titleService.setTitle(`Work: ${this.formatTime(workTime)}`)
        this.workTimer = workTime;
      }
    }, 1000);
  }

  startBreakTimer(userTime: IUserTime) {
    this.userData.setUserData({ ...this.userData.getUserData(), break: true });

    let { workTime, breakTime } = JSON.parse(JSON.stringify(userTime));

    // if it's 4 break => make it like Work Time
    breakTime =
      this.currentPomo === this.pomodoros.length ? workTime : breakTime;

    this.breakInterval = setInterval(() => {
      if (this.hasEnded(breakTime)) {
        clearInterval(this.breakInterval);
        this.startWorkTimer(userTime);
      } else {
        this.calculateTime(breakTime);
        this.titleService.setTitle(`Break: ${this.formatTime(breakTime)}`)
        this.breakTimer = breakTime;
      }
    }, 1000);
  }

  hasEnded(time: IPomoTime) {
    return time.minutes === 0 && time.seconds === 0;
  }

  calculateTime(time: IPomoTime) {
    if (!this.userData.getUserData().paused) {
      if (time.seconds === 0) {
        time.minutes -= 1;
        time.seconds = 60;
      }
      time.seconds -= 1;
    }
  }

  togglePause() {
    let paused = !this.userData.getUserData().paused;
    this.userData.setUserData({ ...this.userData.getUserData(), paused });
  }

  formatTime(time: IPomoTime): string {
    return `${time.minutes < 10 ? '0' : ''}${time.minutes}:${time.seconds < 10 ? '0' : ''}${time.seconds}`
  }
}
