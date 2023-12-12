import Header from '../../components/Header/Header'
import './Login.css'
import { useNavigate } from "react-router-dom"
import { useAuthStore } from "../../stores/authStore";
import { useState, useEffect } from 'react';

import axios from "axios";

/* Tela inde se faz a verificação do usuario e senha */

function Login() {

    const navigate = useNavigate()

    const setAccessToken = useAuthStore(state => state.setAccessToken);
    const setRefreshToken = useAuthStore(state => state.setRefreshToken);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function Navigator() {
        navigate('/inicial')
    }

    async function teste(e) {
        e.preventDefault();
        console.log(e)
        await axios.post('http://localhost:8000/api/token/', {
            "email": e.target.email.value,
            "password": e.target.password.value
        })
        .then((response) => {
            const accessToken = response.data.access;
            const refreshToken = response.data.refresh;
            setAccessToken(accessToken);
            setRefreshToken(refreshToken);
        })
        .then(() => {
            navigate('/inicial', { replace: true })
        })
        .catch((e) => {
            console.log(email, password)
            console.log(e);
        })
    }

    return (
        <form method='POST' className='all' onSubmit={teste}>
            <Header />
            <input className="info" type="text" name='email' placeholder='Email' />
            <input className="info" type="password" name='password' placeholder='Senha' />

            <div className="btns">
                <button className='botao' type='submit'>
                    <p>Entrar</p>
                </button>
                <a style={{ fontSize: 15, color: 'white' }} href="/cadastro">Cadastre-se</a>
            </div>

        </form>

    )
}

export default Login