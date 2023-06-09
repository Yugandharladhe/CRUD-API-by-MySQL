const dbConfig=require("../config/dbConfig")
const {Sequelize,DataTypes}=require("sequelize")

const sequelize=new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host:dbConfig.HOST,
        dialect:dbConfig.dialect,
        logging:dbConfig.LOGGING,
        operatorAliases:false,
        pool:{
            max:dbConfig.pool.max,
            min:dbConfig.pool.min,
            acquire:dbConfig.pool.max,
            idle:dbConfig.pool.max,
        }
    }
)

sequelize.authenticate().then(()=>{
    console.log("connected")
}).catch((err)=>{
    console.log("failed to Connect"+err)
})

const db={}

db.Sequelize=Sequelize
db.sequelize=sequelize

db.employees=require("./employee")(sequelize,DataTypes)


db.sequelize.sync({force:false}).then(()=>{
    console.log("sync is done")
}).catch(()=>{
    console.log("can't sync")
})

module.exports=db

