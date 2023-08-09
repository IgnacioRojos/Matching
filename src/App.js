import './App.css';
import Testimonios from './Componentes/testimonios/Testimonios';
import Footer from './Componentes/footer/Footer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Matching</h1>
        <Testimonios/>
        
        <Footer/>
      </header>
    </div>
  );
}

export default App;
