const express = require('express');
const router = express.Router();
const controller = require('./controller');
const response  = require('../../../util/response');

router.post('/',(req, res) => {
    controller.add(req.body)
            .then((persona) => {
                response.success(req, res, persona, 200);
            })
            .catch((e) => {
                console.log(e);
                response.error(req, res, 'Información invalida', 400);
            });
});


router.get('/',(req, res) => {
    const id =  req.query.id;
    controller.get(id)
            .then((persona) => {
                response.success(req, res, persona, 200);
            })
            .catch((e) => {
                console.log(e);
                response.error(req, res, 'Información invalida', 400);
            });
});


router.get('/nombre',(req, res) => {
    const id =  req.query.nombre;
    controller.getNombre(id)
            .then((persona) => {
                response.success(req, res, persona, 200);
            })
            .catch((e) => {
                console.log(e);
                response.error(req, res, 'Información invalida', 400);
            });
});


router.put('/',(req, res) => {
    controller.update(req.body)
            .then(() => {
                response.success(req, res, 'Persona actualizada correctamente', 200);
            })
            .catch((e) => {
                console.log(e);
                response.error(req, res, 'Información invalida', 400);
            });
});


router.delete('/:id',(req, res) => {
    controller.delete(req.params.id)
            .then(() => {
                response.success(req, res, 'Persona eliminada correctamente', 200);
            })
            .catch((e) => {
                console.log(e);
                response.error(req, res, 'Información invalida', 400);
            });
});

module.exports = router;