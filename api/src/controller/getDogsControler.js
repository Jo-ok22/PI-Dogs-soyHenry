const axios = require('axios');
const {Dog} = require('../db')
//const {Temperament} = require('../db');
const getDogs = async (req, res) => {
    try {
        const {data} = await axios('https://api.thedogapi.com/v1/breeds')//bien
        const arrApi = data.map(dog => {
            let vida = dog.life_span?.split(' ')
            let alturamin = (dog.height.metric.split(" - ")[0]) 
            let alturamax = (dog.height.metric.split(" - ")[1]) 
            let pesomin = (dog.weight.metric.split(" - ")[0]) 
            let pesomax = (dog.weight.metric.split(" - ")[1]) 
            let vidamin = (vida[0])
            let vidamax = (vida[2]) 
            //let temperaments = dog.temperament?.split(',').map(t => t.trim()) 
 
            return{
                name:dog.name,
                image:dog.image,
                origin:dog.origin,
                alturamin,
                alturamax,
                pesomin,
                pesomax,
                vidamin,
                vidamax,
                //temperaments
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

