import logo from './logo.svg';
import './App.css';

import FirstComponent from './components/FirstComponent.jsx';
import TemplateExpressions from './components/TemplateExpressions.jsx';
import MyComponent from './components/MyComponent.jsx';

function App() {
  return (
  <div className='App'>
    <FirstComponent />
    <TemplateExpressions/>
    <MyComponent/>
  </div>
  );
}

export default App;
