export interface IPomoTime {
  minutes: number
  seconds: number
}

export interface ICurrentTime {
  workTime: IPomoTime
  breakTime: IPomoTime
}
