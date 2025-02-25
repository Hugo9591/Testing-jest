# Testing-jest
## Descripción

Este proyecto es una aplicación de administración de pacientes para una veterinaria. Permite registrar citas con los siguientes campos:
- Nombre de la mascota
- Nombre del propietario
- Teléfono de contacto
- Fecha de la cita
- Hora de la cita
- Síntomas del paciente

Las citas pueden ser agregadas, editadas y eliminadas. Sin embargo, lo más importante de este proyecto es la implementación de pruebas con Jest.

## Objetivo principal
El proyecto se enfoca en el uso de Jest para realizar pruebas unitarias sobre una clase que maneja las citas. 
Se importan las funciones necesarias y se crean diferentes pruebas dentro de describe y test, asegurando que el sistema de gestión de citas funcione correctamente.

Se prueban los siguientes aspectos:
- Agregar una cita: Se crea un objeto con la información de la cita y se agrega a la clase. Se verifica si se agrega correctamente con expect(citas).toMatchSnapshot();.
- Actualizar una cita: Se modifica una cita existente y se verifica que los cambios se reflejen correctamente.
- Eliminar una cita: Se elimina una cita .

## Pruebas generales:
Ademas de hacer testing a la funciones de las clases veterianaria tambien se hacen algunas pruebas rapidas para conocer mas sobre el testing con jest
- Pruebas sobre cadenas de texto
- Pruebas sobre objetos
- Pruebas sobre arrays
- Pruebas sobre funciones en general

## Instalación y Uso

Clonar el repositorio:

git clone https://github.com/Hugo9591/Testing-jest.git

## Instalar dependencias:
npm install
## Ejecutar las pruebas con Jest:
npm test

## Tecnologías utilizadas
- JavaScript
- Jest (para testing)
