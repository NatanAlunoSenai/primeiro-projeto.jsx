import logo from './logo.svg';
import './App.css';

import FirstComponent from './components/FirstComponent.jsx';
import TemplateExpressions from './components/TemplateExpressions.jsx';
import MyComponent from './components/MyComponent.jsx';
import OutroComponent from './components/OutroComponent.jsx'
import Ney from './assets/neymar_jogador.Imagem02.jpg'
import ComponentORemake from './components/ComponentORemake.jsx'


function App() {
  const n = 15
  const classDiferente = true

  return (
  <div className='App'>
    <FirstComponent />
    <TemplateExpressions/>
    <MyComponent/>

    <ComponentORemake />
     
    <h1> Olha só o texto aqui </h1>

    {/*Css no proprio modulo */}

    <img src='./jogador_imagem01.webp' width={900} height={500}></img>
    
    <OutroComponent/>
    
      {/* css inline */ }
    <p style= {{color:"blue", padding:"25px", backgroundColor:"red", fontSize:"40px"}}>Este paragrafo é do App.jsx</p>
    
    <h3 style={n < 10 ? ({color:"green", backgroundColor:"Yellow"}) : ({color:"red", backgroundColor:"black"})} > AQUI TEM UM TEXTO COM O PRIMEIRO ESTILO </h3>
    {/*importação pela pasta public*/}
    
    <h3 style={n > 10 ? ({color:"green", backgroundColor:"Yellow"}) : ({color:"red", backgroundColor:"black"})} > AQUI TEM UM TEXTO COM O PRIMEIRO ESTILO </h3>

    <h2 className={classDiferente?"red-title" : "normal-title"}>Texto com classe diferente 01
    </h2>
    

    {/*importação pela pasta public*/}
    <img src={Ney} alt="Imagem do menino Ney no auge" width={900} height={500}></img>  

  </div>
  );
}

export default App;
