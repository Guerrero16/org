import React from "react"

import "./Colaborador.css"
import { RiDeleteBin5Line, RiHeart3Line, RiHeart3Fill} from "react-icons/ri"

const Colaborador = (props) => {
    const { nombre, puesto, foto, equipo, id, fav} = props.datos
    const {colorPrimario,eliminarColaborador, like}= props
    return <div className="colaborador">
        <RiDeleteBin5Line className="eliminar" onClick={ () => eliminarColaborador(id)} />
        <div className="encabezado" style={{backgroundColor: colorPrimario}}>
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <RiHeart3Fill color="red" onClick={ () => like(id) }/> : <RiHeart3Line onClick={ () => like(id) } />}
            
           
        </div>
    </div>
}
export default Colaborador