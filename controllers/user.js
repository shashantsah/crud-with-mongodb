const hero=require("../models/user");


async function handleGetAllUsers(req,res){
    try{
        const allDbUsers= await hero.find({});
      
    return res.send(allDbUsers);
        
    }catch{
       res.json({msg:"unable to fetch ussersfrom db"}); 
    }
}

async function handleGetUserById(req,res){
    const data=await hero.findById(req.params.id);
    if(!data) return res.status(404).json({msg:"user not found"});
    return res.json(data);
}

async function handleUpdateUserById(req,res){
    try{
        await hero.findByIdAndUpdate(req.params.id,{lastname:"hero"});
        return res.json({status:"successfull changed"});
    }catch(error){
        return res.json({status:"something is wrong",err:error})
    }
  
}

async function handleDeleteUserById(req,res){
    try{
        await hero.findByIdAndDelete(req.params.id);
        return res.json({status:"successfull Deleted"});
    }catch(error){
        return res.json({status:"something is wrong",err:error.message})
    }
}

async function createNewUser(req,res){
    const body=req.body;
    if(!body || !body.firstname || !body.lastname || !body.email || !body.gender){
        return res.status(400).json({msg:"all fields are required"});
    }
    try {  
        const result = await hero.create({
            firstname: body.firstname,
            lastname: body.lastname,
            email: body.email,
            gender: body.gender,
         
        });
        return res.status(201).json({ msg: "Success" });
    } catch (error) {
        return res.status(500).json({ msg: "Internal server error", error: error.message });
    }


    
    
}
module.exports ={
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    createNewUser

}