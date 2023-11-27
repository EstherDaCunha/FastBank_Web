import Header from '../../components/Header/Header'
import './Login.css'
import { useNavigate } from "react-router-dom"

function Login() {

    const navigate = useNavigate()

    function Navigator() {
        navigate('/inicial')
    }

    return (
        <div className='all'>
            <Header />
            <input className="info" type="text" placeholder='Email' />
            <input className="info" type="password" placeholder='Senha' />

            <div className="btns">
                <button className='botao' onClick={() => Navigator()}>
                    <p>Entrar</p>
                </button>
                <a style={{ fontSize: 15, color: 'white' }} href="/cadastro">Cadastre-se</a>
            </div>

        </div>

    )
}

export default Login