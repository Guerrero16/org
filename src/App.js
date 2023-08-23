import React from 'react';
import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/formulario/formulario';
import MiOrg from './componentes/MiOrg';


function App() {
  const [mostrarFormulario,actualizarMostrar] = useState(true)
  //ternario --> condicion ? seMuestra : noSeMuestra
  //condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  return (
    <div>
      <Header />
      {/* {mostrarFormulario ? <Formulario /> : <></>} */}
      {mostrarFormulario && <Formulario />}
      <MiOrg cambiarMostrar={cambiarMostrar} />
     
    </div>
  );
}

export default App;
