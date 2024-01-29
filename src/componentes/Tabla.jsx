import { useState } from "react";
import Articulos from "./Articulos";
import BarraBusqueda from "./BarraBusqueda";

export default function Tabla({articulos}){

    const[filterText,setFilterText] = useState("");

    return(
        <>
        <BarraBusqueda filterText={filterText} setFilterText={setFilterText}/>
        <Articulos articulos={articulos} filterText={filterText}/>
        </>
    )
}