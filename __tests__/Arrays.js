const carrito = ['Producto 1', 'Producto 2', 'Producto3'];

describe('Testing a carrito', ()=>{
    test('Probar que el array tenga 3 elementos', ()=>{
        expect( carrito ).toHaveLength(3);
    });

    //Verificar que el array no este vacio
    test('Verificar que el array no este vacio', ()=>{
        expect( carrito ).not.toHaveLength(0);
    });
});