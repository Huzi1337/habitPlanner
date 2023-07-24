import Card from "./Card";
import "./Task.scss";

type Props = {
  tag: string;
  title: string;
  time?: string | null;
  note?: string | null;
  variant?: "active" | "inactive" | "outlined";
  wide?: boolean | undefined;
};

const Task = ({
  tag,
  note = null,
  title,
  time = null,
  variant = "inactive",
  wide,
}: Props) => {
  const color =
    variant === "active"
      ? "greenThumb"
      : variant === "outlined"
      ? "greenOutline"
      : "default";
  return (
    <Card wide={wide} variant={color}>
      <h4>{tag}</h4>

      <div className="task__row">
        <h3>{title}</h3>
        {time != null && <h3>{time}</h3>}
      </div>
      {note != null && <h4>{note}</h4>}
    </Card>
  );
};

export default Task;
