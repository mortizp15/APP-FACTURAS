import { getFactura } from "./helpers/getFactura";
import { ClientDetails } from "./componentes/ClientDetails";
import { CompanyDetails } from "./componentes/CompanyDetails";
import { Details } from "./componentes/InvoiceDetails";
import { TableItems } from "./componentes/TableItems";
import { useEffect, useState } from "react";

const facturaInicial = {
  id: 0,
  concepto: "",
  formaDePago: "",
  cliente: {
    nombre: "",
    apellido: "",
    direccion: {
      pais: "",
      ciudad: "",
      calle: "",
      numero: 0,
    },
  },
  empresa: {
    nombre: "",
    NIF: 0,
  },
  objetos: [],
}

export const InvoiceApp = () => {
  const [factura, setFactura] = useState(facturaInicial);

  useEffect( () => {
    const data = getFactura()    
    setFactura( data )
    setItems( data.objetos)
  }, [] )

  const {
    id,
    concepto,
    formaDePago,
    cliente,
    empresa,
    objetos,
    total,
    totalSinIva,
  } = factura

  const [valuesState, setValuesState] = useState({
    producto: "",
    precio: "",
    cantidad: "",
    IVA: 21,
  })

  const { producto, precio, cantidad, IVA: iva } = valuesState;

  const [items, setItems] = useState([]);

  const [counter, setCounter] = useState(4);

  const onInputChange = ({ target: { name, value } }) => {
    setValuesState({
      ...valuesState,
      [name]: value,
    });
  };

  const onFacturaSubmit = (e) => {
    e.preventDefault();

    if (isNaN(precio.trim())) {
      alert('Error el precio no es un número (Si contiene decimales usa ".")');
      return;
    }
    if (isNaN(cantidad.trim())) {
      alert("Error la cantidad no es un número");
      return;
    }
    setItems([
      ...items,
      {
        id: counter,
        producto: producto,
        precio: +precio,
        cantidad: parseInt(cantidad, 10),
        IVA: parseInt(iva, 10) || 0,
      },
    ]);

    setValuesState({
      producto: "",
      precio: "",
      cantidad: "",
      IVA: 21,
    });
    setCounter(counter + 1);
  };

  return (
    <>
      <div className="container">
        <div className="card mt-3">
          <div className="card-header">Ejemplo Factura</div>
          <div className="card-body">
            <Details id={id} concepto={concepto} formaDePago={formaDePago} />
            <div className="row">
              <div className="col">
                <ClientDetails cliente={cliente} titulo="Datos del cliente" />
              </div>
              <div className="col">
                <CompanyDetails
                  empresa={empresa}
                  titulo="Datos de la empresa"
                />
              </div>
            </div>
            <TableItems
              titulo="Concepto"
              objetos={items}
              total={total}
              totalSinIva={totalSinIva}
            />
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
                className="form-control mb-3"
                required
                onChange={onInputChange}
              >
                <option value="21">21%</option>
                <option value="10">10%</option>
                <option value="5">5%</option>
                <option value="4">4%</option>
                <option value="0">0%</option>
              </select>
              <input type="submit" value="Crear" className="boton-guardar" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
