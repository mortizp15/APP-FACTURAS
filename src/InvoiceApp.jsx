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
  const [ ivaValue, setIvaValue ] = useState(21)

  const [ items, setItems ] = useState(objetos)

  const [ counter, setCounter ] = useState(4)


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
            <form className="w-50" onSubmit={ e => {
              e.preventDefault()

              if(isNaN(precioValue)) {
                alert('Error el precio no es un número (Si contiene decimales use ".")')
                return
              }
              if(isNaN(cantidadValue)) {
                alert('Error la cantidad no es un número')
                return
              }
              console.log("Valor de IVA:", ivaValue)
              setItems([ ...items, { 
                id: counter, 
                producto: productoValue, 
                precio: +precioValue, 
                cantidad: parseInt(cantidadValue, 10), 
                IVA: parseInt(ivaValue, 10)
              }])

              setProductoValue('')
              setPrecioValue('')
              setCantidadValue('')
              setIvaValue('')
              setCounter(counter + 1)
              
            } }>
              <h4>Añadir Producto</h4>
              <input 
                type="text" 
                name="producto" 
                placeholder="Producto *"
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
                placeholder="Precio *: Debe ser un número"
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
                placeholder="Cantidad *: Debe ser un número"
                value={ cantidadValue }
                className="form-control mb-3"
                required
                onChange={ e => {
                  setCantidadValue(e.target.value)
                } }
              />
              <select 
                name="IVA" 
                className="form-control mb-3"
                required
                onChange={ e => {
                  console.log("Valor seleccionado:", e.target.value);
                  setIvaValue(e.target.value)
                } }
              >
                <option value="21">21%</option>
                <option value="10">10%</option>
                <option value="5">5%</option>
                <option value="4">4%</option>
                <option value="0">0%</option>                
              </select>
              <input 
                type="submit" 
                value='Crear'
                className="boton-guardar"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
