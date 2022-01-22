import { ICurrentTime } from './../time.model';
import { IPomoTime } from '../time.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TimeSelectorService {
  currentTime!: ICurrentTime

  incrementMinutes(time: IPomoTime) {
    time.minutes += 1;
  }

  decrementMinutes(time: IPomoTime) {
    if (time.minutes !== 0) {
      time.minutes -= 1;
    }
  }

  setCurrentTime(time: ICurrentTime) {
    this.currentTime = time
  }

  constructor() {}
}
