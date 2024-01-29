import BarraBusqueda from "./BarraBusqueda";

export default function Articulos({articulos, filterText}){

    const listas = articulos.map((element,index)=>
        <tr key={index}>
            <td>{element.nombre}</td>
            <td>{element.precio}</td>
            <td>{element.unidades}</td>
            <td><button>Comprar</button></td>
        </tr>
    )

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

                    {articulos.filter(element=> element.nombre.toLowerCase().includes(filterText.toLowerCase())).map((element,index)=>
                        <tr key={index}>
                            <td>{element.nombre}</td>
                            <td>{element.precio}</td>
                            <td>{element.unidades}</td>
                            <td><button>Comprar</button></td>
                        </tr>
                    )}

                </tbody>

            </table>
        </>
    )



}