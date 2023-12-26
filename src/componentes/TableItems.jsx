import PropTypes from 'prop-types';
import { useState } from 'react';

export const TableItems = ({ objetos, total, totalSinIva, handlerDelete }) => {

  const [items, setItems] = useState(objetos)

  return (
    <>
  
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>CONCEPTO</th>
            <th>PRECIO UNIDAD</th>
            <th>CANTIDAD</th>
            <th>IMPORTE (SIN IVA)</th>
            <th>% IVA</th>
            <th>TOTAL</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {objetos.map(({ id, producto, precio, cantidad, IVA }) => (
            <tr key={id} >
              <td>{id}</td>
              <td>{producto}</td>
              <td>{precio} €</td>
              <td>{cantidad}</td>
              <td>{ (precio * cantidad).toFixed(2) } €</td>
              <td>{IVA} %</td>
              <td>{ (precio * cantidad + (precio * cantidad * IVA / 100)).toFixed(2) } €</td>
              <td><button onClick={() => handlerDelete(id)} className='boton-eliminar'>-</button></td>
            </tr>
          ))}
          <tr>
            <td><strong>Totales</strong></td>
            <td colSpan="3"></td>
            <td><strong>{ (totalSinIva) } €</strong></td>
            <td colSpan="1"></td>
            <td><strong>{ (total) } €</strong></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
};



TableItems.propTypes = {
  objetos: PropTypes.array.isRequired,
}