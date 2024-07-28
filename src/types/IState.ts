interface IState {
  id: number;
  isopen: boolean;
  type: number;
}

export interface IModal {
  state: IState[];
  count: number;
}
