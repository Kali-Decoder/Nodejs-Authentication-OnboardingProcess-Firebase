module.exports=async (req,res,next)=>{
    try {
        let reset_token= req.session.forgotPasswordToken;
        
    } catch (error) {
        console.log(error);

    }
}