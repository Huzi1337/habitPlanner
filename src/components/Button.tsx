import "./Button.scss";

type Props = {
  onClick: () => void;
  variant: "add tasks" | "add habits";
};

const Button = ({ variant, onClick }: Props) => {
  return (
    <button onClick={onClick} className={`button__add ${variant}`}>
      <img src="/icons/plus.svg"></img>
    </button>
  );
};

export default Button;
