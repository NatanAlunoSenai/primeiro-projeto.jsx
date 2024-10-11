import Carousel from 'react-bootstrap/Carousel';
//import ExampleCarouselImage from 'components/ExampleCarouselImage';

const MyCarousel = () => {
  return (
    <div>
        <Carousel fade>
      <Carousel.Item>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/800px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg' />
        <Carousel.Caption>
          <h3>The Goat - CR7 - Siii</h3>
          <p>O melhor do mundo graças a Deus pai,RECEBA</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://th.bing.com/th/id/R.da0552a8081ac3dd39d3a7cc78424b61?rik=WKvsLyqY0b9Plg&pid=ImgRaw&r=0" />
        <Carousel.Caption>
          <h3>Menino Ney</h3>
          <p>O menino Neymar , liso, the best, fiel, pai e ousado</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://th.bing.com/th/id/OIP.q7sfHQeSL7b6B5YehBQa1gHaEv?rs=1&pid=ImgDetMain" />
        <Carousel.Caption>
          <h3>Messi</h3>
          <p>Messi, sem muito mais o que falar</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    )
    }


 

export default MyCarousel;