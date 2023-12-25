import './App.css';
import { HeaderApp } from './parchales/HeaderApp';
import { FooterApp } from './parchales/FooterApp';
import Home from './pages/Home';

// Pages

function App() {
  return (
    <div className="App">
      <HeaderApp />
      <Home />
      <FooterApp />
    </div>
  );
}

export default App;
