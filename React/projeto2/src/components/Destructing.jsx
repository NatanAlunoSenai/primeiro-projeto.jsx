

const Destructing = (
    {time, estado,posicao, campeao}
) => {
  return (
    <div>
    <hr/>
    <h2>O nome do time é: {time} </h2>
    <h2>O seu estado é: {estado} </h2>
    <h2>Sua posição no meu coração é: {posicao} </h2>
    {campeao && <h1> Este time é campeão </h1>}
    </div>
  )
}

export default Destructing