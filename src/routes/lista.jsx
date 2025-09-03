import { useState } from 'react'
import { Link } from 'react-router';

function Lista() {

    const savedForm = JSON.parse(localStorage.getItem('formData') || '[]');

    return (
        <>
            <nav className='fixed top-0 left-0 w-full flex justify-start p-5'>
                <ul className=' font-bold '>
                    <li><Link to='/'>VOLTAR</Link></li>
                </ul>
            </nav>

            <ul>
                {savedForm.map(item => (
                    <li key={item.id}>id: {item.id}, nome: {item.name},email: {item.email}</li>
                ))}
            </ul>
        </>
    )
}

export default Lista