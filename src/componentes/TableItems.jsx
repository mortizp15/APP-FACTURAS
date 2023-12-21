import PropTypes from 'prop-types';

export const TableItems = ({ titulo, objetos }) => {
  return (
    <>
      <h4 className="mt-4">{ titulo }</h4>
      <table className="table table-striped table-hover">
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
    </>
  );
};


TableItems.propTypes = {
  titulo: PropTypes.string.isRequired,
  objetos: PropTypes.array.isRequired
}