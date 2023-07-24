import "./Card.scss";

type Props = {
  variant?: "default" | "greenThumb" | "lime" | "greenOutline";
  wide?: boolean | undefined;
  children: React.ReactNode;
};

const Card = ({ variant = "default", wide, children }: Props) => {
  return (
    <div className={`card ${variant} ${wide ? "wide" : ""}`}>{children}</div>
  );
};

export default Card;
