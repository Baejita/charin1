import React, { useState } from "react";
// const styleApp = ["card-face", "card-Line", "card-tiktok"];
function CardContact({ img, styleApp, application, applicationTH, navLink }) {
  const [contact, setContact] = useState(false);

  function handleClickContact() {
    setContact(!contact);
  }

  return (
    <>
      <a href={navLink} className="link-non-underline">
        <div className="card-container">
          <div className="card-big-img-and-bgColor-bg-color-orange">
            <div className="card-bgColor"></div>
            <img className="card-img" src={img} alt="imgProfileOf-facebook" />
          </div>
          <h2 className={styleApp}>{application}</h2>
          <h3 className="card">{applicationTH}</h3>
          <div className="card-btn-container">
            <button className="button card-btn" onClick={handleClickContact}>
              ติดต่อเรา
            </button>
          </div>
        </div>
      </a>
    </>
  );
}

export default CardContact;
