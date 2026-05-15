import TareaCard from "./TareaCard";

function ListaTareas({ tareas }) {
  return (
    <div>
      {tareas.map(t => (
        <TareaCard
          key={t.id}
          tarea={t}
        />
      ))}
    </div>
  );
}

export default ListaTareas;
