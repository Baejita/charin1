import React from "react";
import logoMFP from "../components/logoMFPWhite.png";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div>
          <img src={logoMFP} alt="logo" className="logo" />
        </div>
        <ul className="nav-links">
          <li>
            <a href="https://lin.ee/7U79MeF">แจ้งปัญหา/รับเรื่องร้องเรียน</a>
          </li>
          <li>
            <a href="https://accounts.moveforwardparty.org/account/register">
              สมัครสมาชิกพรรค
            </a>
          </li>
          <li>
            <a href="#">อาสาก้าวไกลอยุธยา</a>
          </li>
          <li>
            <a href="#">ติดตามข้อมูลข่าวสาร</a>
          </li>
        </ul>
        <div>
          <button className="button-charin" type="charin">
            สส.ชริน วงศ์พันธ์เที่ยง
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
