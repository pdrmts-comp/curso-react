import { useState } from 'react'
import { Link } from 'react-router';


function Navbar() {
    return (
        <nav className='fixed top-0 left-0 w-full flex justify-start p-5'>
            <ul className=' font-bold flex gap-5 '>
                <li><Link to='/'>HOME</Link></li>
                <li><Link to='/cadastro'>CADASTRO</Link></li>
                <li><Link to='/lista'>LISTA</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar