import Navbar from '../components/navbar';

function Lista() {

    const savedForm = JSON.parse(localStorage.getItem('formData') || '[]');

    return (
        <>
            <Navbar/>
            <ul>
                {savedForm.map(item => (
                    <li key={item.id}>id: {item.id}, nome: {item.name},email: {item.email}</li>
                ))}
            </ul>
        </>
    )
}

export default Lista