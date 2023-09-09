import { useEffect, useState } from 'react';
import './friendes.css'
import Friende from './friende';

export default function friends(){

    const [friendes,setFriends] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setFriends(data))
    },[]);   

    return(
        <div className='box'> 
            <h1>friends : {friendes.length}</h1>
            {
                friendes.map(friende => <Friende friende={friende}></Friende>)
            }
        </div>
    )
}