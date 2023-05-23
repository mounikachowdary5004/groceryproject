import jwt from "jsonwebtoken"


export const allverifytoken =(req,res,next) =>{

    const token = req.header('auth')
    if(!token){
        return res.status(400).send({errors:"Token not present"})
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_RANDON_STAR)
        req.id= decoded.id
    }
    catch(errors)
    {
        return res.status(400).send({errors:"please authenticate using valid token"})
        
    }
    
    next()
}