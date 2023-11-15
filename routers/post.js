const express = require('express');
const router = express.Router();
const postsController = require('../controller/postsController');
const adminController = require('../controller/adminController');
const authenticateMiddleware = require("../middlewares/authenticate");



//index
router.get('/index', postsController.index)
//show
router.get('/show', postsController.show)

//router.use(authenticateMiddleware)

router.post("/store", authenticateMiddleware, adminController.index)

module.exports = router