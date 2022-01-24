export interface IPomoTime {
  minutes: number
  seconds: number
}

export interface IUserTime {
  workTime: IPomoTime
  breakTime: IPomoTime
}

export interface IPomoTask {
  completed: boolean
}
