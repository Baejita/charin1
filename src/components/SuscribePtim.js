import React from "react";
import PTim from "../img/Subscribe-PTim.png";

function SuscribePtim() {
  return (
    <>
      <a
        href="https://accounts.moveforwardparty.org/account/register"
        className="a-text-decoration-none"
      >
        <div className="subScribe-container">
          <div>
            <img
              src={PTim}
              alt="รูปพี่ทิมสมัครสมาชิก"
              className="img-subScribe "
            />
          </div>
          <div className="subScribe-container-text">
            <h2 className="subScribe-container-text-header">
              มาร่วมเป็นส่วนหนึ่งกับเรา
            </h2>
            <h2 className="subScribe-container-text-header">
              สมัครสมาชิก
              <span className="subScribe-container-text-header-orange">
                พรรคก้าวไกล
              </span>
            </h2>
            <p className="subScribe-container-text-p">
              เพื่อร่วมเดินทางไปให้ถึงอนาคตแบบใหม่ที่เราหวัง
            </p>
            <div>
              <a href="https://accounts.moveforwardparty.org/account/register">
                <button
                  href="https://whereisthemouse.com"
                  className="button"
                  naviLink="www.google.com"
                >
                  สมัครสมาชิก
                </button>
              </a>
            </div>
          </div>
        </div>
      </a>
    </>
  );
}

export default SuscribePtim;
