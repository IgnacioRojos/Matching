import './App.css';
<<<<<<< HEAD
import Testimonios from './Componentes/testimonios/Testimonios';
import Footer from './Componentes/footer/Footer';
=======
import Footer from "./Componentes/footer/Footer"
import HeadingBanner from "./Componentes/headingBanner/HeadingBanner"
>>>>>>> 64454fa8916064483b41ffe0eb626df1e3aa39f3
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <h1>Matching</h1>
        <Testimonios/>
        
        <Footer/>
      </header>
      */}
      <HeadingBanner src={"./oskar-hagberg-0mANKAqH87U-unsplash.png"} title={" deportistas, compitiendo juntos"} text={"¡Conéctate con deportistas y logra tu máximo rendimiento! Nuestra plataforma innovadora permite detectar habilidades, formar equipos equitativos y disfrutar de eventos deportivos emocionantes. Acumula puntos en cada participación y canjéalos por atractivos descuentos en marcas destacadas. Únete a diversos clubes y reserva canchas fácilmente ¡Vive una experiencia integral para los entusiastas del deporte!"}></HeadingBanner>
    </div>
  );
}

export default App;
