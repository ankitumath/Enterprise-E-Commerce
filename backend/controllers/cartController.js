import Cart from "../models/Cart.js";
import Product from "../models/Product.js";

export const addToCart = async (req, res) => {
  try {
    const { productId, quantity = 1 } = req.body;

    if (!productId) {
      return res.status(400).json({
        success: false,
        message: "Product ID is required.",
      });
    }

    const product = await Product.findById(productId);

    if (!product || !product.isActive) {
      return res.status(404).json({
        success: false,
        message: "Product not found.",
      });
    }

    let cart = await Cart.findOne({ user: req.user.id });

    if (!cart) {
      cart = new Cart({
        user: req.user.id,
        items: [],
      });
    }

    const existingItem = cart.items.find(
      (item) => item.product.toString() === productId
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({
        product: productId,
        quantity,
      });
    }

    cart.totalPrice = 0;

    for (const item of cart.items) {
      const productData = await Product.findById(item.product);

      if (productData) {
        const discountedPrice =
          productData.price -
          (productData.price * productData.discount) / 100;

        cart.totalPrice += discountedPrice * item.quantity;
      }
    }

    await cart.save();

    res.status(200).json({
      success: true,
      message: "Product added to cart.",
      cart,
    });
  } catch (error) {
    console.error("Add To Cart Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id })
      .populate("items.product")
      .populate("user", "name email");

    if (!cart) {
      return res.status(200).json({
        success: true,
        message: "Cart is empty.",
        cart: {
          items: [],
          totalPrice: 0,
        },
      });
    }

    res.status(200).json({
      success: true,
      cart,
    });
  } catch (error) {
    console.error("Get Cart Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateCartItem = async (req, res) => {
  try {
    const { quantity } = req.body;

    if (!quantity || quantity < 1) {
      return res.status(400).json({
        success: false,
        message: "Quantity must be at least 1.",
      });
    }

    const cart = await Cart.findOne({ user: req.user.id });

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found.",
      });
    }

    const item = cart.items.find(
      (item) => item.product.toString() === req.params.productId
    );

    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Product not found in cart.",
      });
    }

    item.quantity = quantity;

    let total = 0;

    for (const cartItem of cart.items) {
      const product = await Product.findById(cartItem.product);

      if (product) {
        const discountedPrice =
          product.price -
          (product.price * product.discount) / 100;

        total += discountedPrice * cartItem.quantity;
      }
    }

    cart.totalPrice = total;

    await cart.save();

    res.status(200).json({
      success: true,
      message: "Cart updated successfully.",
      cart,
    });
  } catch (error) {
    console.error("Update Cart Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const removeCartItem = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id });

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found.",
      });
    }

    cart.items = cart.items.filter(
      (item) => item.product.toString() !== req.params.productId
    );

    let total = 0;

    for (const cartItem of cart.items) {
      const product = await Product.findById(cartItem.product);

      if (product) {
        const discountedPrice =
          product.price -
          (product.price * product.discount) / 100;

        total += discountedPrice * cartItem.quantity;
      }
    }

    cart.totalPrice = total;

    await cart.save();

    res.status(200).json({
      success: true,
      message: "Item removed from cart.",
      cart,
    });
  } catch (error) {
    console.error("Remove Cart Item Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const clearCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id });

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found.",
      });
    }

    cart.items = [];
    cart.totalPrice = 0;

    await cart.save();

    res.status(200).json({
      success: true,
      message: "Cart cleared successfully.",
      cart,
    });
  } catch (error) {
    console.error("Clear Cart Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};