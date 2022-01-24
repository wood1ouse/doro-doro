import { IUserTime } from './../time.model';
import { IPomoTime } from '../time.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TimeSelectorService {
  userTime!: IUserTime

  incrementMinutes(time: IPomoTime) {
    time.minutes += 1;
  }

  decrementMinutes(time: IPomoTime) {
    if (time.minutes !== 0) {
      time.minutes -= 1;
    }
  }

  setUserTime(time: IUserTime) {
    this.userTime = time
  }

  getUserTime(): IUserTime {
    return this.userTime
  }

  constructor() {}
}
