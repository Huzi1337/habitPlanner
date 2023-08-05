type Hour = `${0 | 1}${0 | 1 | 2 | 3 | 4 | 5}`;
type Minute = `${0 | 1 | 2 | 3 | 4 | 5}${0 | 1 | 2 | 3 | 4 | 5}`;
export type ValidTime = `${Hour}:${Minute}`;

export interface IResponsibility {
  id: number;
  tag: string;
  title: string;

  isCheckedOff: boolean;
}

export interface ITask extends IResponsibility {
  note?: string;
  date: string | null;
  time: ValidTime | "";
}

export interface IHabit extends IResponsibility {
  dayOfTheWeek: number;
  time: ValidTime;
}

export type TaskInitialState = {
  current: number;
  tasks: [] | ITask[];
};

export type HabitInitialState = {
  current: number;
  habits: [] | IHabit[];
};
