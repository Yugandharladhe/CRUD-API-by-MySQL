const db=require("../models")


//create main model
const employee=db.employees

//main work

const addEmployee=async(req,res)=>{
    const {id,jobtitle,
        phonenumber,
        email,
        address,
        city,
        state,
        contactNoPrim,
        relationshipPrim,
        contactNoSec,
        relationshipSec}=req.body
    try{
        let emp={
            jobtitle,
            phonenumber,
            email,
            address,
            city,
            state,
            contactNoPrim,
            relationshipPrim,
            contactNoSec,
            relationshipSec
        }

        
        const employeeSave=await employee.create(emp)
        res.status(200).send(employeeSave)
    
    }catch(err){
        res.json({msg:err})
        console.log(err)
    }
    
}

module.exports=addEmployee
