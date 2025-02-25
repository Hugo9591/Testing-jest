const cliente = {
    nombre: 'Hugo',
    balance: 500
}

describe('Testing al cliente', ()=>{
    test('El cliente es premium',()=>{
        expect(cliente.balance).toBeGreaterThan(400);//mayor que
    });

    test('Es Hugo', ()=>{
        expect(cliente.nombre).toBe('Hugo');//ToBe se usa cuando quieres comparar un valor que sea el mismo
    });

    test('No es otro cliente',()=>{
        expect(cliente.nombre).not.toBe('Jose');
    });

    test('No tiene 500', ()=>{
        expect(cliente.balance).not.toBe(300);//no es 300
    });
})