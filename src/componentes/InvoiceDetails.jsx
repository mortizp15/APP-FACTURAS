import PropTypes from 'prop-types';

export const Details = ({ id, concepto, formaDePago }) => {

    return (
        <>

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
        </>
  )
}

Details.propTypes = {
    id: PropTypes.number.isRequired,
    concepto: PropTypes.string,
    formaDePago: PropTypes.string
}

