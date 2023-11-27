import './Header.css'
import { useNavigate } from "react-router-dom"

const Header = () => {

  const navigate = useNavigate()

  function Navigator() {
    navigate(`/login`)
  }

  return (
    <div className="header">
      <div className='img'>
        <img src="./src/assets/Logo.PNG"/>
      </div>
      <div className="menu">
        <a href='/' className="title">Inicio</a>
        <a href='/login' className="title">Entrar</a>
        <a href='' className="title">Contato</a>
      </div>
    </div>
  )
}

export default Header