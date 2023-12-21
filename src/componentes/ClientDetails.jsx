import PropTypes from 'prop-types';

export const ClientDetails = ({ titulo, cliente }) => {

  const { 
    nombre, 
    apellido, 
    direccion: { 
      pais, 
      ciudad, 
      calle, 
      numero 
    } 
  } = cliente

  return (
    <>
        <h5 className="mt-4">{ titulo }</h5>
      <ul className="list-group ">
        <li className="list-group-item">
          <strong>Nombre:</strong> {nombre} {apellido}
        </li>
        <li className="list-group-item">
          <strong>Dirección:</strong> {pais} - {ciudad} - {calle} / {numero}
        </li>
      </ul>
    </>
  );
};

ClientDetails.propTypes = {
  
  titulo: PropTypes.string.isRequired,
  cliente: PropTypes.object.isRequired

}
