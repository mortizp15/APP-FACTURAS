import PropTypes from 'prop-types';

export const Details = ({ titulo, id, concepto, formaDePago }) => {

    return (
        <>
            <ul className="list-group">
                <li className="list-group-item">
                    <h5 className="mt-2">{ titulo }</h5>
                </li>
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

