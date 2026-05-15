import { Link } from "react-router-dom";
import { useTareas } from "../context/TareasContext";

function TareaCard({ tarea }) {
  const { toggleTarea } = useTareas();

  return (
    <div
      style={{
        opacity: tarea.completada ? 0.5 : 1,
        textDecoration:
          tarea.completada
            ? "line-through"
            : "none"
      }}
    >
      <h3>{tarea.titulo}</h3>
      <p>{tarea.materia}</p>

      <button
        onClick={() =>
          toggleTarea(tarea.id)
        }
      >
        Completar
      </button>

      <Link to={`/tarea/${tarea.id}`}>
        Ver detalle
      </Link>
    </div>
  );
}

export default TareaCard;