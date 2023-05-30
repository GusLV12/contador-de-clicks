import React from 'react';
import '../Style-sheet/Boton.css';

function Boton({texto, botonClick, manejarClick}){
    return(
        <button className={botonClick ? 'boton-click' : 'boton-reiniciar'}  onClick={manejarClick}>{texto}</button>
    )
}

export default Boton;