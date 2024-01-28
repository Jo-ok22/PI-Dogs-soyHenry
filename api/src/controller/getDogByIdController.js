const axios = require('axios');

const getDogById = async (req, res) => {
    try {
        const {id} = req.params
        const {data} = await axios(`https://api.thedogapi.com/v1/breeds/${id}`)
        res.status(200).json(data)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports=getDogById