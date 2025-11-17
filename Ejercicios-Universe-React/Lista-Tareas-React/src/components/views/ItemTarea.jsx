const ItemTarea = ({ tarea, borrarTarea }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      {tarea.texto}
      <button
        className="btn btn-danger btn-sm"
        onClick={() => borrarTarea(tarea.id)}
      >
        Borrar
      </button>
    </li>
  );
};

export default ItemTarea;
