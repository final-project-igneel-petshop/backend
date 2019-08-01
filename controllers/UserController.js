const { users } = require("../api/db/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const { JWT_SECRET } = process.env;

const getUser = async (req, res) => {
  try {
    const result = await users.findAll();

    res.send({
      message: "successfully get user",
      data: result
    });
  } catch (error) {
    res.status(500).send({
      message: "Internal server error"
    });
    throw new Error(error);
  }
};

const userRegistration = async (req, res) => {
  try {
    const {
      fullName,
      email,
      password,
      phoneNumber,
      address,
      city,
      zipcode
    } = req.body;

    const user = await users.findOne({
      where: {
        email: req.body.email
      }
    });

    if (user !== null) {
      return res.status(401).send({
        message: "you've already registered"
      });
    }
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(password, salt);

    const create = await users.create({
      fullName,
      email,
      password: hash,
      phoneNumber,
      address,
      city,
      zipcode
    });

    return res.status(201).send({
      message: "Successfully registered",
      create
    });
  } catch (error) {
    res.status(500).send({
      message: `Internal server error`
    });
    throw new Error(error);
  }
};

const userLogin = async (req, res) => {
  try {
    const user = await users.findOne({
      where: {
        email: req.body.email
      }
    });
    if (user === null) {
      return res.status(401).send({
        message: "user not found"
      });
    }
    const compare = bcrypt.compareSync(req.body.password, user.password);

    if (!compare) {
      return res.status(401).send({
        message: `Password doesn't match`
      });
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email
      },
      JWT_SECRET
    );
    return res.send({
      message: "successfully logged in",
      data: {
        token
      }
    });
  } catch (error) {
    res.status(500).send({
      message: `Internal server error`
    });
    throw new Error(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await users.findByPk(req.params.id);

    if (user === null) {
      return res.send({
        message: "User not found"
      });
    }
    const { street, city, zipcode } = req.body;
    const updatedUser = await user.update({ street, city, zipcode });

    res.send({
      message: "User update success",
      updatedUser
    });
  } catch (error) {
    res.status(500).send({
      message: "user update failed"
    });
    throw new Error(error);
  }
};

const sendEmail = function(req, res) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "jaypang8@gmail.com",
      pass: process.env.EMAIL_PASSWORD
    }
  });
  let mailOptions = {
    from: "jaypang8@gmail.com",
    to: "irfansumapraja@gmail.com",
    subject: "Sending Email using Node.js",
    text: "That was easy!"
  };
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      return res.send(error);
    } else {
      return res.send("Email sent: " + info.response);
    }
  });
};

module.exports = {
  userRegistration,
  userLogin,
  getUser,
  updateUser,
  sendEmail
};
