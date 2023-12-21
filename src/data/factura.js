
export const factura = {
    id: 10,
    concepto: 'Componentes PC',
    formaDePago: 'Transferencia',
    cliente: {
        nombre: 'John',
        apellido: 'Doe',
        direccion: {
            pais: 'España',
            ciudad: 'Toledo',
            calle: 'C. Mercurio',
            numero: 29
        }
    },
    empresa: {
        nombre: 'FOM SIL',
        NIF: 1234567
    },
    objetos: [
        {
            id: 1,
            producto: 'NVIDIA RTX 3070 TI',
            precio: 450,
            cantidad: 5,
            IVA: 5,
        },
        {
            id: 2,
            producto: 'NOCTUA NH-D15',
            precio: 119,
            cantidad: 1,
            IVA: 21,       
        },
        {
            id: 3,
            producto: 'AMD RYZEN 7 5900X',
            precio: 240,
            cantidad: 1,
            IVA: 21,
        }
    ]
}