const { Router } = require('express');
const getDogs = require('../controller/getDogsControler')
const getDogById = require('../controller/getDogByIdController')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/dogs', getDogs)
router.get('/:id', getDogById)


module.exports = router;
