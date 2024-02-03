const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  const Temperament = sequelize.define('temperament',{
      id: {
          type: DataTypes.INTEGER,
          allowNull: true,
          primaryKey: true,
        },
      
        name: {
          type: DataTypes.STRING,
          allowNull: true,
          unique: true,
        },
    }, {timestamps: false,})
  return Temperament
}


