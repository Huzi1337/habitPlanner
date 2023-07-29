import "./Card.scss";

type Props = {
  variant?: "default" | "greenThumb" | "lime" | "greenOutline";
  wide?: boolean | undefined;
  children: React.ReactNode;
};

const Card = ({ variant = "default", wide, children, ...props }: Props) => {
  return (
    <div {...props} className={`card ${variant} ${wide ? "wide" : ""}`}>
      {children}
    </div>
  );
};

export default Card;
