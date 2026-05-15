import { createContext, useContext, useEffect, useState } from "react";
import { tareasIniciales } from "../data/tareas";

const TareasContext = createContext();

export function TareasProvider({ children }) {

  const [tareas, setTareas] = useState(() => {
    const guardadas = localStorage.getItem("taskupc");
    return guardadas ? JSON.parse(guardadas) : tareasIniciales;
  });

  useEffect(() => {
    localStorage.setItem("taskupc", JSON.stringify(tareas));
  }, [tareas]);

  function toggleTarea(id) {
    setTareas(prev =>
      prev.map(t =>
        t.id === id
          ? { ...t, completada: !t.completada }
          : t
      )
    );
  }

  function agregarTarea(nueva) {
    setTareas(prev => [
      ...prev,
      {
        ...nueva,
        id: Date.now(),
        completada: false
      }
    ]);
  }

  function eliminarTarea(id) {
    setTareas(prev =>
      prev.filter(t => t.id !== Number(id))
    );
  }

  return (
    <TareasContext.Provider
      value={{
        tareas,
        toggleTarea,
        agregarTarea,
        eliminarTarea
      }}
    >
      {children}
    </TareasContext.Provider>
  );
}

export function useTareas() {
  return useContext(TareasContext);
}