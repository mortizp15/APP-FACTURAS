import {
  getFactura,
  calcularTotal,
  calcularTotalSinIva,
} from "./helpers/getFactura";
import { ClientDetails } from "./componentes/ClientDetails";
import { CompanyDetails } from "./componentes/CompanyDetails";
import { Details } from "./componentes/InvoiceDetails";
import { TableItems } from "./componentes/TableItems";
import { useEffect, useState } from "react";
import { FormItemsView } from "./componentes/FormItemsView";

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
};

export const InvoiceApp = () => {
  const [active, setActive] = useState(false);

  // Estados para recalcular totales
  const [calcTotal, setCalcTotal] = useState(0);

  const [calcTotalIva, setCalcTotalIva] = useState(0);

  // Contador para generar IDs autoincrementales
  const [counter, setCounter] = useState(4);

  // Estado de la factura (objeto facturaInicial por defecto)
  const [factura, setFactura] = useState(facturaInicial);

  // Estado para los objetos que hay dentro de la factura
  const [items, setItems] = useState([]);

  // Desestructuracion de la factura (objeto facturaInicial delcarado por defecto)
  const { id, concepto, formaDePago, cliente, empresa } = factura;

  // Obtener la factura
  useEffect(() => {
    const data = getFactura();
    setFactura(data);
    setItems(data.objetos);
  }, []);

  useEffect(() => {
    setCalcTotal(calcularTotalSinIva(items));
    setCalcTotalIva(calcularTotal(items));
  }, [items]);

  // Evento que será llamado cuando se envie el formulario
  const handlerAddObjetos = ({ producto, precio, cantidad, IVA }) => {
    // Crear objeto
    setItems([
      ...items,
      {
        id: counter,
        producto: producto,
        precio: +precio,
        cantidad: parseInt(cantidad, 10),
        IVA: parseInt(IVA, 10) || 0,
      },
    ]);

    // Aumentar ID para el siguiente
    setCounter(counter + 1);
  };

  const handlerDelete = (id) => {
    setItems(items.filter( item => item.id !== id ))
  }

  const onActivarForm = () => {
    setActive(!active);
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
              objetos={items}
              total={calcTotalIva.toFixed(2)}
              totalSinIva={calcTotal.toFixed(2)}
              handlerDelete={ id => handlerDelete(id) }
            />
            <div className="d-flex align-items-center justify-content-between">
              <button className="boton-guardar" onClick={onActivarForm}>
                {!active ? "+ Añadir Concepto" : "Volver"}
              </button>

              {!active ? "" : <FormItemsView handler={handlerAddObjetos} />}

              <button className="boton-descargar">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-arrow-down-circle"
                  viewBox="0 0 19 19"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"
                  />
                </svg>
                {" Descargar PDF"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
