const {PrimaryMarket}= require("../config/firebase");

exports.putData=async (req,res)=>{
    await PrimaryMarket.add(req.body);
    res.status(200).json({message:"Successfully Register"});
}