const { DataTypes, Sequelize} = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  const Dog = sequelize.define('dog', {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
      // validate: {
      //   isUrl: true,
      // }
    },
      origin:{
        type:DataTypes.STRING,
        allowNull: true
      },
      alturamin: {
        type: DataTypes.STRING,
        allowNull: true,
        // validate: {
        //   min: 15,
        //   max: 100,
        // }
      },
    
      alturamax: {
        type: DataTypes.STRING,
        allowNull: true,
        // validate: {
        //   min: 15,
        //   max: 100,
        // }
      },
      pesomin: {
        type: DataTypes.STRING,
        allowNull: true,
        // validate: {
        //   min: 5,
        //   max: 80,
        // }
      },
      pesomax: {
        type: DataTypes.STRING,
        allowNull: true,
        // validate: {
        //   min: 5,
        //   max: 80,
        // }
      },
      vidamin: {
        type: DataTypes.STRING,
        allowNull: true,
        // validate: {
        //   min: 2,
        //   max: 35,
        // }
      },
      vidamax: {
        type: DataTypes.STRING,
        allowNull: true,
        // validate: {
        //   min: 2,
        //   max: 35,
        // }
      }
  },{timestamps: false,})
  return Dog
}
  
//     image: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         isUrl: true,
//       }
//     },

//     alturamin: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       validate: {
//         min: 15,
//         max: 100,
//       }
//     },
  
//     alturamax: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       validate: {
//         min: 15,
//         max: 100,
//       }
//     },
//     pesomin: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       validate: {
//         min: 5,
//         max: 80,
//       }
//     },
//     pesomax: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       validate: {
//         min: 5,
//         max: 80,
//       }
//     },
//     vidamin: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       validate: {
//         min: 2,
//         max: 35,
//       }
//     },
//     vidamax: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       validate: {
//         min: 2,
//         max: 35,
//       }
//     }
//   },{timestamps: false,});
// };
