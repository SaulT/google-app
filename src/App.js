import logo from './googlelogo.png';
import './App.css';

function App() {
  return (
    <div className="main">
      <div className="divLogo">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="divBusqueda">
        <input className="textoBuscar"></input>
      </div>
      <div className="divBotones">
        <button className="botonGris">Buscar con Google</button>
        <button className="botonGris">Me siento con suerte</button>
      </div>
      <div className="divIdioma">
        Ofrecido por Google en:  <a href="#">English</a>    <a href="#">Quechua</a> 
      </div>
    </div>
  );
}

export default App;
