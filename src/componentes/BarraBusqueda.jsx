
export default function BarraBusqueda({filterText, setFilterText}){

    return(
        <form>
            <input type="text" placeholder="Buscar..." value={filterText} 
            onChange={(e=> setFilterText(e.target.value))}/>
        </form>
    )

}