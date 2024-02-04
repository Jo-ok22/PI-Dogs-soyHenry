const {Dog} = require('../db')

const postDog = async (req, res) => {
    try {
        const {id,name} = req.body  // aca no esta el problema, si trae datos
        console.log(id,name);
        if(!id||!name){
             res.status(404).send('faltan datos')
        }
        else {
            const createDog = await Dog.create({id,name})// en esta parte ahi algun problema 
            res.status(200).json(createDog)
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send(error.message)
    }
} 

module.exports=postDog