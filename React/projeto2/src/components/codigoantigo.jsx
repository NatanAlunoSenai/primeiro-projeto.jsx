import './App.css';
import Destructing from './components/Destructing';
import Events from './components/Events';
import ListRender from './components/ListRender';
import NewStates from './components/NewStates';
import PropsTest from './components/PropsTest';

const codigoantigo = () => {
  return (
    <div>
     {/*Trabalhando com events */}
     <Events />
     {/*Uso do useState */}
     <NewStates />
     {/*Mostrando listas na tela */}
     <ListRender/>
     {/*Trabalhando com props */}
     <PropsTest name={nome}/>
     {/*Destructing*/}
     <Destructing time="São Paulo" estado= "SP" posicao={1} campeao={true}/>
     {/*reaproveitando components */}
     <Destructing time="Gama" estado= "DF" posicao={2} campeao={false} />
     <Destructing time="Vasco" estado= "RJ" posicao={1000} campeao={false}/>
    </div>

  )
}

export default codigoantigo