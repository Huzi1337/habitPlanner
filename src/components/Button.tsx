import "./Button.scss";

type Props = {
  onClick: () => void;
  variant: "add";
};

const Button = ({ variant, onClick }: Props) => {
  if (variant === "add")
    return (
      <button onClick={onClick} className="button__add">
        <img src="/icons/plus.svg"></img>
      </button>
    );
};

export default Button;
