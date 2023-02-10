const userModel = require("../useModel/userModel")

const useController= async function (req, res){
    let data=req.body
    const saveData=await userModel.create(data)
    res.send({status:true,message:data})
}

const loginUser=async function (req,res){
    let data= req.body
    const {email,password}=data
    if(!email) return res.send({status:false,message:"Enter Email"})
    if(!password) return res.send({status:false,message:"Enter Password"})

    let checkuser=await userModel.find({email:email,password:password})
    if(!checkuser) return  res.send({status:false,message:"not user found"})

    res.send({status:true,message:"login succussfull"})

}
module.exports={useController,loginUser}