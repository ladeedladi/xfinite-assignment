const express=require("express")
const {postBooks}=require("./controllers")
const {getBooks}=require("./controllers")
const Users =require("./models")
const app=express()
app.use(express.json())
app.post("/postBooks",postBooks)

app.get("/getBooks",getBooks)

Users.sequelize.sync({force:true})
.then(res=>console.log(res))
.catch(err=>console.log(err))


app.listen(5000)