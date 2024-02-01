
export default function Cesta({articulosCesta}){


    return(
        
        <>
            <table>
                <thead>
                <tr>
                    <td>Nombre</td>
                    <td>Precio</td>
                    <td>Accion</td>
                </tr>
                </thead>

                <tbody>
                    {articulosCesta.map((element,index)=>
                        <tr key={index}>
                            <td>{element.nombre}</td>
                            <td>{element.precio}</td>
                        </tr>
                    )}
                </tbody>

            </table>
        </>
    )




}