import jwt from "jsonwebtoken"

const genToken=async(userid)=>{
  try{
    const token=await  jwt.sign({userid},process.env.JWT_SECRETT,{expiresIn:"7d"})
    return token

  }catch(error){
    console.log("gen token error")

  }
}