export interface IResponsibility {
  id: number;
  tag: string;
  title: string;
  note?: string;
  date: string | null;
}

export interface ITask extends IResponsibility {
  time: string;

  isCheckedOff: boolean;
}

export type TaskInitialState = {
  current: number;
  tasks: [] | ITask[];
};

export type HabitInitialState = {
  current: number;
  habits: [] | IResponsibility[];
};
