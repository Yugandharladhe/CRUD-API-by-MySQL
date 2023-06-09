const db=require("../models")


//create main model
const employee=db.employees

//main work

const removeEmployee=async(req,res)=>{
    const id=req.query
    try{
        const deletedData=await employee.destroy({where:[id]})
        console.log(deletedData)
        if(deletedData==0)
        {
            res.json({msg:"data not found"}).status(200)
        }
        else{
            res.json({msg:"data deleted Successfully"}).status(200)
        }
    }catch(err){
        res.json({msg:err})
        console.log(err)
    }
    
    
}

module.exports=removeEmployee
