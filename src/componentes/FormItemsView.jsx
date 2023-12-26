import { useState } from "react";

export const FormItemsView = ({ handler }) => {
  // Estado de los valores del formulario
  const [valuesState, setValuesState] = useState({
    producto: "",
    precio: "",
    cantidad: "",
    IVA: 21,
  })

  // Desestructuracion de los campos del state "valuesState"
  const { producto, precio, cantidad, IVA } = valuesState

  // Cuando cambie el valor del form, se actualizan los valores correspondientes
  const onInputChange = ({ target: { name, value } }) => {
    setValuesState(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  // Evento que será llamado cuando se envie el formulario
  const onFacturaSubmit = (e) => {
    // Evitar enviar
    e.preventDefault()

    // Validaciones
    if (isNaN(precio.trim())) {
      alert('Error el precio no es un número (Si contiene decimales usa ".")');
      return
    }
    if (isNaN(cantidad.trim())) {
      alert("Error la cantidad no es un número");
      return
    }

    handler(valuesState)

    // Resetear valores
    setValuesState({
      producto: "",
      precio: "",
      cantidad: "",
      IVA: 21,
    })

  }

  return (
    <>
      <form className="w-50" onSubmit={onFacturaSubmit}>
        <h4>Añadir Producto</h4>
        <input
          type="text"
          name="producto"
          placeholder="Producto *"
          value={producto}
          className="form-control mb-3 mt-3"
          required
          onChange={onInputChange}
        />
        <input
          type="text"
          name="precio"
          placeholder="Precio *: Debe ser un número"
          value={precio}
          className="form-control mb-3"
          required
          onChange={onInputChange}
        />
        <input
          type="text"
          name="cantidad"
          placeholder="Cantidad *: Debe ser un número"
          value={cantidad}
          className="form-control mb-3"
          required
          onChange={onInputChange}
        />
        <select
          name="IVA"
          value={IVA}
          className="form-control mb-3 select"
          required
          onChange={onInputChange}
        >
          <option value="21">21%</option>
          <option value="10">10%</option>
          <option value="5">5%</option>
          <option value="4">4%</option>
          <option value="0">0%</option>
        </select>
        <input type="submit" value="Añadir" className="boton-guardar" />
      </form>
    </>
  );
};
