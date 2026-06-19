import React from 'react'
import './ch.css';

function Challenge2() {
    const [result, setResult] = React.useState("Yes")
    // console.log(result)
    function handleClick(){
      setResult("Yeah");
    }
  return (
    <main>
      <h1 className='title'>Is state important to know</h1>
      <button className='value' onClick={handleClick}>{result}</button>
    </main>
  )
}

export default Challenge2
