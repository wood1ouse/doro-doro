import { IPomoUserData } from './time.model';
import { Injectable } from '@angular/core';
import { UserDataService } from './user-data.service';

@Injectable({
  providedIn: 'root',
})
export class BackgroundService {
  constructor(private user: UserDataService) {}

  getBackgroundColor() {
    const userData: IPomoUserData = this.user.getUserData();

    if (userData.start) {
      return `bg-gradient-to-r from-[#0652C5] to-[#D4418E]`;
    }

    if (userData.paused) {
      return `bg-gradient-to-r from-yellow-500 to-orange-500`;
    } else if (!userData.paused) {
      if (userData.break) {
        return `bg-gradient-to-r from-[#98DE5B] to-[#08E1AE]`;
      }
      return `bg-gradient-to-r from-[#5311ce] to-[#4D5DFB]`;
    }

    return '';
  }
}
