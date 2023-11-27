import './App.css'
import Header from './components/Header/Header'
import Propaganda from './components/Propaganda/Propaganda'
import Servicos from './components/Servicos/Servicos'
import Detalhes from './components/Detalhes/Detalhes'
import Fotos from './components/Fotos/Fotos'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className='all'>
      <Header />
      <Propaganda />
      <Servicos />
      <Detalhes />
      <Fotos />
      <Footer />
    </div>
    
  )
}

export default App
