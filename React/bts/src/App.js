import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/MyNavBar';
import MyButton from './components/MyButton';
import MyCard from './components/MyCard';
import MyCarousel from './components/MyCarousel';
import MyAlert from './components/MyAlert';
import MyModal from './components/MyModal';
import MyLogin from './components/MyLogin';
import MyCadastro from './components/MyCadastro';


function App() {
  return (
    <div className="App">
      <MyNavBar/>
      <MyLogin/>
      <MyCadastro/>
      {/* <MyAlert/>
      <MyButton/>
      <MyCard/>
      <MyCarousel/>
      <MyModal/> */}
    </div>
  );
}

export default App;
