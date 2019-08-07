const router = require("express").Router();
const { userRegistration, userLogin, getUser, updateUser, sendEmail } = require("../controllers").User;

router.get("/get-user", getUser);

router.post("/register", userRegistration);

router.post("/login", userLogin);

router.put("/update-user/:id", updateUser);

router.post("/send-email", sendEmail);

module.exports = router;
