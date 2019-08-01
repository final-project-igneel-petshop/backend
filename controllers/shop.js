const models = require("../api/db/models");

const productController = async(req, res) => {
  models.product.findAll()
    .then(products => {
      res.send({
        title: "All products",
        products: products
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
        cartId: cart.id
      },
      include: [
        {
          model: models.product
        }
      ]
    })
    .then(productCart => {
      productsCart = productCart;
      return res.send({
        totalPrice: totalPrice,
        productsCart: productsCart
      });
    })
    .catch(err => {
      console.log("ERROR: ", err);
      return res.redirect("/");
    });
};

const addToCart = (req, res) => {
  const productId = req.params.id;
  const userId = req.params.id;
  let productsCart = [];
  let totalPrice = 0;

  try {
    let product = models.product.findById(productId)
    let cart = models.cart.findOne({
        where: {
            userId: req.params.id
        }
    })
    if (cart === null ) {
        let newCart = models.cart
            .build({
                UserId: userId,
                totalPrice: product.totalPrice,
                totalQte: 1
            })
            .save()
        let productCart = models.productCart.build({
            cartId: newCart.id,
            productId: productId,
            totalPrice: product.price,
            totalQte: 1
        })
        .save()
        productsCart.push(productCart)
    }

    if (cart !== null) {
        totalPrice = cart.totalPrice

        let productCart = models.productCart.findOne({
            where: {
                cartId: cart.id,
                productId: product.id
            }
        })

        if (productCart === null) {
            models.productCart.build({
                cartId: cart.id,
                productId: product.id,
                totalPrice:product.price,
                totalQte: 1
            })
            .save()
        } else {
            productCart.update({
                totalQte: productCart.totalQte + 1
            })
        }

        productsCart = models.productCart.findAll({
            where: {
                cartId: cart.id
            },
            include: [{
                model: models.product
            }]
        })
    }
    return res.send({
        totalPrice: totalPrice,
        productsCart: productsCart
    })
  }
  catch (err) {
      console.log('HTTP error', err)
      return res.status(500).send()
  }
};

module.exports = {
  productController,
  findProducts,
  addToCart
};
