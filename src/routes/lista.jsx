import { useEffect, useState } from "react";
import Navbar from '../components/navbar';
import Card from '../components/card';
import LoadingDots from "../components/loadingDots";

function Lista() {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const savedForm = JSON.parse(localStorage.getItem('formData') || '[]')

        const fetchImages = async () => {
            const userImages = await Promise.all(
                savedForm.map(async (user) => {
                    try {
                        const response = await fetch(
                            `https://picsum.photos/seed/${user.id + 1}/300/200`
                        )
                        return { ...user, imageUrl: response.url }
                    }
                    catch (error) {
                        console.log("erro ao buscar imagem", error)
                        return { ...user, imageUrl: "" }
                    }
                })
            )

            setUsers(userImages)
            setLoading(false)
        }
        fetchImages()
    }, [])






    return (
        <>
            <Navbar />
            <div className="flex flex-wrap gap-6 p-6">
                {loading ? (
                    <LoadingDots />
                ) : (
                    users.map((user) => (
                        <Card
                            key={user.id}
                            id={user.id}
                            name={user.name}
                            email={user.email}
                            imageUrl={user.imageUrl}
                        />
                    ))
                )
                }
            </div>
        </>
    )
}

export default Lista