function FiltroBar({ filtro, onFiltrar }) {
  return (
    <div>
      <button onClick={() => onFiltrar("todas")}>
        Todas
      </button>

      <button onClick={() => onFiltrar("pendientes")}>
        Pendientes
      </button>

      <button onClick={() => onFiltrar("completadas")}>
        Completadas
      </button>
    </div>
  );
}

export default FiltroBar;