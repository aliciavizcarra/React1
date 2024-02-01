import { useState } from "react";
import Articulos from "./Articulos";
import BarraBusqueda from "./BarraBusqueda";

export default function Tabla({setArticulosCesta,articulosCesta, articulosDisponibles, setArticulosDisponibles}){

    const[filterText,setFilterText] = useState("");

    return(
        <>
        <BarraBusqueda filterText={filterText} setFilterText={setFilterText}/>
        <Articulos articulosDisponibles={articulosDisponibles} filterText={filterText} setArticulosCesta={setArticulosCesta} articulosCesta={articulosCesta} setArticulosDisponibles={setArticulosDisponibles}/>
        </>
    )
}