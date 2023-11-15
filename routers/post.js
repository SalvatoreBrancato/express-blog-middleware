const express = require('express');
const router = express.Router();
const postsController = require('../controller/postsController');




//index
router.get('/index', postsController.index)
//show
router.get('/show', postsController.show)


module.exports = router