import React, { useState } from "react";
import Error from "./Error";

function Pregunta({setPresupuesto, setPreguntaPresupuesto, setRestante}) {

  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  const handleChange = e => {
    setCantidad(parseInt(e.target.value, 10));
  }

  const handleSubmit = e => {
    e.preventDefault();

    
    if(cantidad <= 0 || isNaN(cantidad) ){
      setError(true);
      return;
    }

    setError(false);
    setPresupuesto(cantidad);
    setRestante(cantidad);
    setPreguntaPresupuesto(false);
  }

  return (
    <>
      <h2>Coloca tu Presupuesto</h2>
      {
        error && (
          <Error message="El Presupuesto es Incorrecto" />
        )
      }
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Agrega tu Presupuesto"
          value={cantidad}
          onChange={handleChange}
        />

        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir Presupuesto"
        />
      </form>
    </>
  );
}

export default Pregunta;