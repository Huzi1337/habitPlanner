import "./Card.scss";

type Props = {
  variant?: "default" | "greenThumb" | "lime" | "greenOutline";
  children: React.ReactNode;
};

const Card = ({ variant = "default", children }: Props) => {
  return <div className={`card ${variant}`}>{children}</div>;
};

export default Card;
