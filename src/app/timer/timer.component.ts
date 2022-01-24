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
  currentPomo: number = 1;



  constructor(
    public time: TimeSelectorService,
    public timer: TimerService,
    private route: Router,
  ) {}

  ngOnInit(): void {
    if (!this.time.userTime) {
      this.route.navigate(['/']);
    }

    console.log(this.time.getUserTime());


    console.log(this.timer.break);


    // this.timer.startWorkTimer(this.time.getUserTime());
    this.timer.startWorkTimer({workTime: {minutes: 0, seconds: 7}, breakTime: {minutes: 0, seconds: 5}});
  }

  handleClick() {
    this.timer.togglePause()
  }


  // switchTime() {
  //   this.paused = !this.paused;

  //   this.paused
  //     ? this.timer.stopTimer()
  //     : this.timer.startWorkTimer(this.time.userTime);
  // }
}
