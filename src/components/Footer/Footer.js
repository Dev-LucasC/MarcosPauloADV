import React from "react";
import "./Footer.css";
import Logo from "./logo.png";
import InstagramIcon from "./instagram.png";
import LinkedInIcon from "./linkedin.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer-sociais">
          <img src={Logo} alt="Logo" className="footer-logo" />
          <a href="https://www.instagram.com/adv.marcospauloo" target="_blank" rel="noopener noreferrer">
            <img src={InstagramIcon} alt="Instagram" className="footer-icon" />
          </a>
          <a href="https://www.linkedin.com/in/marcos-paulo-santana-62833715b" target="_blank" rel="noopener noreferrer">
            <img src={LinkedInIcon} alt="LinkedIn" className="footer-icon" />
          </a>
        </div>

        <div className="footer-contact">
          <p>Entre em contato:</p>
          <p>
            Email:{" "}
            <a href="mailto:contato@example.com">contato@marcospauloadv.com.br</a>
          </p>
          <p>
            Telefone:{" "}
            <a href="tel:(123) 456-7890">(47) 991528913</a>
          </p>
        </div>
      </div>
      <hr className="footer-line" />
      <div className="footer-developer">
        Desenvolvido por:{"  "}
        <a href="https://www.linkedin.com/in/dev-lucasconceicao/" target="_blank" rel="noopener noreferrer">
          Lucas Da Conceição
        </a>
      </div>
    </footer>
  );
};

export default Footer;
