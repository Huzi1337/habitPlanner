export interface IResponsibility {
  tag: string;
  title: string;
  note?: string;
}

export interface ITask extends IResponsibility {
  time: string;
  date: string | null;
}

export type TaskInitialState = {
  tasks: [] | ITask[];
};

export type HabitInitialState = {
  habits: [] | IResponsibility[];
};
