const axios = require('axios');

const getDogs = async (req, res) => {
    try {
        const {data} = await axios('https://api.thedogapi.com/v1/breeds')
        res.status(200).json(data)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports=getDogs