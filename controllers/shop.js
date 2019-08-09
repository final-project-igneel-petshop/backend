const models = require("../api/db/models");

const productController = async (req, res) => {
  models.catProducts
    .findAll()
    .then(catProducts => {
      res.send({
        title: "All products",
        products: catProducts
      });
    })
    .catch(err => {
      console.log(err.message);
    });
};

const dogProductController = async (req, res) => {
  models.dogProducts
    .findAll()
    .then(dogProducts => {
      res.send({
        title: "All products",
        products: dogProducts
      });
    })
    .catch(err => {
      console.log(err.message);
    });
};

const displayOneProduct = (req, res) => {
  models.catProducts
    .findOne({
      where: {
        id: req.params.id
      }
    })
    .then(product => {
      res.send({
        product: product
      });
    })
    .catch(err => {
      console.log(err.message);
    });
};

const displayOneDogProduct = (req, res) => {
  models.dogProducts
    .findOne({
      where: {
        id: req.params.id
      }
    })
    .then(dp => {
      res.send({
        product: dp
      });
    })
    .catch(err => {
      console.log(err.message);
    });
};

const findProducts = (req, res) => {
  models.productCart
    .findAll({
      where: {
        cartId: req.params.id
      },
      include: [
        {
          model: models.catProducts
        }
      ]
    })
    .then(productCart => {
      productsCart = productCart;
      return res.send({
        totalPrice: totalPrice,
        productCart
      });
    })
    .catch(err => {
      console.log("ERROR: ", err);
      // return res.redirect("/");
    });
};

const finalCheckout = (req, res) => {
  // const userId = req.params.userId;

  models.cart
    .findAll({
      where: {
        userId: req.params.id,
        status: false
      },
      include: [
        {
          model: models.users,
          model: models.catProducts
        }
      ]
    })
    .then(users => {
      return res.send({
        nodemailer: users
      });
    });
};

const checkOut = async (req, res) => {
  try {
    const user = await models.users.findOne({
      where: {
        id: req.body.userId
      }
    });
    const product = await models.catProducts.findOne({
      where: {
        id: req.body.catProductId || ""
      }
    });

    const dogProduct = await models.dogProducts.findOne({
      where: {
        id: req.body.dogProductId || ""
      }
    });
    if (product == null) {
      models.cart
        .create({
          ...req.body,
          imagePath: dogProduct.imagePath,
          title: dogProduct.title,
          price: dogProduct.price,
          fullName: user.fullName,
          email: user.email,
          street: user.street,
          city: user.city,
          zipCode: user.zipcode
        })
        .then(res => res.send(res))
        .catch(err => res.send(err));
    } else {
      models.cart
        .create({
          ...req.body,
          imagePath: product.imagePath,
          title: product.title,
          price: product.price,
          fullName: user.fullName,
          email: user.email,
          street: user.street,
          city: user.city,
          zipCode: user.zipcode
        })
        .then(res => res.send(res))
        .catch(err => res.send(err));
    }
  } catch (error) {
    console.log(error);
  }
};

const updateStatus = async (req, res) => {
  try {
    const updatedCart = await models.cart.update(
      { status: true },
      { where: { userId: req.params.id } }
    );

    res.send({ status: true });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  productController,
  findProducts,
  displayOneProduct,
  checkOut,
  finalCheckout,
  dogProductController,
  displayOneDogProduct,
  updateStatus
};
