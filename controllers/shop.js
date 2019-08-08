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

const finalCheckout = async (req, res) => {
  // const userId = req.params.userId;

  models.cart
    .findAll({
      where: {
        userId: req.params.id
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

const addToCart = async (req, res) => {
  const productId = req.params.productId;
  const userId = req.params.userId;
  let productsCart = [];
  let totalPrice = 0;

  try {
    let product = await models.catProducts.findByPk(productId);
    let cart = await models.cart.findOne({
      where: {
        userId: req.params.userId
      }
    });
    if (cart === null) {
      let newCart = models.cart
        .build({
          UserId: userId,
          totalPrice: product.price,
          totalQte: 1
        })
        .save();
      let productCart = models.productCart
        .build({
          cartId: newCart.id,
          productId: productId,
          totalPrice: product.price,
          totalQte: 1
        })
        .save();
      await productsCart.push(productCart);
    }

    if (cart !== null) {
      totalPrice = cart.totalPrice;

      let productCart = await models.productCart.findOne({
        where: {
          cartId: cart.id,
          productId: product.id
        }
      });

      if (productCart === null) {
        models.productCart
          .build({
            cartId: cart.id,
            productId: product.id,
            totalPrice: product.price,
            totalQte: 1
          })
          .save();
      } else {
        productCart.update({
          totalQte: productCart.totalQte + 1
        });
      }

      productsCart = await models.productCart.findAll({
        where: {
          cartId: cart.id
        },
        include: [
          {
            model: models.product
          }
        ]
      });
    }
    return await res.send({
      totalPrice: totalPrice,
      productsCart: productsCart
    });
  } catch (err) {
    console.log("HTTP error", err);
    return res.status(500).send();
  }
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
        id: req.body.productId
      }
    });
    // console.log(product);

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
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  productController,
  findProducts,
  addToCart,
  displayOneProduct,
  checkOut,
  finalCheckout,
  dogProductController
};
