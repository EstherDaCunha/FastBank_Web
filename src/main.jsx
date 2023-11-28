import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Pages/Home/Home.jsx'
import Login from './Pages/Login/Login.jsx'
import Inicial from './Pages/Inicial/Inicial.jsx'
import Cadastro from './Pages/Cadastro/Cadastro.jsx'
import Aplicativo from './Pages/Aplicativo/Aplicativo.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/login' Component={Login} />
        <Route path='/inicial' Component={Inicial} />
        <Route path='/cadastro' Component={Cadastro} />
        <Route path='/aplicativo' Component={Aplicativo}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>

)
