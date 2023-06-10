const db=require("../models")


//create main model
const employee=db.employees

//main work

const addEmployee=async(req,res)=>{
    //inputs from end user
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

        // add new employee
        const employeeSave=await employee.create(emp)
        res.status(200).send(employeeSave)
    
    }catch(err){
        // if error occurs
        res.json({ msg: err }).status(400);
        console.log(err)
    }
    
}

module.exports=addEmployee
