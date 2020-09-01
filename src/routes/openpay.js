const express = require("express");
const router = express.Router();
const createToken = require('../controllers/create_token');


/* POST CARDS  CREATE TOKEN*/
router.post('/',createToken);

module.exports = router;