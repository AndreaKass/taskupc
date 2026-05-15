 import { useState } from "react";
import { useTareas } from "../context/TareasContext";
import ListaTareas from "../components/ListaTarea";
import FiltroBar from "../components/FiltroBar";
import Header from "../components/Header";
function Inicio() {
  const { tareas } = useTareas();
  const [filtro, setFiltro] = useState("todas");
  const pendientes =()=>{
    return tareas.filter(tarea => !tarea.completada).length;
  };
  const tareasFiltradas = tareas.filter(t => {
    if (filtro === "pendientes") return !t.completada;
    if (filtro === "completadas") return t.completada;
    return true;
  });

  return (
    <div>
      <Header pendientes={pendientes()}/>
      <FiltroBar
        filtro={filtro}
        onFiltrar={setFiltro}
      />

      <ListaTareas tareas={tareasFiltradas} />
    </div>
  );
}

export default Inicio;
