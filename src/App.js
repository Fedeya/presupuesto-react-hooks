import React, { useState, useEffect } from 'react';
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import ControlPresupuesto from "./components/ControlPresupuesto";

function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [preguntaPresupuesto, setPreguntaPresupuesto] = useState(true);
  const [gastos, setGastos] = useState([]);

  return (
    <div className="App container">
      <header>
        <h1>Gasto Semanal</h1>
      </header>
      <div className="contenido-principal contenido">
        {
          preguntaPresupuesto ? (
            <Pregunta
              setPresupuesto={setPresupuesto}
              setPreguntaPresupuesto={setPreguntaPresupuesto}
              setRestante={setRestante}
            />
          ) :
            (
              <div className="row">
                <div className="one-half column">
                  <Formulario
                    gastos={gastos}
                    restante={restante}
                    setGastos={setGastos}
                    setRestante={setRestante}
                  />
                </div>
                <div className="one-half column">
                  <Listado gastos={gastos} />
                  <ControlPresupuesto
                    presupuesto={presupuesto}
                    restante={restante}
                  />
                </div>
              </div>
            )
        }
      </div>
    </div>
  )
}

export default App;
