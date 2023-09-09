import { useState } from "react"

export default function counter() {

    const [counter, setCounter] = useState(0);

    const handelAdd = () => {
        const newCount = counter + 1;
        setCounter(newCount);
    }
    const handelRemove = () => {
        setCounter(counter-1)
    }


    const counterStyle = {
        border: '2px solid red',
        padding: '20px',
        borderRadius: '15px',

    }
    return (
        <div style={counterStyle}>
            <h3>Counter {counter}</h3>
            <button onClick={handelAdd}>Add </button>
            <button onClick={handelRemove}>Remove</button>
        </div>
    )
}