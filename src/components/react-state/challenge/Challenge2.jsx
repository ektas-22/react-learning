import React from 'react'
import './ch.css';

function Challenge2() {
    const result = React.useState("Yes")
    console.log(result)
  return (
    <main>
      <h1 className='title'>Is state important to know</h1>
      <button className='value'>{result[0]}</button>
    </main>
  )
}

export default Challenge2
