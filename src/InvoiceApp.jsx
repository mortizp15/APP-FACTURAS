import { getFactura } from "./helpers/getFactura";
import { ClientDetails } from "./componentes/ClientDetails";
import { CompanyDetails } from "./componentes/CompanyDetails";
import { Details } from "./componentes/InvoiceDetails";
import { TableItems } from "./componentes/TableItems";
import { useState } from "react";


export const InvoiceApp = () => {
  
  const { id, concepto, formaDePago, cliente, empresa, objetos, total, totalSinIva } = getFactura();

  const [ productoValue, setProductoValue ] = useState('')
  const [ precioValue, setPrecioValue ] = useState('')
  const [ cantidadValue, setCantidadValue ] = useState('')
  const [ ivaValue, setIvaValue ] = useState('')
  const [ items, setItems ] = useState(objetos)


  return (
    <>
      <div className="container">
        <div className="card mt-3">
          <div className="card-header">Ejemplo Factura</div>
          <div className="card-body">
            <Details 
              id={ id }
              concepto={ concepto }
              formaDePago={ formaDePago }
            />
          <div className="row">
              <div className="col">
                <ClientDetails 
                  cliente={ cliente }
                  titulo='Datos del cliente'
                />
              </div>
              <div className="col">
              
                <CompanyDetails 
                  empresa={ empresa }
                  titulo='Datos de la empresa'
                  />
              </div>
            </div>
            <TableItems
              titulo='Productos'
              objetos={ items }
              total={ total }
              totalSinIva={ totalSinIva }
            />
            <form className="w-75" onSubmit={ e => {
              e.preventDefault()
              setItems([ ...items, { 
                id: 4, 
                producto: productoValue, 
                precio: +precioValue, 
                cantidad: +cantidadValue, 
                IVA: +ivaValue
              }])

              setProductoValue('')
              setPrecioValue('')
              setCantidadValue('')
              setIvaValue('')
              
            } }>
              <h4>Añadir Producto</h4>
              <input 
                type="text" 
                name="producto" 
                placeholder="Producto"
                value={ productoValue }
                className="form-control mb-3 mt-3"
                required
                onChange={ e => {
                  setProductoValue(e.target.value)
                } }
              />
              <input 
                type="text" 
                name="precio" 
                placeholder="Precio"
                value={ precioValue }
                className="form-control mb-3"
                required
                onChange={ e => {
                  setPrecioValue(e.target.value)
                } }
              />
              <input 
                type="text" 
                name="cantidad" 
                placeholder="Cantidad"
                value={ cantidadValue }
                className="form-control mb-3"
                required
                onChange={ e => {
                  setCantidadValue(e.target.value)
                } }
              />
              <input 
                type="number" 
                name="IVA" 
                placeholder="% de IVA"
                value={ ivaValue }
                className="form-control mb-3"
                required
                onChange={ e => {
                  setIvaValue(e.target.value)
                } }
              />
              <input 
                type="submit" 
                value='Guardar'
                className="boton-guardar"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
