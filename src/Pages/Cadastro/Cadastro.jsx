import Header from '../../components/Header/Header'
import './Cadastro.css'
import { useNavigate } from "react-router-dom"

function Cadastro() {
    const navigate = useNavigate()

    function Navigator() {
      navigate('/login')
    }
  
    return (
        <div className='all'>
            <Header />
            <input className="cad" type="text" placeholder='Nome' />
            <input className="cad" type="text" placeholder='Email' />
            <input className="cad" type="text" placeholder='Data de Nascimento: xxxx-xx-xx' />
            <input className="cad" type="password" placeholder='Senha' />


            <button className='botao' onClick={()=> Navigator()}>
              <p>Cadastrar</p>
            </button>
        </div>

    )
}

export default Cadastro