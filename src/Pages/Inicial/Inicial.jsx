import Header from '../../components/Header/Header'
import './Inicial.css'

function Inicial() {

    return (
        <div className='all'>
            <Header />
            <img className='saldo' src="./src/assets/saldo.PNG" />
            <h1 className='valor_saldo'>R$500,00</h1>
            <img className='info2' src="./src/assets/info2.PNG"/>
            <img className='info2' src="./src/assets/info3.PNG"/>
            <a href="/aplicativo" className='more'>Mais informações</a>
        </div>

    )
}

export default Inicial