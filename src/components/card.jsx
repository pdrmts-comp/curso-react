function Card({ id, name, email, imageUrl }) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-xl bg-white p-8">
            {imageUrl && (
                <img
                    src={imageUrl}
                    alt={name}
                    className="w-full h-40 object-cover"
                />
            )}
            <div className="flex flex-col text-black mt-10 gap-1">
                <p>ID: {id}</p>
                <p>NOME: {name}</p>
                <p>EMAIL: {email}</p>
            </div>
        </div>
    )
}

export default Card