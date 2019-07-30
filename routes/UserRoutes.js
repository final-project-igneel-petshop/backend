const router = require("express").Router();
const { userRegistration, userLogin, getUser, updateUser } = require("../controllers").User;

router.get("/get-user", getUser);

router.post("/register", userRegistration);

router.post("/login", userLogin);

router.put("/update-user/:id", updateUser)

module.exports = router;

