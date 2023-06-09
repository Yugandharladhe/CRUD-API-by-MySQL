const employeeCreate=require("../controllers/employeeCreate")
const employeeDelete=require("../controllers/employeeDelete")
const employeeUpdate=require("../controllers/employeeUpdate")
const getEmployee=require("../controllers/getEmployee")
const getAllEmployee=require("../controllers/getAllEmployee")

const router=require("express").Router()

router.post("/createEmployee",employeeCreate)
router.get("/deleteEmployee",employeeDelete)
router.post("/updateEmployee",employeeUpdate)
router.get("/getEmployee",getEmployee)
router.get("/allEmployee",getAllEmployee)

module.exports=router