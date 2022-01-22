import { TimeSelectorService } from './../time-selector/time-selector.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TimerService } from './timer.service';

@Component({
  selector: 'doro-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  paused: boolean = false
  constructor(
    public time: TimeSelectorService,
    private route: Router,
    private timer: TimerService
  ) {}

  ngOnInit(): void {
    if (!this.time.currentTime) {
      this.route.navigate(['/']);
    }

    this.timer.startTimer(this.time.currentTime.workTime);
  }

  switchTime() {
    this.paused = !this.paused

    this.paused ? this.timer.stopTimer() : this.timer.startTimer(this.time.currentTime.workTime)
  }
}
