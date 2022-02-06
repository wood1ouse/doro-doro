import { Injectable } from '@angular/core';
import { IPomoUserData } from './time.model';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  userData: IPomoUserData = {
    start: true,
    paused: false,
    break: false,
  };
  constructor() {}

  setUserData(userData: IPomoUserData): void {
    this.userData = userData;
  }

  getUserData(): IPomoUserData {
    return this.userData;
  }
}
