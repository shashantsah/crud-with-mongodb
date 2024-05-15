const express=require("express");
const router= express.Router();
const {handleGetAllUsers,handleGetUserById, handleUpdateUserById,handleDeleteUserById,createNewUser}=require("../controllers/user");


router
.route("/")
.get(handleGetAllUsers)
.post(createNewUser);

router
.route("/:id")
.get(handleGetUserById)
.delete(handleDeleteUserById)
.patch(handleUpdateUserById);


module.exports=router;

