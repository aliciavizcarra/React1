import BarraBusqueda from "./BarraBusqueda";

export default function Articulos({articulosDisponibles, filterText, setArticulosCesta, setArticulosDisponibles, articulosCesta}){


    const agregarArticulo = (articulo)=>{

        const articuloBuscado = articulosCesta.find(element => {
                return element.id === articulo.id 
        });

        if(articuloBuscado){
            
        }

        const articuloCesta={
            id: articulo.id,
            nombre: articulo.nombre,
            precio: articulo.precio,
        }

        setArticulosCesta((previusState)=>[...previusState,articuloCesta]);
        setArticulosDisponibles(articulosDisponibles.map(art => art.codigo === articuloCesta.codigo ? {...art,unidades: art.unidades-1}: art));
    }

    return(
        
        <>
            <table>

                <thead>
                <tr>
                    <td>Nombre</td>
                    <td>Precio</td>
                    <td>Unidades</td>
                    <td>Accion</td>
                </tr>
                </thead>

                <tbody>
                    {articulosDisponibles.map((element,index)=>
                        <tr key={index}>
                            <td>{element.nombre}</td>
                            <td>{element.precio}</td>
                            <td>{element.unidades}</td>
                            <td><button onClick={()=> agregarArticulo(element)}>Comprar</button></td>
                        </tr>
                    )}

                </tbody>

            </table>
        </>
    )



}