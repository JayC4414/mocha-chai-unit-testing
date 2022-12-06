const router = require('express').Router();

const {postUserInfo,getUserinfo,getSingleUserInfo,deleteUser,updateUserInfo} = require("../controller/userCtrl");

//To create user
router.post("/postuserinfo",postUserInfo);

//To get all the user list
router.get("/getuserinfo",getUserinfo);

//To get single user
router.get("/singleuser/:userid",getSingleUserInfo);

//To update user info
router.put("/updateuser/:id",updateUserInfo);

//To delete user
router.delete("/deleteuser/:id",deleteUser);

module.exports = router;