import React from 'react'
import './Servicos.css'

export default function Servicos() {
  return (
    <div className='container_servicos'>
      <div className='caixa'>
        <div>
          <h1 className='title_servico'>Conheça nossos serviços</h1>
          <p>
            Descubra um mundo de possibilidades financeiras, <br />
            excelência em serviços bancários, estamos comprometidos <br />
            em transformar os seus sonhos em realidade.
          </p>
        </div>
        <img className='topico' src="./src/assets/topicos.PNG" />
      </div>
    </div>
  )
}
