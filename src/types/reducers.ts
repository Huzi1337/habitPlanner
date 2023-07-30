export interface IResponsibility {
  id: number;
  tag: string;
  title: string;
  note?: string;
}

export interface ITask extends IResponsibility {
  time: string;
  date: string | null;
  isCheckedOff: boolean;
}

export type TaskInitialState = {
  current: number;
  tasks: [] | ITask[];
};

export type HabitInitialState = {
  habits: [] | IResponsibility[];
};
