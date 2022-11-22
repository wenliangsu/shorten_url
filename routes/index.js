//Section Set the variable
//for server, framework and database｀
const express = require("express");
const router = express.Router();
//引入home.js
const home = require("./modules/home");

//Section Router invoke
//路由模組
router.use("/", home);

//匯出路由器
module.exports = router;
