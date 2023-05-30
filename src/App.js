
import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/contador';
import { useState } from 'react';
// import Logo from './img/logo-contador-clicks.png';

function App() {

  const [numClicks,setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks+1);
    console.log("click");
  };

  const reiniciarContador = () =>{
    setNumClicks(0);
    console.log("Reiniciar");
  };

  return (
    <div className='App'>
      <div className='logo-contenedor'>
      {/* <img className='logo' src={Logo} alt='logo'></img> */}
      <p className='logo'>Contador de Clicks</p>
      <div className='contenedor-prinicipal'>
        <Contador 
        numClick={numClicks}/>
        <Boton 
        texto='click'
        botonClick={true}
        manejarClick={manejarClick}/>
        <Boton 
        texto='Reiniciar'
        botonClick={false}
        manejarClick={reiniciarContador}/>
      </div>
      </div>
      
    </div>
  );
}

export default App;
