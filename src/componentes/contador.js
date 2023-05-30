import React from 'react';
import '../Style-sheet/Contador.css';

function Contador({numClick}){
    return(
        <div className='contador'>
            {numClick}
        </div>
    );
}

export default Contador;