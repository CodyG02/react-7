import React, {useState} from 'react'

const Counter = (props) =>{
    const [count, setCount] = useState(0)
return (<div>
    <h1>{count}</h1>
    <button onClick={() => setCount(count + 1)} >Click me baby one more time</button>
    </div>
    )
}

export default Counter 