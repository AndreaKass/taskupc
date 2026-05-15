import { Routes, Route, Link } from "react-router-dom";
import Inicio from "./pages/Inicio";
import NuevaTarea from "./pages/NuevaTarea";
import DetalleTarea from "./pages/DetalleTarea";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Inicio</Link> |{" "}
        <Link to="/nueva">Nueva tarea</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nueva" element={<NuevaTarea />} />
        <Route path="/tarea/:id" element={<DetalleTarea />} />
      </Routes>
    </div>
  );
}

export default App;