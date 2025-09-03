import { useState } from 'react'
import { Link } from 'react-router';

function Cadastro() {
    const [nextId, setNextId] = useState(0)
    const [form, setForm] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault()

        const newEntry = {
            id: nextId,
            name: e.target.nome.value,
            email: e.target.email.value
        }

        setNextId(nextId + 1)

        const updatedForm = [...form, newEntry]
        setForm(updatedForm)
        localStorage.setItem('formData', JSON.stringify(updatedForm))

        alert("Formulário enviado!")

        e.target.reset()

        console.log(newEntry) 
    }



    return (
        <>

            <nav className='fixed top-0 left-0 w-full flex justify-start p-5'>
                <ul className=' font-bold '>
                    <li><Link to='/'>VOLTAR</Link></li>
                </ul>
            </nav>


            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <p><input  name="nome" className="text-black placeholder-gray-500 bg-white" placeholder="NOME"></input></p>
                <p><input type='email' name="email" className="text-black placeholder-gray-500 bg-white" placeholder="EMAIL"></input></p>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Cadastro