import { IPomoTime } from './../time.model';
import { TimeSelectorService } from './time-selector.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'doro-time-selector',
  templateUrl: './time-selector.component.html',
  styleUrls: ['./time-selector.component.scss'],
})
export class TimeSelectorComponent implements OnInit {
  workTime!: IPomoTime;
  breakTime!: IPomoTime;

  constructor(
    private time: TimeSelectorService,
    private route: Router,
    private userData: UserDataService
  ) {}

  ngOnInit(): void {
    this.workTime = {
      minutes: 0,
      seconds: 0,
    };

    this.breakTime = {
      minutes: 0,
      seconds: 0,
    };

    this.time.setUserTime({
      workTime: this.workTime,
      breakTime: this.breakTime,
    });


  }

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

    this.userData.setUserData({ ...this.userData.getUserData(), start: false });

    this.route.navigate(['/timer']);
  }
}
