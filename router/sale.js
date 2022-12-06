const router = require('express').Router();

const {postSaleInfo,getSaleinfo,getSingleSaleInfo,deleteSale,updateSaleInfo} = require("../controller/saleCtrl");

//To create sale
router.post("/postsaleinfo",postSaleInfo);

//To get all the Sale list
router.get("/getsaleinfo",getSaleinfo);

//To get single sale
router.get("/singlesale/:saleid",getSingleSaleInfo);

//To update sale info
router.put("/updatesale/:id",updateSaleInfo);

//To delete sale
router.delete("/deletesale/:id",deleteSale);

module.exports = router;