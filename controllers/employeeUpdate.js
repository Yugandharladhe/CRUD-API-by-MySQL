const db=require("../models")


//create main model
const employee=db.employees

//main work

const removeEmployee=async(req,res)=>{
    //inputs from end user
    const {id,jobtitle=false,
    phonenumber=false,
    email=false,
    address=false,
    city=false,
    state=false,
    contactNoPrim=false,
    relationshipPrim=false,
    contactNoSec=false,
    relationshipSec=false}=req.body
    try{
        const data = await employee.findByPk(id);
        if(data==null)
        {
            res.json({msg:"record not found"}).status(200)
        }
        else{
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
            newObj={}

            //here we do seperation which employee dosn't want to update
            for (const key in emp) {
                if(emp[key]!=false)
                {
                    newObj[key]=emp[key]
                }
            }

                // here we update the record of employee
                const updatedData=await employee.update(
                newObj,
                {where: {id}}
            )
            // console.log(updatedData)
            if(updatedData[0])
            {
                res.json({msg:"data updated"}).status(200)
                console.log("data updated")
            }else{
                res.json({msg:"data not updated"}).status(200)
                console.log("data updated")
            }
        }

    }catch(err){
        res.json({ msg: err }).status(400);
        console.log(err)
    }
    
    
}

module.exports=removeEmployee
