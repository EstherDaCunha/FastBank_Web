import Header from '../../components/Header/Header'
import './Cadastro.css'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { useAuthStore } from "../../stores/authStore";
import { useState, useEffect } from 'react';

/* Tela para cadastro, conectada com a api, fazendo um POST no banco de dados */

function Cadastro() {
  const navigate = useNavigate()

  function Navigator() {
    navigate('/login')
  }

    const setAccessToken = useAuthStore(state => state.setAccessToken);
    const setRefreshToken = useAuthStore(state => state.setRefreshToken);

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dataNasc, setdataNasc] = useState('');


    function Navigator() {
        navigate('/inicial')
    }

    async function cad(e) {
        e.preventDefault();
        console.log(e)
        await axios.post('http://localhost:8000/api/usuarios/', {
            "name": e.target.nome.value,
            "dataNasc": e.target.dataNasc.value,
            "email": e.target.email.value,
            "password": e.target.password.value,

        })
        .then(() => {
            navigate('/login', { replace: true })
        })
        .catch((e) => {
            console.log(e);
        })

        console.log(e.target.email.value)
        console.log(e.target.password.value)
        console.log(e.target.nome.value)
        console.log(e.target.dataNasc.value)
    }
  
    return (
        <form method='POST' className='all' onSubmit={cad}>
            <Header />
            <input className="cad" name='nome' type="text" placeholder='Nome' />
            <input className="cad" name='email' type="text" placeholder='Email' />
            <input className="cad" name='dataNasc' type="date" placeholder='Data de Nascimento: xxxx-xx-xx' />
            <input className="cad" name='password' type="password" placeholder='Senha' />


            <button className='botao' type='submit'>
              <p>Cadastrar</p>
            </button>
        </form>

    )
}

export default Cadastro