interface CardProps {
  imageSrc: string;
  position: "left" | "right";
}

const Card: React.FC<CardProps> = ({ imageSrc, position }) => {
  return (
    <div className={`card card-${position}`}>
      <img src={imageSrc} alt={`Card ${position}`} />
    </div>
  );
};

export default Card;
