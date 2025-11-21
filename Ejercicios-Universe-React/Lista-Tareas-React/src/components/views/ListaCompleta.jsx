import { useState } from "react";
import FormTareas from "./FormTareas"
import ListaTarea from "./ListaTarea";

function ListaCompleta() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (texto) => {
    setTareas([...tareas, { id: Date.now(), texto }]);
  };

  const borrarTarea = (id) => {
    setTareas(tareas.filter((t) => t.id !== id));
  };

  return (
    <div className="container mt-5">
      <h1>To Do List</h1>

      <FormTareas agregarTarea={agregarTarea} />

      <ListaTarea tareas={tareas} borrarTarea={borrarTarea} />
    </div>
  );
}

export default ListaCompleta;