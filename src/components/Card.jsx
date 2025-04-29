import './Card.css';

const Card = ({ text, children, className = "" }) => {
  return (
    <div className={`card ${className}`}>
      <div className="card-title">{text}</div>
      <div className="card-container">
        <div className="card-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card;
