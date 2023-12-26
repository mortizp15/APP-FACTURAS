import PropTypes from 'prop-types';


export const CompanyDetails = ({ titulo, empresa }) => {
  return (
    <>
      <ul className="list-group ">
        <li className="list-group-item">
          <h5 className="mt-2">{ titulo }</h5>
        </li>
        <li className="list-group-item">
          <strong>Nombre:</strong> {empresa.nombre}
        </li>
        <li className="list-group-item">
          <strong>NIF:</strong> {empresa.NIF}
        </li>
        <li className="list-group-item">
          <strong>Sede:</strong> {empresa.sede}
        </li>
      </ul>
    </>
  );
};


CompanyDetails.propTypes = {
  titulo: PropTypes.string,
  empresa: PropTypes.object
}
