const password = "123456";

describe('Valida que el password no este vacio', ()=>{

    test('EL password tenga 6 caracteres', ()=>{
        expect( password ).toHaveLength(6);// que password tiene 6 caracteres
    });

    test('Password no vacio', ()=>{
        expect(password).not.toHaveLength(0);//no tiene una extencion de cero
    })
})