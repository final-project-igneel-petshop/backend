const router = require("express").Router();
const { userRegistration, userLogin, getUser, updateUser } = require("../controllers").User;

router.get("/get-user", getUser);

router.post("/register", userRegistration);

router.post("/login", userLogin);

router.put("/update-user/:id", updateUser)

module.exports = router;

// const express = require("express");
// const router = express.Router();

// const db = require("../api/db/models");

// /* GET users listing. */
// router.get("/", function(req, res, next) {
//   db.user
//     .findAll({})
//     .then(data => res.send(data))
//     .catch(error => res.send(error));
// });

// router.post("/register", (req, res) => {
//   db.user
//     .findOne({
//       where: {
//         email: req.body.email
//       }
//     })
//     .then(data => {
//       if (data) {
//         res.status(409).send({
//           message: "You already registered"
//         });
//       } else {
//         db.user.create({
//           fullName: req.body.fullName,
//           email: req.body.email,
//           password: req.body.password,
//           phoneNumber: req.body.phoneNumber,
//           address: req.body.address
//         });
//       }
//     });
// });

// router.post("/login", (req, res) => {
//   db.user
//     .findOne({
//       where: {
//         email: req.body.email,
//         password: req.body.password
//       }
//     })
//     .then(data => {
//       if (data) {
//         res.status(200).send({
//           message: "Login Successful"
//         });
//       } else {
//         res.send({
//           message: "Login failed"
//         });
//       }
//     });
// });
// module.exports = router;
