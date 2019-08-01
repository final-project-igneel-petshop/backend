const { users } = require("../api/db/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
    const { fullName, email, password, phoneNumber, address, city, zipcode } = req.body;

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

const updateUser = async (req,res) => {
  try{
    const user = await users.findByPk(req.params.id);

    if (user === null) {
      return res.send({
        message: 'User not found'
      })
    }
    const {address, city, zipcode} = req.body;
    const updatedUser = await user.update({address, city, zipcode});
    
    res.send({
      message: "User update success",
      updatedUser
    });
  } catch (error){
    res.status(500).send({
      message: "user update failed"
    });
    throw new Error(error);
  }
};

module.exports = {
  userRegistration,
  userLogin,
  getUser,
  updateUser
};
