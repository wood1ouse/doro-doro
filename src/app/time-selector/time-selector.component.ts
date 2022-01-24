import { TimeSelectorService } from './time-selector.service';
import { Component, OnInit } from '@angular/core';
import { IPomoTime } from '../time.model';
import { Router } from '@angular/router';

@Component({
  selector: 'doro-time-selector',
  templateUrl: './time-selector.component.html',
  styleUrls: ['./time-selector.component.scss'],
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

  constructor(private time: TimeSelectorService, private route: Router) {}

  ngOnInit(): void {}

  incrementWorkTime() {
    this.time.incrementMinutes(this.workTime);
  }

  decrementWorkTime() {
    this.time.decrementMinutes(this.workTime);
  }

  incrementBreakTime() {
    this.time.incrementMinutes(this.breakTime);
  }

  decrementBreakTime() {
    this.time.decrementMinutes(this.breakTime);
  }

  submitTime() {
    this.time.setUserTime({
      workTime: this.workTime,
      breakTime: this.breakTime,
    });
    this.route.navigate(['/timer']);
  }
}
