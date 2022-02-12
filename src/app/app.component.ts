import { Component } from '@angular/core';
import { TimerService } from './timer/timer.service';
import { BackgroundService } from './background.service';
import { UserDataService } from './user-data.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'doro-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Doro Doro';

  constructor(public background: BackgroundService, private timerService: TimerService, private userData: UserDataService, private titleService: Title) {}

  resetTime() {
    clearInterval(this.timerService.workInterval)
    clearInterval(this.timerService.breakInterval)

    this.titleService.setTitle(this.title)
    this.userData.setUserData({start: true, paused: false, break: false})
  }
}
