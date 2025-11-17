import { useState } from "react";

///Este componente es el encargado de poner el form para la lista///

//se le pasa el parametro agregarTarea que viene del componente padre
const FormTarea = ({ agregarTarea }) => {

  //texto es lo que se escribe
  //setTexto es la funcion 
  //useState(" ") . Empieza vacio
  const [texto, setTexto] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (texto.trim() === "") return;

    agregarTarea(texto);

    setTexto("");
  
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-2">
      <input
        type="text"
        className="form-control"
        placeholder="Escribe una tarea..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button className="btn btn-primary">Agregar</button>
    </form>
  );
};

export default FormTarea;