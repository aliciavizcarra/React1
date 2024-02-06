
export default function Cesta({articulosCesta, setArticulosCesta, setArticulosDisponibles, articulosDisponibles}){

    const eliminarArticulo = (articulo)=>{

        const nuevaCesta = articulosCesta.filter(item => item.codigo !== articulo.codigo);

  
        setArticulosCesta(nuevaCesta); 

  
        setArticulosDisponibles(articulosDisponibles.map(art => art.codigo === articulo.codigo ? {...art, unidades: art.unidades + 1} : art));

    }

    const total = articulosCesta.reduce((acc, articulo) => acc + articulo.precio, 0);

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
                    {articulosCesta.map((element,index)=>
                        <tr key={index}>
                            <td>{element.nombre}</td>
                            <td>{element.precio}</td>
                            <td>{element.unidades}</td>
                            <td><button onClick={()=> eliminarArticulo(element)}>Eliminar</button></td>
                        </tr>
                    )}
                </tbody>

                <tfoot>
                    <tr>
                        <td>Total</td>
                        <td>{total}</td>
                    </tr>
                </tfoot>

            </table>
        </>
    )




}