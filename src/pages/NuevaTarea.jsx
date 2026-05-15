import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTareas } from "../context/TareasContext";

function NuevaTarea() {
  const { agregarTarea } = useTareas();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    titulo: "",
    materia: "",
    fecha: ""
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    agregarTarea(form);
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="titulo"
        placeholder="Título"
        onChange={handleChange}
      />

      <input
        name="materia"
        placeholder="Materia"
        onChange={handleChange}
      />

      <input
        type="date"
        name="fecha"
        onChange={handleChange}
      />

      <button>
        Guardar
      </button>
    </form>
  );
}

export default NuevaTarea;