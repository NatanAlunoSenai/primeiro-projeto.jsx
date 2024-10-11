import React from 'react'

const Events = () => {
  const teste = () =>{
    console.log("Funcionou de novo")
  }
  return (
    <div>
        <h1>Um texto</h1>
        <button onClick={()=> console.log("Funcionou")}>Clica aqui</button>
        <br/>
        <button onClick={teste}>Clica aqui de novo</button>
    </div>
  )
}

export default Events