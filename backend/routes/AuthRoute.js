const router = require("express").Router();
const { Signup } = require("../controllers/AuthController");

router.post("/signup", Signup);

module.exports = router;
