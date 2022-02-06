import { TimeSelectorService } from './time-selector/time-selector.service';
import { Component } from '@angular/core';
import { TimerService } from './timer/timer.service';
import { UserDataService } from './user-data.service';
import { BackgroundService } from './background.service';

@Component({
  selector: 'doro-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'doro-doro';

  constructor(public background: BackgroundService, private timerService: TimerService) {}

  resetTime() {
    clearInterval(this.timerService.workInterval)
    clearInterval(this.timerService.breakInterval)
  }
}
