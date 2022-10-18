const express = require("express");
const router = express.Router();
const checkAuth= require("../middlewares/check-auth");
const { putData } = require("../controllers/market.controller");

const {
  getMarketDataByIds,
  getUsersDataByIds,
} = require("../utils/getDataByIds");

router.get("/primarymarket-data", async (req, res) => {

  let data = await getMarketDataByIds();
  console.log(data);
  res.status(200).json({data})
  // res.send(
  //   `<h1>Welcome To Real Estate Primary Market Place</h1>  <br/> <br/>
  //       <form action="/api/forgot" itemtype="multipart/form-data"  method="POST" >
  //             <select name="Type_of_asset" id="asset">
  //             <option value="0">Type Of Asset</option>
  //             <option value="1">Commercial Real Estate</option>
  //             <option value="2">Art</option>
  //             <option value="3">Private Equity</option>
  //             <option value="4">Bonds</option>
  //           </select> <br/> <br/>

  //           <div>
  //             <label>IRR Range</label>
  //             <br/>
  //             <br/>
  //             <label>Min IRR Range</label>
  //             <input id="fromIrr" type="range"  min="5" max="10"/>
  //             <br/>
  //             <br/>
  //             <label>Max IRR Range</label>
  //             <input id="toIrr" type="range"  min="10" max="10"/>
  //           </div>

  //           <div>
  //             <label>COC Range</label>
  //             <br/>
  //             <br/>
  //             <label>COC Min Range</label>
  //             <input id="fromcoc" type="range" min="5" max="10"/>
  //             <br/>
  //             <br/>
  //             <label>COC Max Range</label>
  //             <input id="tococ" type="range" min="10" max="10"/>
  //         </div>
  //       </form>
  //     <br/> <br/>
  //   <a href="/api/logout">Logout</a>`
  // );
});

router.get("/primary-market/:assetId", async (req, res) => {
  const marketId = req.params.assetId;
  console.log(marketId);
  let data = await getMarketDataByIds();
  let singleData = data.filter((item) => item.id === marketId);
  res.status(200).json({ data: singleData[0] });
});

router.post("/primary-market", putData);

module.exports = router;
