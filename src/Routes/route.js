const { useController, loginUser } = require("../userController/user")

const express=requie('express')
const router=express.router()

router.post('/signup',useController)
router.post('/login',loginUser)

module.exports=router