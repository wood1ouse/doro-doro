export interface IPomoTime {
  minutes: number;
  seconds: number;
}

export interface IUserTime {
  workTime: IPomoTime;
  breakTime: IPomoTime;
}

export interface IPomoTask {
  completed: boolean;
}

export interface IPomoUserData {
  start: boolean;
  paused: boolean;
  break: boolean;
}
