const cliente = {
    nombre: 'Hugo',
    balance: 500,
    tipo: 'Premium'
};

describe('Testing al cliente',()=>{
    test('Es Hugo Alonso',()=>{
        expect(cliente).toMatchSnapshot();
    });

    //Como probar el objeto completo? una forma es convertir el objeto a un string con json.stringfly y comparar
    //ese objeto con la cadena de texto que nos retorna jsonstringly pero jest nos ofrece los snapshots que son
    //son datos que se almacenan en un string, se crean en una carpeta aparte y se puede comparar si es el mismo dato
    //y en lugar de hacer un expect con cada parte del objeto
    //al momento de npm test correo se hace una copia del arreglo en la carpeta de snpashots con el archivo igual, al momento
    //demodificar el arreglgo original jest compara entre los dos y si es diferente marcara un error
    //Si quieres actualizar el snapshop se puede eliminar y volver a poner npm test para que se genere uno nuevo
    //o poner en la terminal npm test -- -u o modificarlo directamente desde el archivo de snapshot(no se recomienda jest es el unico que puede modificarlo)
    //es como si almacenaras algo en una base de datos y despues compararlo
})