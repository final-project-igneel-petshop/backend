const { users } = require("../api/db/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const fs = require("fs");
const handlebars = require("handlebars");

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
      error,
      message: "Internal server error"
    });
  }
};

const userRegistration = async (req, res) => {
  try {
    const {
      fullName,
      email,
      password,
      phoneNumber,
      street,
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
      street,
      city,
      zipcode
    });

    return res.status(201).send({
      message: "Successfully registered",
      create
    });
  } catch (error) {
    res.status(500).send({
      error,
      message: `Internal server error`
    });
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
    } else {
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) {
          console.log(err);
        }
        if (!result) {
          return res.status(401).send({
            message: `Password doesn't match`
          });
        } else {
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
        }
      });
    }
  } catch (error) {
    res.status(500).send({
      error,
      message: `Internal server error`
    });
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
      error,
      message: "user update failed"
    });
  }
};

const readHTMLFile = function(path, callback) {
  fs.readFile(path, { encoding: "utf-8" }, function(err, html) {
    if (err) {
      throw err;
      callback(err);
    } else {
      callback(null, html);
    }
  });
};

const sendEmail = async (req, res) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "jaypang8@gmail.com",
      pass: process.env.EMAIL_PASSWORD
    }
  });
  readHTMLFile(__dirname + '/../emailTemplate/email.html', function (err,html){
    let template = handlebars.compile(html)
    let replacements = {
      id: 1
    }
    let htmlToSend = template(replacements)
    let mailOptions = {
      from: "jaypang8@gmail.com",
      to: req.body.email,
      subject: "Your Order",
      html: htmlToSend
    };
    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        return res.send(error);
      } else {
        return res.send("Email sent: " + info.response);
      }
    });
  })
};

module.exports = {
  userRegistration,
  userLogin,
  getUser,
  updateUser,
  sendEmail
};
