import React from "react";


const CarCard = ({ title, image, content, price }) => {
  return (
    <div className="carCard">
      <img className="carCard-img"src={image} alt={title} />
      <div className="carCard-content">
        <h3>{title}</h3>
              <p>{content}</p>
              <h5>{price}</h5>
      </div>
    </div>
  );
};

export default CarCard;