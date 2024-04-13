const router = require("express").Router();
const templescontroller= require('../controllers/templescontroller.js');
const {verifyToken} = require("../middleware/jwt_token")

router.post('/',verifyToken, templescontroller.addTemple)
router.get('/', templescontroller.getTemples)


module.exports = router;