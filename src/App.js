import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Biography from './components/Biogrraphy/Biography';
import Footer from './components/Footer/Footer';
import whatsappIcon from './whatsapp.png'; // Substitua pelo caminho correto do ícone

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Biography />
      <Footer />
      <a href="http://wa.me/47991528913" 
         target="_blank" 
         rel="noopener noreferrer" 
         style={{
           position: 'fixed',
           bottom: '30px',
           right: '30px',
         }}>
        <img src={whatsappIcon} alt="WhatsApp" width="50" height="50"/>
      </a>
    </div>
  );
}

export default App;
