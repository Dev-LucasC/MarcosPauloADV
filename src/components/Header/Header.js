import React from "react";
import "./Header.css";
import Logo from "./logo.png"; // Import your logo image

const Header = () => {
  return (
    <section className="fundo">
        <div className="text-container">
        <img src={Logo} alt="Logo" className="logo" />
          <a href="https://api.whatsapp.com/send/?phone=47991528913&text&type=phone_number&app_absent=0" target="_blank" className="Button_Whats">ENTRE EM CONTATO AGORA</a>
      </div>
    </section>
  );
};

export default Header;
