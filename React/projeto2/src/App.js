
import { useState } from 'react';
import './App.css';
import Destructing from './components/Destructing';
import Events from './components/Events';
import ListRender from './components/ListRender';
import NewStates from './components/NewStates';
import PropsTest from './components/PropsTest';
import Singers from './components/Singers';


function App() {
  const nome = "José Rodrigo"

  const [cantores] = useState([
    {id:1,name:"Michael Jaschon", gender:"Pop",winner:true,position:1},
    {id:2,name:"Taylor Swift", gender:"Country",winner:true,position:2},
    {id:3,name:"Alceu Valença", gender:"Forró",winner:false,position:1000},
  ])

  return (
    <div className="App">
      {
        cantores.map(
          (cantor) => (
            <Singers
            key={cantor.id}
            name={cantor.name} 
            gender={cantor.gender} 
            winner={cantor.winner} 
            position={cantor.position}
            />
        
        ) ) }
    </div>
  );
}

export default App;
