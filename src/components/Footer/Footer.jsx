import React from 'react'
import './Footer.css'

export default function App() {
  return (
    <div className='footer_img'>
        <footer>
            Endereço: Avenida Governador José Malcher, 66055260<br />
            Contato: +55 (19)97596-3115<br />
            E-mail: bankTrust@uorak.com<br />
            App: Trust Bank<br />
        </footer>
        <img className='logo'src="./src/assets/Logo.PNG"/>
    </div>
  );
}