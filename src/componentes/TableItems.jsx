import PropTypes from 'prop-types';

export const TableItems = ({ titulo, objetos, total, totalSinIva }) => {

  return (
    <>
  
      <table className="table table-striped border mt-4">
        <thead>
          <tr>
            <th>CONCEPTO</th>
            <th>PRECIO UNIDAD</th>
            <th>CANTIDAD</th>
            <th>IMPORTE (SIN IVA)</th>
            <th>% IVA</th>
            <th>TOTAL</th>
          </tr>
        </thead>
        <tbody>
          {objetos.map(({ id, producto, precio, cantidad, IVA }) => (
            <tr key={id} >
              <td>{producto}</td>
              <td>{precio} €</td>
              <td>{cantidad}</td>
              <td>{ (precio * cantidad) } €</td>
              <td>{IVA} %</td>
              <td>{ (precio * cantidad + (precio * cantidad * IVA / 100))} €</td>
            </tr>
          ))}
          <tr>
            <td><strong>Totales</strong></td>
            <td colSpan="2"></td>
            <td><strong>{ (totalSinIva) } €</strong></td>
            <td colSpan="1"></td>
            <td><strong>{ (total) } €</strong></td>
          </tr>
        </tbody>
      </table>
    </>
  );
};


TableItems.propTypes = {
  titulo: PropTypes.string.isRequired,
  objetos: PropTypes.array.isRequired,
}