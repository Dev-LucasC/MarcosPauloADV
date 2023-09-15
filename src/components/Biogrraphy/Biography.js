import React from "react";
import "./Biography.css";
import Foto from "./Foto para site.png";

const Biography = () => {
  return (
    <section>
       <h1 className="titulo">SOBRE MIM</h1>
      <div className="elementor-divider">
          <span className="elementor-divider-separator"></span>
      </div>
      <main className="container_biography">
        <div className="container_foto">
          <img src={Foto} />
        </div>
        <div className="container_text">
          <h1>OBJETIVO</h1>
          <h3>
            Natural de Balneário Camboriú - SC, cursou direito e se tornou bacharel pela Universidade do Vale do Itajaí - UNIVALI. É advogado pela OAB/SC e atende todo o território nacional. Seu maior obejtivo é contribuir para uma sociedade mais justa e com os direitos garantidos.
          </h3>
        </div>
      </main>
    </section>
  );
};

export default Biography;
