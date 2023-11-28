import Header from '../../components/Header/Header'
import './Cadastro.css'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { useAuthStore } from "../../stores/authStore";
import { useState, useEffect } from 'react';

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
            "email": e.target.email.value,
            "password": e.target.password.value,
            "nome": e.target.nome.value,
            "dataNasc": e.target.dataNasc.value,
        })
        .then((response) => {
            const accessToken = response.data.access;
            const refreshToken = response.data.refresh;
            setAccessToken(accessToken);
            setRefreshToken(refreshToken);
            console.log('cheguei aqui')
        })
        .then(() => {
            navigate('/login', { replace: true })
        })
        .catch((e) => {
            console.log(e);
        })
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