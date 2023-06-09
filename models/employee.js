const {Sequelize}=require("sequelize")

module.exports=(sequelize,DataTypes)=>{
    const Employee=sequelize.define("employee",{
        jobtitle:{
            type:DataTypes.STRING
        },
        phonenumber:{
            type:DataTypes.STRING(350),
            allowNull:false
        },
        email:{
            type:DataTypes.STRING(350),
            allowNull:false
        },
        address:{
            type:DataTypes.STRING(350)            
        },
        city:{
            type:DataTypes.STRING(350)
        },
        state:{
            type:DataTypes.STRING(350)
        },
        contactNoPrim:{
            type:DataTypes.STRING(350),
            allowNull:false
        },
        relationshipPrim:{
            type:DataTypes.STRING(350),
            allowNull:false
        },
        contactNoSec:{
            type:DataTypes.STRING(350)
        },
        relationshipSec:{
            type:DataTypes.STRING(350)
        }
    })

    return Employee
}