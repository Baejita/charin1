import React from "react";
import RsaPic from "../img/Rsa.png";

function SuscribePtim() {
  return (
    <>
      <a
        href="https://accounts.moveforwardparty.org/account/register"
        className="a-text-decoration-none"
      >
        <div className="subScribe-container">
          <div className="subScribe-container-text">
            <h2 className="subScribe-container-text-header">
              เพราะเราเชื่อในพลังของการให้
            </h2>
            <h2 className="subScribe-container-text-header">
              กับ
              <span className="subScribe-container-text-header-orange">
                อาสาก้าวไกล อยุธยา
              </span>
            </h2>
            <p className="subScribe-container-text-p">
              ก้าวไกลอาสา ทั่วอยุธยามีรอยยิ้ม
            </p>

            <div>
              <a href="https://accounts.moveforwardparty.org/account/register">
                <button
                  href="https://whereisthemouse.com"
                  className="button"
                  naviLink="www.google.com"
                >
                  ดูเพิ่มเติม
                </button>
              </a>
            </div>
          </div>
          <div>
            <img src={RsaPic} alt="รูปอาสาก้าวไกล" className="img-RSA" />
          </div>
        </div>
      </a>
    </>
  );
}

export default SuscribePtim;
