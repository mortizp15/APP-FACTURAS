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
      <ul className="list-group">
        <li className="list-group-item">
          <h5 className="mt-2">{ titulo }</h5>
        </li>
        <li className="list-group-item">
          <strong>Nombre:</strong> {nombre} {apellido}
        </li>
        <li className="list-group-item">
          <strong>Dirección:</strong> {calle} / {numero}
        </li>
        <li className="list-group-item">
          <strong>Pais:</strong>  {ciudad} - {pais} 
        </li>
        
      </ul>
    </>
  );
};

ClientDetails.propTypes = {
  
  titulo: PropTypes.string.isRequired,
  cliente: PropTypes.object.isRequired

}
