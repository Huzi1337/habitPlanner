import Card from "./Card";

type Props = {
  tag: string;
  title: string;
  time?: string | null;
  note: string;
  variant?: "active" | "inactive" | "outlined";
};

const Task = ({
  tag,
  note,
  title,
  time = null,
  variant = "inactive",
}: Props) => {
  const color =
    variant === "active"
      ? "greenThumb"
      : variant === "outlined"
      ? "greenOutline"
      : "default";
  return (
    <Card variant={color}>
      <h4>{tag}</h4>

      <div className="home__row">
        <h3>{title}</h3>
        {time != null && <h3>10:00</h3>}
      </div>
      <h4>{note}</h4>
    </Card>
  );
};

export default Task;
