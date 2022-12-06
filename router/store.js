const router = require('express').Router();

const {postStoreInfo,getStoreinfo,getSingleStoreInfo,deleteStore,updateStoreInfo} = require("../controller/storeCtrl");

//To create store
router.post("/poststoreinfo",postStoreInfo);

//To get all the store list
router.get("/getstoreinfo",getStoreinfo);

//To get single store
router.get("/singlestore/:storeid",getSingleStoreInfo);

//To update store info
router.put("/updatestore/:id",updateStoreInfo);

//To delete store
router.delete("/deletestore/:id",deleteStore);

module.exports = router;