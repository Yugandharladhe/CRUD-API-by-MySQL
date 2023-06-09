const { sequelize } = require(".")

module.exports=(Sequelize,DataTypes)=>{
    const emergencyContact=sequelize.define("emergencyContact",{
        Empid:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        contactNoPrim:{
            type:DataTypes.INTEGER
        },
        relationshipPrim:{
            type:DataTypes.STRING
        },
        contactNoSec:{
            type:DataTypes.INTEGER
        },
        relationshipSec:{
            type:DataTypes.STRING
        }
    })

    return emergencyContact
}