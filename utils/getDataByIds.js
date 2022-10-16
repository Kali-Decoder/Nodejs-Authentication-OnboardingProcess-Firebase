const {PrimaryMarket,Users}= require("../config/firebase");
exports.getMarketDataByIds=async ()=>{
    let snapshot = await PrimaryMarket.get();
    // Data formed by ids 
    let data = await snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    return data;
}


exports.getUsersDataByIds=async ()=>{
    let snapshot = await Users.get();
    // Data formed by ids 
    let data = await snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    return data; 
}