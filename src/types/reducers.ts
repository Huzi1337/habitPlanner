export interface IResponsibility {
  id: number;
  tag: string;
  title: string;
  note?: string;
  date: string | null;
  isCheckedOff: boolean;
}

export interface ITask extends IResponsibility {
  time: string;
}

export type TaskInitialState = {
  current: number;
  tasks: [] | ITask[];
};

export type HabitInitialState = {
  current: number;
  habits: [] | IResponsibility[];
};
