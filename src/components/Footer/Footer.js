import React from 'react';
import './Footer.css';
import Logo from './logo.png'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-contact'>
        <img src={Logo} alt='Logo' className='footer-logo' />
        <p>Entre em contato:</p>
        <p>Email: contato@example.com</p>
        <p>Telefone: (123) 456-7890</p>
        <hr className='footer-line' />
      </div>
      <div className='footer-developer'>
        <h4>Desenvolvido por:</h4>
        <a
          href='https://www.linkedin.com/in/dev-lucasconceicao/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Lucas Desenvolvedor
        </a>
      </div>
    </footer>
  );
};

export default Footer;
