module.exports={
    HOST:"localhost",
    USER:"root",
    PASSWORD:"system",
    DB:"CompanyDB",
    dialect:"mysql",
    lOGGING:true,
    pool:{
        max:10,
        min:0,
        accquire:30000,
        idle:20000
    }

}