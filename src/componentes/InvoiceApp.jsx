import { getFactura } from "../helpers/getFactura"


export const InvoiceApp = () => {

    const { id, concepto, formaDePago, cliente, empresa, objetos } = getFactura();
    const { nombre, apellido, direccion } = cliente
    const { pais, ciudad, calle, numero } = direccion

    return (
        <>
            <h1>Ejemplo Factura</h1>
            <ul>
                <li>ID: { id }</li>
                <li>Concepto: { concepto }</li>
                <li>Forma de Pago: { formaDePago }</li>
            </ul>

            <h3>Datos del cliente</h3>
            <ul>
                <li>Nombre: { nombre } { apellido }</li>
                <li>Dirección: { pais } - { ciudad } - { calle } / { numero }</li>
            </ul>

            <h3>Datos Empresa</h3>
            <ul>
                <li>Nombre: { empresa.nombreEmpresa }</li>
                <li>NIF: { empresa.NIF }</li>
            </ul>
            
            <h4>Productos</h4>
            <table>
                <thead>
                    <tr>
                        <th>PRODUCTO</th>
                        <th>PRECIO</th>
                        <th>CANTIDAD</th>
                        <th>% IVA</th>
                    </tr>
                </thead>
                <tbody>
                    { objetos.map( ({ id, producto, precio, cantidad, IVA }) => 
                        (
                            <tr key={ id }>
                                <td>{ producto }</td>
                                <td>{ precio } €</td>
                                <td>{ cantidad }</td>
                                <td>{ IVA } %</td>    
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

