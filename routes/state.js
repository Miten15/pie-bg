const router = require("express").Router();
const statecontroller = require('../controllers/statecontroller.js');
const {verifyToken} = require("../middleware/jwt_token")

router.post('/',verifyToken, statecontroller.addState)
router.get('/', statecontroller.getStates)


module.exports = router;