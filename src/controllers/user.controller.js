import { asynchandler } from "../utils/asyinc";


const registerUser=asynchandler(async(req,res)=>{
     res.status(202).json({
        message:"ok",
     })
})
export {registerUser}