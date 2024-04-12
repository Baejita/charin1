import React, { useState } from "react";
import CardContact from "./CardContact";
import LINE from "../img/Line.jpg";
import FACE from "../img/Facebook.jpg";
import TIKTOK from "../img/tiktok.jpg";
import heroImage from "../img/Hero.png";
const slogans = [
  "ชัดเจน",
  "เท่าเทียม",
  "ตรงไปตรงมา",
  "ภาษีประชาชนเพื่อประชาชน",
];

const styleApp = ["card-face", "card-Line", "card-tiktok"];

function Hero() {
  const [toggleContact, setToggleContact] = useState(false);
  function handleToggleContact() {
    setToggleContact(!toggleContact);
  }
  return (
    <div>
      <div className="hero-container ">
        <h1 className="hero-header " style={{ color: "#003057" }}>
          รับฟังปัญหา
        </h1>
        <h1 className="hero-header " style={{ color: "#001d42" }}>
          แจ้งปัญหา/รับเรื่องร้องเรียน
        </h1>
        <div className="hero-p">
          <p>
            ประชาชนในพื้นที่{" "}
            <span className="province-hero">
              อ.บางปะหัน ท่าเรือ มหาราช บ้านแพรก และนครหลวง
            </span>
          </p>
          <br />
          <p>
            หากพบเจอปัญหาในพื้นที่ และมีประเด็นอะไรสามารถเข้ามาร่วมพูดคุยกันได้
          </p>
        </div>
        <div>
          {toggleContact ? (
            <div className="hero-btn-toclose">
              <button
                type="button"
                className="btn button"
                onClick={() => handleToggleContact({})}
              >
                ปิดหน้าต่าง
              </button>
            </div>
          ) : (
            <div className="hero-btn">
              <button
                type="button"
                className="btn button"
                onClick={() => handleToggleContact({})}
              >
                ช่องทางติดต่อ
              </button>
            </div>
          )}
        </div>
        <div className="slogans-">
          <ul className="ul">
            <Svg key={1}>{slogans[0]}</Svg>
            <Svg key={2}>{slogans[1]}</Svg>
            <Svg key={3}>{slogans[2]}</Svg>
            <Svg key={4}>{slogans[3]}</Svg>
          </ul>
        </div>
        {toggleContact ? <ToggleV1 close={handleToggleContact} /> : null}
        <div className="hero-img-container">
          <img className="hero-img" src={heroImage} alt="hero-img-pooh"></img>
        </div>
      </div>
    </div>
  );
}

export default Hero;
const link = [
  "https://www.facebook.com/profile.php?id=100089996004006",
  "https://lin.ee/7U79MeF",
  "https://www.tiktok.com/@poohmfp?_t=8lQoABEA7YA&_r=1",
];
function ToggleV1() {
  return (
    <>
      (
      <div className="toggle-bg-black-contianer">
        <div className="card-container-ALL">
          <CardContact
            img={FACE}
            application="FACEBOOK"
            applicationTH="เฟสบุ๊คแฟนเพจ"
            styleApp={styleApp[0]}
            naviLink={link[0]}
          />

          <CardContact
            img={LINE}
            application="LINE OA"
            applicationTH="บัญชีไลน์ทางการ"
            styleApp={styleApp[1]}
            naviLink={link[1]}
          />

          <CardContact
            img={TIKTOK}
            application="TikTok"
            applicationTH="ติดตามทางติ๊กต๊อก"
            styleApp={styleApp[2]}
            naviLink={link[2]}
          />
        </div>
      </div>
      )
    </>
  );
}

function Svg({ children }) {
  return (
    <li className="list">
      <svg
        className="svg-correct"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="25"
        height="25"
        viewBox="0 0 50 50"
      >
        <path d="M43.171,10.925L24.085,33.446l-9.667-9.015l1.363-1.463l8.134,7.585L41.861,9.378C37.657,4.844,31.656,2,25,2 C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23C48,19.701,46.194,14.818,43.171,10.925z"></path>
      </svg>
      <p className="slogans">{children}</p>
    </li>
  );
}
