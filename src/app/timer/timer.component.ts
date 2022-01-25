import { TimeSelectorService } from './../time-selector/time-selector.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TimerService } from './timer.service';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'doro-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  constructor(
    public time: TimeSelectorService,
    public timer: TimerService,
    public userData: UserDataService,
    private route: Router
  ) {}

  ngOnInit(): void {
    if (!this.time.userTime) {
      this.route.navigate(['/']);
    }

    this.timer.startWorkTimer(this.time.getUserTime());
  }

  handleClick() {
    this.timer.togglePause();
  }
}
