const postDog =  (req, res) => {
    try {
        const {id, name, image, alturamin, alturamax, pesomin, pesomax, vidamin, vidamax} = req.body
        if(!id || !name || !image || !alturamin || !alturamax || !pesomin || !pesomax || !vidamin || !vidamax)
        res.status(400).send('faltan datos')
        res.status(200).json(body)
    } catch (error) {
        res.status(500).send(error)
    }
} 

module.exports=postDog