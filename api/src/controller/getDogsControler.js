const axios = require('axios');
const {Dog} = require('../db')
//const {Temperament} = require('../db');
const getDogs = async (req, res) => {
    try {
        const {data} = await axios('https://api.thedogapi.com/v1/breeds')//bien
        const arrApi = data.map(dog => {
            return{
                name:dog.name,
                image:dog.image,
                origin:dog.origin,
                alturamin:dog.alturamin,
                alturmax:dog.alturmax,
                pesomin:dog.pesomin,
                pesomax:dog.pesomax,
                vidamin:dog.vidamin,
                vidamax:dog.vidamax,
                //temperament:dog.temperament
            }
        })
        const dbApi = await Dog.bulkCreate(arrApi)
        //const tempApi = await Temperament.bulkCreate(arrApi)
       res.status(201).json(dbApi)
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send(error.message)
    }
}

module.exports=getDogs

