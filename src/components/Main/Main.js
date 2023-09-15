import React from "react";
import "./Main.css";
import Foto1 from "./imgs/DIREITO CIVIL.png"
import Foto2 from "./imgs/DIREITO TRIBUTARIO.png"
import Foto3 from "./imgs/DIREITO PREVIDENCIARIO.png"
import Foto4 from "./imgs/DIREITO DE FAMILIA.png"

const Main = () => {
  return (
    <main>
      <h1 className="titulo">Áreas de Atuação</h1>
      <div className="elementor-divider">
          <span className="elementor-divider-separator"></span>
      </div>
      <section className="Main">
        <div className="linha1">
          <div className="elemento1">
           <img src={Foto1}/>
            <h3>DIREITO CIVIL</h3>
            <h4>
            Envolve as leis e regulamentações que governam as relações e direitos entre indivíduos e entidades privadas, abrangendo áreas como contratos, propriedade, responsabilidade civil e questões familiares.
            </h4>
          </div>
          <div className="elemento2">
          <img src={Foto4} />
            <h3>DIREITO DA FAMÍLIA</h3>
            <h4>
            Concentra-se em assuntos familiares, como divórcio, guarda de filhos, pensão alimentícia, adoção e paternidade.

            </h4>
          </div>
        </div>
        <div className="linha2">
          <div  className="elemento1">
            <img src={Foto3}/>
            <h3>DIREITO PREVIDÊNCIÁRIO</h3>
            <h4>
            Lida com benefícios da seguridade social, como aposentadoria, pensões por invalidez e auxílio-doença, além de representação em disputas com a Previdência Social.
            </h4>
          </div>
          <div  className="elemento2">
          <img src={Foto2} />
            <h3>DIREITO TRIBUTÁRIO</h3>
            <h4>
            Envolve questões fiscais, incluindo planejamento tributário, auditorias e resolução de litígios relacionados a impostos.

            </h4>

            <h1></h1>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
