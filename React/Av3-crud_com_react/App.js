
import './App.css';

//Importar o bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Importar gerenciador de rotas
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Importar paginas

//import Login from "./pages/login.jsx"
//import Produtos from "./pages/Produtos.jsx"
//import Cadastro de Produtos from "./pages/Cadastro_de_Produtos"

//import NavBarra from "./components/NavBarra.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBarra />
        <Routes>
          <Route path='/Cadastro' element={<Home />} />
          <Route path='/login' element={<Cadastro />} />
          <Route path='/Produtos' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
