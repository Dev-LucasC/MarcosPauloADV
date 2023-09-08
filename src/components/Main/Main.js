import React from "react";
import "./Main.css";
import Foto1 from "./imgs/divorce-law-icon.png"
import Foto2 from "./imgs/Coperate-law-icon.png"
import Foto3 from "./imgs/child-support-icon.png"
import Foto4 from "./imgs/Family-law-icon.png"

const Main = () => {
  return (
    <main>
      <h1 className="titulo">Áreas de Atuações</h1>
      <div className="elementor-divider">
          <span className="elementor-divider-separator"></span>
      </div>
      <section className="Main">
        <div className="linha1">
          <div className="elemento1">
           <img src={Foto1}/>
            <h3>DIREITO CIVIL</h3>
            <h4>
              Ajudamos você a resolver questões relacionadas a contratos,
              propriedade, danos e responsabilidade civil.
            </h4>
          </div>
          <div className="elemento2">
            <img src={Foto2} />
            <h3>DIREITO TRIBUTÁRIO</h3>
            <h4>
              Ajudamos você a lidar com questões tributárias, como impostos,
              dívidas fiscais e multas.
            </h4>
          </div>
        </div>
        <div className="linha2">
          <div  className="elemento1">
            <img src={Foto3}/>
            <h3>DIREITO PREVIDÊNCIÁRIO</h3>
            <h4>
              Ajudamos você a lidar com questões relacionadas à previdência
              social, como aposentadoria, pensões e benefícios.
            </h4>
          </div>
          <div  className="elemento2">
            <img src={Foto4} />
            <h3>DIREITO DA FAMÍLIA</h3>
            <h4>
              Ajudamos você a lidar com questões relacionadas à família, como
              divórcio, guarda de crianças, pensão alimentícia e adoção.
            </h4>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
