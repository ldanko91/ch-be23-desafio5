import { Router } from "express";
import userModel from "../models/usuarios.js";

const sessionsRouter=Router();

sessionsRouter.post('/register',async(req,res)=>{
    const { first_name,last_name,email, age, password}=req.body;
    const exist =await userModel.findOne({email});

    if(exist) return res.status(400).send({status:"error",error:"Users already exists"})

    const user={
        first_name,
        last_name,
        email,
        age,
        password
    }
    let result = await userModel.create(user)
    res.send({status:"success",message:"User registered"})
})


sessionsRouter.post('/login',async(req,res)=>{
    const {email,password}=req.body
    const user = await userModel.findOne({email,password});

    if(!user) return res.status(400).send({status:"error",error:"Credenciales incorrectas!"})

    req.session.user={
        name: `${user.first_name} ${user.last_name}`,
        email:user.email,
        age: user.age,
        role: user.role
    }
    res.send({status:"success",payload:req.session.user, message:"Login correcto!"})
})

export default sessionsRouter;