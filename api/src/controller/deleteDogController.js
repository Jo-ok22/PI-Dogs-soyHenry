const {Dog} = require('../db')

const deletDog = async (req, res) => {
    try {
        const{ id } = req.body
        const borrar = await Dog.findByPk(id)
        if(!borrar){
            res.status(400).send('No se encontró el perro con el ID proporcionado')
        } else {
            await borrar.destroy({
                where: { id } // Condición para eliminar registros
            });
        }
        res.status(200).send('perro borrado')
      
    } catch (error) {
        console.error("Error al borrar:", error);
        res.status(500).send(error.message)
    }
}
module.exports=deletDog