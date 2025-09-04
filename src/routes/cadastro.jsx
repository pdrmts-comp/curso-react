import { useState } from 'react'
import Navbar from '../components/navbar'

function Cadastro() {
    const [nextId, setNextId] = useState(() => Number(localStorage.getItem("nextId")) || 0)
    const [form, setForm] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()

        const newEntry = {
            id: nextId,
            name: e.target.nome.value,
            email: e.target.email.value
        };

        const savedForm = JSON.parse(localStorage.getItem("formData") || "[]")
        const updatedForm = [...savedForm, newEntry]

        setForm(updatedForm)
        localStorage.setItem("formData", JSON.stringify(updatedForm));

        setNextId(nextId + 1)
        localStorage.setItem("nextId", nextId + 1)

        alert("Formulário enviado!")
        e.target.reset()
        console.log(newEntry)
    }

    return (
        <>
            
        <Navbar/>

        <div className="max-w-sm rounded overflow-hidden shadow-xl bg-white p-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <p className='text-black'>PREENCHA O FORMULÁRIO:</p>
                <p><input required name="nome" className="text-black placeholder-gray-500 bg-white pl-2 border-b-2" placeholder="NOME"></input></p>
                <p><input required type='email' name="email" className="text-black placeholder-gray-500 bg-white pl-2 border-b-2" placeholder="EMAIL"></input></p>
                <button className="fixed-bottom-0 mt-10 hover:scale-105" type="submit">ENVIAR</button>
            </form>
        </div>
        </>
    )
}

export default Cadastro