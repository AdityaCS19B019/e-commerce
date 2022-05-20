const express = require('express');
const router = express.Router();

const { login , register} = require('../controllers/auth')
// const { register, login, forgotpassword, resetpassword } = require('../controllers/auth')

// router.route("/register").post(register)
// router.route("/login").post(login)
// router.route("/forgotpassword").post(forgotpassword)
// router.route("/resetpassword/:resetToken").put(resetpassword)

router.route("/login").post(login)
router.route("/register").post(register)

module.exports = router;