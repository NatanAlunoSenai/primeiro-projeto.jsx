import { useState } from "react"

const NewStates = () => {
  let valor = 10
  console.log(valor)


  const [number, setNumber] = useState(0)
  console.log(number)
  return (
    <div>
        {/* Variaveis padrão */}
        <p>Valor: {valor}</p>
        <button onClick={() =>(valor = 20)}>Mudar valor
        </button>

        {/*Variaveis com useStart */}
        <p>Valor com useState: {number}</p>
        <button onClick={() =>(setNumber(number + 15))}>Aumentar o valor</button>
    </div>
  )
}

export default NewStates