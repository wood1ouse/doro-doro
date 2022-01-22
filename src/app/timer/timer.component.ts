import { TimeSelectorService } from './../time-selector/time-selector.service';
import { TimeSelectorComponent } from './../time-selector/time-selector.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'doro-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  constructor(public time: TimeSelectorService, private route: Router) { }

  ngOnInit(): void {
    if (!this.time.currentTime) {
      this.route.navigate(['/'])
    }
  }
}
