import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MyCard = () => {
  return (
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://th.bing.com/th/id/R.920755c8e00602141d80cdf06dee3be7?rik=7rXqp8Mi4Aii%2bA&pid=ImgRaw&r=0" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        Em primeiro lugar, para aprender o que tem no miojo precisa-se conhecer melhor esse alimento. Nesse sentido, também chamado de macarrão instantâneo ou massa instantânea, trata-se de um prato típico da culinária japonesa. Desse modo, basicamente consiste em um macarrão pré-cozido que se prepara por meio do acréscimo de água fervida.

        No geral, o brasileiro conhece o produto pela marca Miojo, que também gera o nome mais comum. Sobretudo, o rápido preparo por causa do pré-cozimento durante a fabricação é a principal característica. Desse modo, o macarrão instantâneo ao ser cozido perde a água e torna-se mais fácil de prepará-lo.

        A princípio, compreende-se que o primeiro macarrão instantâneo surgiu na China durante o século XVI. Apesar disso, a autoria do miojo parte de Momofuku Ando, original de Taiwan em 1910 durante a ocupação japonesa. Em resumo, a necessidade de fabricar alimentos de baixo custo e de fácil preparo surgiu no contexto da fome durante a guerra.

        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      
      
    </Card>
    </div>
  )
}

export default MyCard