const { Router } = require('express');
const getDogs = require('../controller/getDogsControler')
const getDogById = require('../controller/getDogByIdController')
const postDog = require('../controller/postDogController')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/dogs', getDogs)
router.get('/:id', getDogById)
router.post('/dogs', postDog)



// rutas de los temperamentos



module.exports = router;
