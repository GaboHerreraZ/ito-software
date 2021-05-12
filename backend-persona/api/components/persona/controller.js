const store = require('./store');


function addPersona(persona) {
    return new Promise((resolve, reject) => {
       store.add(persona);
       resolve(persona);
    });
}

function getPersona(id) {
    return new Promise((resolve, reject) => {
        const persona = store.get(id);
        resolve(persona);
    });
}

function getNombrePersona(id) {
    return new Promise((resolve, reject) => {
        const persona = store.getNombre(id);
        resolve(persona);
    });
}


function deletePersona(id) {
    return new Promise((resolve, reject) => {
        if(!id) {
            reject('Id es requerido');
            return false;
        }
        resolve(store.delete(id));
    });
}


function updatePersona(persona) {
    return new Promise((resolve, reject) => {
        resolve(store.update(persona));
    });
}


module.exports = {
    add: addPersona,
    get: getPersona,
    delete: deletePersona,
    update: updatePersona,
    getNombre: getNombrePersona
}

