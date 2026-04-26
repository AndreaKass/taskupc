import {react} from react;

export function TarjetaCard({tarea}){
    return(
        <div>
            <p>{tarea.titulo}</p>
            <p>{tarea.materia}</p>
            <div>
                {tarea.fecha}
                {tarea.estado?"Completado":"Pendiente"}
            </div>
        </div>
    );
}