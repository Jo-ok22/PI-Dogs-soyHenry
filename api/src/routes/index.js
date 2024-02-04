const { Router } = require('express');
const getDogs = require('../controller/getDogsControler')
const getDogById = require('../controller/getDogByIdController')
const postDog = require('../controller/postDogController')
const deletDog = require('../controller/deleteDogController')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/dogs', getDogs)
router.get('/:id', getDogById)
router.post('/dogs', postDog)
router.delete('/:id', deletDog)



// rutas de los temperamentos
//router.get('/temperament',)


module.exports = router;
