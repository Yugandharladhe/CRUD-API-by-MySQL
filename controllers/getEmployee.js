const db=require("../models")


//create main model
const employee=db.employees

//main work

const getEmployee=async(req,res)=>{
    const {id}=req.query
    try{
        const getEmployee=await employee.findByPk(id)
        if(getEmployee)
        {
            res.status(200).json({data:getEmployee})
        }else{
            res.status(200).json({msg:"data not found"})
        }
        
    }catch(err){
        res.json({msg:err})
        console.log(err)
    }
    
}

module.exports=getEmployee
