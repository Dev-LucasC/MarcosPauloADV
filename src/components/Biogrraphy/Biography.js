import React from 'react'
import './Biography.css'
import Foto from "./velkoz-2.png"

const Biography = () => {
  return (
    
    <section className='container_biography'>
        <div className='container_foto'>
          <img src={Foto} />  
        </div>
        <div className='container_text'>
            <h1>Biografia</h1>
            <h3>Mono Velkoz desde novo, meu sonho era ser o melhor do meu bairrro. Mas havia um pequeno problema, um inimigo. um inimgo chamado "Ansast", muitos diziam que ele superava minhas habilidades no calculo do Qzinho, mas nao me deixei abalar, voltei mais forte e potente com um incrivel Malzapenes e debulhei com a lux nojenta dele, esse sou eu. Doutor Chicomalts</h3>
        </div>
    </section>
  )
}

export default Biography