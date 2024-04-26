import Logo from "../img/LogoOrange.png";
function Footer() {
  return (
    <div className="footer-contianer">
      <img src={Logo} alt="Logo" className="logo" />
      <h2>พรรคก้าวไกล</h2>
      <h4>MOVE FORWARD PARTY</h4>
      <h4>Copyright 2024 โดย ทีมงานผู้ช่วนดำเนินงาน</h4>
      <h4>สส.ชริน วงศ์พันธ์เที่ยง</h4>
    </div>
  );
}

export default Footer;
