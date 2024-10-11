import logo from './logo.svg';
import './App.css';
import Forms from './Components/Forms';


import Home from './pages/Home.jsx'
import Historia from './pages/Historia.jsx'
import Cadastro2 from './pages/Cadastro2.jsx'

import {BrowserRouter,Routes, Route} from 'react-router-dom'
import NavBar from './Components/NavBar.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
         <Route path="/" element={ <Home/>}/>
         <Route path="/Historia" element ={ <Historia/>}/>
         <Route path="/Cadastro2" element ={ <Cadastro2/>}/>
        </Routes>
      </BrowserRouter>
      
      <h1>ESTE TEXTO VAI FICAR EM BAIXO</h1>
    </div>
  );
}

export default App;
