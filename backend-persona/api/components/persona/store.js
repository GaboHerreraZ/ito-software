const Model = require('./model');


function addPersona(persona) {
    const newPersona = new Model(persona);
    return newPersona.save();
}

async function getPersona(id) {
    const idPersona = (id) ? {_id: id} : null;
    const persona = await  Model.find(idPersona);
    return persona; 
}

async function getPersonaByNombre(nombre) {
    const nombrePersona = (nombre) ? {nombre: nombre} : null;
    const persona = await  Model.find(nombrePersona);
    return persona; 
}


async function deletePersona(id) {
    const idPersona = (id) ? {_id: id} : null;
    return await Model.deleteOne(idPersona);
}

async function updatePersona(datosPersona) {
    const idPersona = (datosPersona._id) ? {_id: datosPersona._id} : null;
    const persona = await Model.findOne(idPersona);

    persona.nombre =  datosPersona.nombre;
    persona.apellido =  datosPersona.apellido;
    persona.tipoDocumento =  datosPersona.tipoDocumento;
    persona.numeroDocumento =  datosPersona.numeroDocumento;
    persona.genero =  datosPersona.genero;

    return await persona.save();
}




module.exports = {
    add: addPersona,
    get: getPersona,
    delete: deletePersona,
    update: updatePersona,
    getNombre: getPersonaByNombre
}