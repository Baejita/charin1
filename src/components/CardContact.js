import React from "react";

function CardContact({ img, styleAPP, application, applicationTH }) {
  return (
    <div className="card-container">
      <div className="card-big-img-and-bgColor">
        <div className="card-bgColor"></div>
        <img className="card-img" src={img} alt="imgProfileOf-facebook" />
      </div>
      <h2 className="card">{application}</h2>
      <h3 className="card">{applicationTH}</h3>
      <div className="card-btn-container">
        <button className="button card-btn">ติดต่อเรา</button>
      </div>
    </div>
  );
}

export default CardContact;
