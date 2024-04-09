import React from "react";

const slogans = [
  "ชัดเจน",
  "เท่าเทียม",
  "ตรงไปตรงมา",
  "ภาษีประชาชนเพื่อประชาชน",
];

function Hero() {
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
          <p>ประชาชนในพื้นที่ อ.บางปะหัน ท่าเรือ มหาราช บ้านแพรก และนครหลวง</p>
          <br />
          <p>หากพบเจอปัญหาในพื้นที่ และมีประเด็นอะไรสามารถมาร่วมพูดคุยกันได้</p>
        </div>
        <div>
          <div className="hero-btn">
            <button type="button" className="btn button">
              ช่องทางติดต่อ
            </button>
          </div>
        </div>
        <div className="slogans-">
          <ul className="ul">
            <Svg key={1}>{slogans[0]}</Svg>
            <Svg key={2}>{slogans[1]}</Svg>
            <Svg key={3}>{slogans[2]}</Svg>
            <Svg key={4}>{slogans[3]}</Svg>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Hero;

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
