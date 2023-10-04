import React from "react";


const CarCard = ({ title, image, content, price, condition, mileage, body, transmission }) => {
  return (
    <div className="carCard">
      <div className="carCard-condition">
        <button>{condition}</button>
      </div>
      <div className="carCard-tag"  style={{position: "absolute", justifyContent: "space-evenly"}}>
        <button>{mileage}</button>
        <button>{body}</button>
        <button>{transmission}</button>
      </div>
      <img className="carCard-img"src={image} alt={title} />
      <div className="carCard-content">
        <h3>{title}</h3>
              <p>{content}</p>
              <h4>{price}</h4>
      </div>
    </div>
  );
};

export default CarCard;