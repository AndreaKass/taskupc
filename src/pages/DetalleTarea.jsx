import { useParams, useNavigate } from "react-router-dom";
import { useTareas } from "../context/TareasContext";

function DetalleTarea() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    tareas,
    eliminarTarea
  } = useTareas();

  const tarea = tareas.find(
    t => t.id === Number(id)
  );

  function borrar() {
    eliminarTarea(id);
    navigate("/");
  }

  if (!tarea) return <h2>No existe</h2>;

  return (
    <div>
      <h2>{tarea.titulo}</h2>
      <p>{tarea.materia}</p>
      <p>{tarea.fecha}</p>

      <button onClick={borrar}>
        Eliminar
      </button>
    </div>
  );
}

export default DetalleTarea;