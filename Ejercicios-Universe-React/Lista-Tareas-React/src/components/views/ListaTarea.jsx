import ItemTarea from "./ItemTarea";

const ListaTarea = ({ tareas, borrarTarea }) => {
  return (
    <ul className="list-group mt-3">
      {tareas.map((t) => (
        <ItemTarea key={t.id} tarea={t} borrarTarea={borrarTarea} />
      ))}
    </ul>
  );
};

export default ListaTarea;