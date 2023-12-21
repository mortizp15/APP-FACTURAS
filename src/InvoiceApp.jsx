import { getFactura } from "./helpers/getFactura";
import { ClientDetails } from "./componentes/ClientDetails";
import { CompanyDetails } from "./componentes/CompanyDetails";
import { Details } from "./componentes/InvoiceDetails";
import { TableItems } from "./componentes/TableItems";
import { Total } from "./componentes/Total";


export const InvoiceApp = () => {
  
  const { id, concepto, formaDePago, cliente, empresa, objetos, total, totalSinIva } = getFactura();

  return (
    <>
      <div className="container">
        <div className="card mt-5">
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
              objetos={ objetos }
            />
            <Total 
              total={ total }
              totalSinIva={ totalSinIva }  
            />

          </div>
        </div>
      </div>
    </>
  );
};
