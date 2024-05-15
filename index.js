const express=require("express");
const app=express();
const userRouter= require('./routes/user');
const { logReqRes } =require('./middlewares');
const {connectMongoDb} =require("./views/connections");
const port=3000;

//connections
connectMongoDb("mongodb+srv://shashantsah:qKrmMFjf3tyDTFUP@cluster0.pq80j8w.mongodb.net/");


//middleware-plugins
app.use(express.urlencoded({extended:false}));
app.use(logReqRes("log.txt"));


//Routes
app.use("/api/users",userRouter);

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})