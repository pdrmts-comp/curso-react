import { useState } from 'react'
import { Link } from 'react-router';
import './App.css'

function App() {

  return (
    <>
      <h1>TESTE</h1>
      <ul>
        <li><Link to="/cadastro">CADASTRO</Link></li>
        <li><Link to="/lista">LISTA</Link></li>
      </ul>
    </>
  )
}

export default App
