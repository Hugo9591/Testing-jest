import Citas from '../js/classes/Citas';

describe('Probar la clase de citas', ()=>{

    const citas = new Citas();
    const id = Date.now();

    test('Agregar nueva cita', ()=>{
        const citaObj = {
            id,
            mascota: 'Hook',
            propietario: 'Hugo',
            telefono: '1234567',
            fecha: '10-12-24',
            hora:'10:30',
            sintomas: 'solo duerme poco'
        };

        citas.agregarCita(citaObj);

        //Prueba
        expect(citas).toMatchSnapshot();
        //Nos crea una carpeta y un archivo con la informaacion dada para despues ser usada para comparar con alguna actualizacion
    });



    test('Actualizar cita', ()=>{
        const citaActualizada = {
            id,
            mascota: 'Nuevo Nombre',
            propietario: 'Hugo',
            telefono: '1234567',
            fecha: '10-12-24',
            hora:'10:30',
            sintomas: 'solo duerme'
        };

        citas.editarCita(citaActualizada);

        expect(citas).toMatchSnapshot();
    });


    test('Eliminar cita',()=>{
        citas.eliminarCita(id);

        expect(citas).toMatchSnapshot();
    });
})