
export const factura = {
    id: 10,
    concepto: 'Componentes PC',
    formaDePago: 'Transferencia',
    cliente: {
        nombre: 'John',
        apellido: 'Doe',
        direccion: {
            pais: 'ESP',
            ciudad: 'Toledo',
            calle: 'Mercurio',
            numero: 29
        }
    },
    empresa: {
        nombre: 'S.I.L Toledo',
        NIF: 1234567
    },
    objetos: [
        {
            id: 100,
            producto: 'NVIDIA RTX 3070 TI',
            precio: 450,
            cantidad: 1,
            IVA: 21
        },
        {
            id: 101,
            producto: 'NOCTUA NH-D15',
            precio: 119,
            cantidad: 1,
            IVA: 21
        },
        {
            id: 102,
            producto: 'AMD RYZEN 7 5900X',
            precio: 240,
            cantidad: 1,
            IVA: 21
        }
    ]
}