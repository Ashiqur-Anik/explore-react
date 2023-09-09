import { useEffect, useState } from "react"

export default function users() {

    const [users, setUsears] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsears(data))
    }, [])

    return (
        <div>
            <h2>Users : {users.length}</h2>
        </div>
        
    )
}