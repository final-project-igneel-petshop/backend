const { users, cart, catProducts } = require("../api/db/models");
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
      user: "invoices.bowwowmeow@gmail.com",
      pass: process.env.EMAIL_PASSWORD
    }
  });
  
  readHTMLFile(
    __dirname + "/../emailTemplate/email.html",
    async (err, html) => {
      let template = handlebars.compile(html);
      const carts = await cart.findAll({
        where: {
          userId: req.body.userId,
          status: false
        },
        include: [
          {
            model: users,
            model: catProducts
          }
        ]
      });
      // const product = await catProducts.findOne({
      //   where: {
      //     id: req.body.catProductId
      //   }
      // });

      // console.log(
      //   Array.from(carts).forEach(item => {
      //     item;
      //   })
      // );
      // let userDetails = {
      //   id: Math.random(),
      //   date: new Date(),
      //   totalPrice: carts[0].totalPrice,
      //   fullName: carts[0].fullName,
      //   street: carts[0].street,
      //   city: carts[0].city,
      //   zipcode: carts[0].zipcode,
      //   totalQty: carts[0].totalQte + carts[1].totalQte + carts[2].totalQte
      // };

      // let replacements;

      // carts.forEach(item => {
      //   replacements = {
      //     imagePath1: item.imagePath,
      //     title1: item.title,
      //     qte1: item.totalQte,
      //     price1: item.price,
      //     imagePath2: item.imagePath,
      //     title2: item.title,
      //     qte2: item.totalQte,
      //     price2: item.price,
      //     imagePath3: item.imagePath,
      //     title3: item.title,
      //     qte3: item.totalQte,
      //     price3: item.price
      //   };
      // });

      let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      let date = new Date();
      let today = date.getDate();
      let month = date.getMonth();
      let year = date.getFullYear();

      let replacements = {
        id: Math.ceil(Math.random() * 10000),
        date: `${today} - ${months[month]} - ${year}`,
        totalPrice: carts[0].totalPrice,
        fullName: carts[0].fullName,
        street: carts[0].street,
        city: carts[0].city,
        zipcode: carts[0].zipcode,
        imagePath1: carts[0].imagePath,
        title1: carts[0].title,
        qte1: carts[0].totalQte,
        price1: carts[0].price,
        imagePath2: carts[1].imagePath,
        title2: carts[1].title,
        qte2: carts[1].totalQte,
        price2: carts[1].price,
        imagePath3: carts[2].imagePath,
        title3: carts[2].title,
        qte3: carts[2].totalQte,
        price3: carts[2].price,
        totalQty: carts[0].totalQte + carts[1].totalQte + carts[2].totalQte
      };
      // let newReplacements = Object.assign({}, userDetails, replacements);
      let htmlToSend = template(replacements);
      let mailOptions = {
        from: "invoices.bowwowmeow@gmail.com",
        to: req.body.email,
        subject: "Thank you for your order",
        html: htmlToSend
      };
      transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
          return res.send(error);
        } else {
          return res.send("Email sent: " + info.response);
        }
      });
    }
  );
};

module.exports = {
  userRegistration,
  userLogin,
  getUser,
  updateUser,
  sendEmail
};
