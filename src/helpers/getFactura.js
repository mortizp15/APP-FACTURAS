import { factura } from "../data/factura"

export const getFactura = () => {

    let total = calcularTotal(factura.objetos)
    let totalSinIva = calcularTotalSinIva(factura.objetos)

    return { ...factura, total, totalSinIva}
}

export const calcularTotalSinIva = (objetos) => {
    return objetos
        .map(item => item.precio * item.cantidad)
        .reduce((acc, value) => acc + value, 0)
}

export const calcularTotal = (objetos) => {
    return objetos
        .map(item => (item.precio * (1 + item.IVA / 100)) * item.cantidad)
        .reduce((acc, value) => acc + value, 0)
}