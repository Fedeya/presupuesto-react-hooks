import React, { useState } from "react";
import Error from "./Error";
import shortid from "shortid";

function Formulario({gastos, setGastos, restante, setRestante}) {

  const [gasto, setGasto] = useState({
    nombre: "",
    cantidad: 0,
  });
  const [error, setError] = useState(false);

  const handleChange = e => {
    setGasto({
      ...gasto,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();

    if(gasto.cantidad <= 0 || isNaN(gasto.cantidad) || gasto.nombre === ""){
      setError("Ambos campos son obligatorios");
      return;
    } else if(gasto.cantidad > restante) {
      setError("Tu gasto es mayor al restante");
      return;
    }


    setGasto({
      ...gasto,
      cantidad: parseInt(gasto.cantidad),
    })

    const newGastos = [...gastos, {
      ...gasto,
      id: shortid.generate()
    }];
    setGastos(newGastos);
    setError(false);
    setGasto({
      nombre: "",
      cantidad: ""
    })
    setRestante(restante - gasto.cantidad);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agrega tus Gastos Aqui</h2>
      {
        error && (
          <Error message={error} />
        )
      }
      <div className="campo">
        <label htmlFor="nombre">Nombre Gasto</label>
        <input 
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          id="nombre"
          value={gasto.nombre}
          name="nombre"
          onChange={handleChange}
        />
      </div>
      <div className="campo">
        <label htmlFor="cantidad">Cantidad Gasto</label>
        <input 
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          id="cantidad"
          value={gasto.cantidad}
          name="cantidad"
          onChange={handleChange}
        />
      </div>

      <input 
        type="submit"
        value="Agregar Gasto"
        className="button-primary u-full-width"
      />

    </form>
  )
}

export default Formulario;