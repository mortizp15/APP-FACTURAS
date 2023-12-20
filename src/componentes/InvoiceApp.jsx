import { getFactura } from "../helpers/getFactura";

export const InvoiceApp = () => {
  const { id, concepto, formaDePago, cliente, empresa, objetos } = getFactura();
  const { nombre, apellido, direccion } = cliente;
  const { pais, ciudad, calle, numero } = direccion;

  return (
    <>
      <div className="container">
        <div className="card mt-5">
          <div className="card-header">Ejemplo Factura</div>
          <div className="card-body">
            <ul className="list-group">
              <li className="list-group-item">
                <strong>ID:</strong> {id}
              </li>
              <li className="list-group-item">
                <strong>Concepto:</strong> {concepto}
              </li>
              <li className="list-group-item">
                <strong>Forma de Pago:</strong> {formaDePago}
              </li>
            </ul>
            <div className="row">
              <div className="col">
                <h5 className="mt-4">Datos Cliente</h5>
                <ul className="list-group ">
                  <li className="list-group-item active">
                    <strong>Nombre:</strong> {nombre} {apellido}
                  </li>
                  <li className="list-group-item">
                    <strong>Dirección:</strong> {pais} - {ciudad} - {calle} /{" "}
                    {numero}
                  </li>
                </ul>
              </div>
              <div className="col">
              <h5 className="mt-4">Datos Empresa</h5>
                <ul className="list-group">
                  <li className="list-group-item active">
                    <strong>Nombre:</strong> {empresa.nombre}
                  </li>
                  <li className="list-group-item">
                    <strong>NIF:</strong> {empresa.NIF}
                  </li>
                </ul>
              </div>
            </div>
            <table className="table table-striped table-hover mt-4">
              <thead>
                <tr>
                  <th>PRODUCTO</th>
                  <th>PRECIO</th>
                  <th>CANTIDAD</th>
                  <th>% IVA</th>
                </tr>
              </thead>
              <tbody>
                {objetos.map(({ id, producto, precio, cantidad, IVA }) => (
                  <tr key={id}>
                    <td>{producto}</td>
                    <td>{precio} €</td>
                    <td>{cantidad}</td>
                    <td>{IVA} %</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
