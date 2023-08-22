import React from "react"
import "./formulario.css"
import CampoTexto from "../CampoTexto/Index"
import ListaOpciones from "../ListaOpciones/Index"
import Boton from "../Boton/Index"

const Formulario = () => {
const manejarEnvio = (e) => {
    e.preventDefault()
    console.log("Maneja el envio", e);
}

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresar nombre" required/>
            <CampoTexto titulo="Puesto" placeholder="Ingresar puesto" required/>
            <CampoTexto titulo="Foto" placeholder="Ingresar enlace de foto" required/>
            <ListaOpciones />
            <Boton>
               Crear  
            </Boton>
        </form>
    </section>

}
export default Formulario