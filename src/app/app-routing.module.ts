import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeSelectorComponent } from './time-selector/time-selector.component';
import { TimerComponent } from './timer/timer.component';

const routes: Routes = [
  { path: 'timer', component: TimerComponent, pathMatch: 'full' },
  { path: '', pathMatch: 'full', component: TimeSelectorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true }), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
