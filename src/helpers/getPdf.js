import jsPDF from "jspdf"
import { getFactura } from "./getFactura"

export const generatePDF = () => {

    const doc = new jsPDF()
    const factura = getFactura()
  
    // Encabezado de la factura
    doc.setFontSize(18)
    doc.text(`FACTURA NUMERO ${factura.id}`, 20, 20)
  
    // Datos del cliente
    doc.setFontSize(12)
    doc.text("DATOS CLIENTE", 20, 40)
    doc.text(`Nombre: ${factura.cliente.nombre}`, 20, 50)
    doc.text(`Apellido: ${factura.cliente.apellido}`, 20, 60)
    doc.text(`Dirección: ${factura.cliente.direccion.calle}/${factura.cliente.direccion.numero}`, 20, 70)

  
    // Datos de la empresa
    doc.text("DATOS EMPRESA", 120, 40)
    doc.text(`Nombre: ${factura.empresa.nombre}`, 120, 50)
    doc.text(`NIF: ${factura.empresa.NIF}`, 120, 60)
    doc.text(`Sede: ${factura.empresa.sede}`, 120, 70)

  
    // Línea separadora
    doc.line(20, 80, 190, 80)
  
    // Tabla de conceptos
    doc.text("TABLA DE CONCEPTOS", 20, 90)
  
    // Headers de la tabla
    doc.text("Producto", 20, 100)
    doc.text("Precio", 70, 100)
    doc.text("Cantidad", 120, 100)
    doc.text("Total", 160, 100)
  
    // Datos de la tabla (conceptos)
    let y = 110
    factura.objetos.forEach((concepto) => {
      doc.text(concepto.producto, 20, y)
      doc.text(concepto.precio.toString(), 70, y)
      doc.text(concepto.cantidad.toString(), 120, y)
      doc.text((concepto.precio * concepto.cantidad).toString(), 160, y)
      y += 10
    })
  
    // Calcular el total de la factura
    const total = factura.objetos.reduce((acc, concepto) => acc + concepto.precio * concepto.cantidad, 0)
    doc.text(`Total: ${total.toFixed(2)}`, 140, y + 10)
  
    // Guardar el PDF
    doc.save(`Factura_${factura.id}.pdf`)
  }
  