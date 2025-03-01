function suma(a, b){
    return a + b;
}

function resta(a, b){
    return a - b;
}

describe('Testing a las funciones de suma y resta',()=>{
    test('Suma de 20 y 30', ()=>{
        expect(suma(20,30)).toBe(50);
    });

    test('Resta 10 menos 5',()=>{
        expect(resta(10,5)).toBe(5);
    });

    test('Que la suma 10 y 10 sea 20', ()=>{
        expect(suma(10,10)).toBe(20);
    });

    test('Que la suma 10 y 10 no sea iguala 10', ()=>{
        expect(suma(10,10)).not.toBe(10);
    });

    test('Que la resta de 10 menos 5 no sea otroo valor', ()=>{
        expect(resta(10,5)).not.toBe(2);
    });
})