const db=require("../models")


//create main model
const employee=db.employees

//main work

const getEmployee=async(req,res)=>{
    const {id}=req.query
    try{
        //finding employee
        const getEmployee=await employee.findByPk(id)
        if(getEmployee)
        {
            res.status(200).json({data:getEmployee})
        }else{
            res.status(200).json({msg:"data not found"})
        }
        
    }catch(err){
        //if error occurs
        res.json({ msg: err }).status(400);
        console.log(err)
    }
    
}

module.exports=getEmployee
