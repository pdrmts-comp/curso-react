import { useState } from 'react'
import { Link } from 'react-router';
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  return (
    <>
      <div className='flex flex-col justify-center items-center min-h-screen'>
        <img src={reactLogo} className="logo react" alt="React logo" />
        <h1 className="text-4xl font-extrabold mb-4">
          BEM VINDO AO MEU PROJETO REACT
        </h1>
        <p className='mb-8'>
          GERENCIE USUÁRIOS COM CADASTRO E LISTAGEM 
        </p>
       
        <ul className='flex gap-5'>
          <li><Link to="/cadastro">CADASTRO</Link></li>
          <li><Link to="/lista">LISTA</Link></li>
        </ul>
      </div>
    </>
  )
}

export default App
