import { useEffect, useState } from "react";
import Articulos from './componentes/Articulos';
import BarraBusqueda from './componentes/BarraBusqueda';
import Tabla from './componentes/Tabla';
import Cesta from './componentes/Cesta';

function App() {

  const URL_SERVER="http://3.92.168.139:3000/"

  const[filterText,setFilterText] = useState("");

    useEffect(()=>{

        fetch(URL_SERVER+`articulos?nombre_like=${filterText}`)
        .then(response=>{
            if(response.ok){
                return response.json();
            }else{
                throw new Error (response.status);
            }
        })
        .then((data)=>{
            setArticulosDisponibles(data);
        })
        .catch(error=>{
            console.log(error)
        })

    }, [filterText])
  
  const[articulosCesta,setArticulosCesta]= useState([])
  const[articulosDisponibles, setArticulosDisponibles] = useState([])

  return (
    <>
      <Cesta articulosCesta={articulosCesta} setArticulosCesta={setArticulosCesta} setArticulosDisponibles={setArticulosDisponibles} articulosDisponibles={articulosDisponibles}/>
      <Tabla setArticulosCesta={setArticulosCesta} 
      articulosCesta={articulosCesta} articulosDisponibles={articulosDisponibles} setArticulosDisponibles={setArticulosDisponibles} filterText={filterText} setFilterText={setFilterText}/>
    </>
  )
}

export default App
