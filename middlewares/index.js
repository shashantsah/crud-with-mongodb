const fs =require("fs");

function logReqRes(filename){
    return (req,res,next)=>{
        fs.appendFile('log.txt',
        `\nAt: ${Date.now()} Type: ${req.method} From: ${req.ip} Path:${req.path}`,
        (err,data)=>{
            next();
        })
    }
}

module.exports={
    logReqRes,
}