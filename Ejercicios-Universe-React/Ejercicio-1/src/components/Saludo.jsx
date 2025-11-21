import React, { useState } from 'react'

const Saludo = ({nombre, apellido, palabra}) => {
    const [msj, setMsj] = useState("Hello My friend")

    const cambiarMsj = () => {
    setMsj(msj === "Hello My friend" ? "Hello My Friend (from changed state)" : "Hello My friend");
  };

  return (
        <div className='container text-center  '>
            <h1 className='display-5 my-4'>Hola Mundo</h1>
            <h2>Hello {palabra} !</h2>
            <h2>Hola {nombre} {apellido} 👋</h2>
            <h2 className='mt-5'>{msj}</h2> 
            <button className='btn btn-success' onClick={cambiarMsj}>cambiar</button>
        </div>
    
  )
}

export default Saludo
