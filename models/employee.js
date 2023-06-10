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
        //primary emergency contact
        contactNoPrim:{
            type:DataTypes.STRING(350),
            allowNull:false
        },
        //primary contact person's relation with employee
        relationshipPrim:{
            type:DataTypes.STRING(350),
            allowNull:false
        },
        //secondary emergency contact
        contactNoSec:{
            type:DataTypes.STRING(350)
        },
        //secondary contact person's relation with employee
        relationshipSec:{
            type:DataTypes.STRING(350)
        }
    })

    return Employee
}