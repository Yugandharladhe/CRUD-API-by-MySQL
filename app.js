const express=require("express")
const cors=require("cors")

const app=express()


//routes

const router=require("./routes/employeeRoutes")


//these are middlewares

app.use(cors())
app.use(express.json())
app.use(router)
app.use(express.urlencoded({extended:true}))

//port

const PORT=process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`server is running on PORT ${PORT}`)
})