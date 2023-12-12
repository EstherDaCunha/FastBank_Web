import Header from '../../components/Header/Header'
import { useAuthStore } from '../../stores/authStore';
import { useNavigate } from "react-router-dom"
import './Inicial.css'
import axios from 'axios'
import { useState } from 'react';

/* Tela com as informações sobre a conta, utilizando a api para puxar o saldo atual */

function Inicial() {

    const [saldo, setSaldo] = useState("")
    
    const accessToken = useAuthStore(state => state.accessToken);

    async function cad(e) {
        e.preventDefault();
        console.log(e)
        const response = await axios.get('http://localhost:8000/api/conta/', {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }  
        })
        .then((response) => {
            const saldo = response.data[0].saldo
            setSaldo(saldo)
            console.log(saldo)
        })
    }

    

    const navigate = useNavigate()


    return (
        <form className='all' onLoad={cad}>
            <Header />
            <img className='saldo' src="./src/assets/saldo.PNG" />
            <h1 className='valor_saldo'>R$ {saldo}</h1>
            <img className='info2' src="./src/assets/info2.PNG"/>
            <img className='info2' src="./src/assets/info3.PNG"/>
            <a href="/aplicativo" className='more'>Mais informações</a>
        </form>

    )
}

export default Inicial