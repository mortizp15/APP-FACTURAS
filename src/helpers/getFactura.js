import { factura } from "../data/factura"

export const getFactura = () => {

    let totalSinIva = 0
    let total = 0

    factura.objetos.forEach( objeto => {
        totalSinIva += objeto.precio * objeto.cantidad 
        total += (objeto.precio * objeto.cantidad) + (objeto.precio * objeto.cantidad * objeto.IVA / 100)
    })

    return { ...factura, total, totalSinIva }
}

