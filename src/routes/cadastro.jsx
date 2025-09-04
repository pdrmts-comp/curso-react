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
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <p><input required name="nome" className="text-black placeholder-gray-500 bg-white" placeholder="NOME"></input></p>
                <p><input required type='email' name="email" className="text-black placeholder-gray-500 bg-white" placeholder="EMAIL"></input></p>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Cadastro