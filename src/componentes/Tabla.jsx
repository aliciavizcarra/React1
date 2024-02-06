import Articulos from "./Articulos";
import BarraBusqueda from "./BarraBusqueda";

export default function Tabla({setArticulosCesta,articulosCesta, articulosDisponibles, setArticulosDisponibles, filterText, setFilterText}){

    
    return(
        <>
        <BarraBusqueda filterText={filterText} setFilterText={setFilterText}/>
        <Articulos articulosDisponibles={articulosDisponibles} filterText={filterText} setArticulosCesta={setArticulosCesta} articulosCesta={articulosCesta} setArticulosDisponibles={setArticulosDisponibles}/>
        </>
    )
}