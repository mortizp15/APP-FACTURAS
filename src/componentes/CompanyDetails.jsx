import PropTypes from 'prop-types';


export const CompanyDetails = ({ titulo, empresa }) => {
  return (
    <>
    <h5 className="mt-4">{ titulo }</h5>
      <ul className="list-group">
        <li className="list-group-item active">
          <strong>Nombre:</strong> {empresa.nombre}
        </li>
        <li className="list-group-item">
          <strong>NIF:</strong> {empresa.NIF}
        </li>
      </ul>
    </>
  );
};


CompanyDetails.propTypes = {
  titulo: PropTypes.string,
  empresa: PropTypes.object
}
