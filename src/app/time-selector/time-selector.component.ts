import { TimeSelectorService } from './time-selector.service';
import { Component, OnInit } from '@angular/core';
import { IPomoTime } from '../time.model';

@Component({
  selector: 'doro-time-selector',
  templateUrl: './time-selector.component.html',
  styleUrls: ['./time-selector.component.scss']
})
export class TimeSelectorComponent implements OnInit {

  workTime: IPomoTime = {
    minutes: 0,
    seconds: 0,
  };

  breakTime: IPomoTime = {
    minutes: 0,
    seconds: 0,
  };

  constructor(public timeSelectorService: TimeSelectorService) { }

  ngOnInit(): void {
  }

  incrementWorkTime() {
    this.timeSelectorService.incrementMinutes(this.workTime)
  }

  decrementWorkTime() {
    this.timeSelectorService.decrementMinutes(this.workTime)
  }

  incrementBreakTime() {
    this.timeSelectorService.incrementMinutes(this.breakTime)
  }

  decrementBreakTime() {
    this.timeSelectorService.decrementMinutes(this.breakTime)
  }

}
