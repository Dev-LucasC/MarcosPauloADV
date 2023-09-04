import React from "react";
import "./Header.css";
import Logo from "./logo.png"; // Import your logo image

const Header = () => {
  return (
    <section className="fundo">
      <div className="overlay">
        <div className="text-container">
        <img src={Logo} alt="Logo" className="logo" />
          <h1>OLÁ</h1>
          <p>Seu texto aqui</p>
          <a href="#" target="_self" className="Button_Whats">ENTRE EM CONTATO AGORA</a>
        </div>
      </div>
    </section>
  );
};

export default Header;
