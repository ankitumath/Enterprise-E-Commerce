import Order from "../models/Order.js";
import Cart from "../models/Cart.js";
import Product from "../models/Product.js";

export const placeOrder = async (req, res) => {
  try {
    const { shippingAddress, paymentMethod } = req.body;

    const cart = await Cart.findOne({ user: req.user.id }).populate(
      "items.product"
    );

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Cart is empty.",
      });
    }

    const orderItems = [];

    for (const item of cart.items) {
      if (item.product.stock < item.quantity) {
        return res.status(400).json({
          success: false,
          message: `${item.product.title} is out of stock.`,
        });
      }

      item.product.stock -= item.quantity;
      await item.product.save();

      orderItems.push({
        product: item.product._id,
        quantity: item.quantity,
        price:
          item.product.price -
          (item.product.price * item.product.discount) / 100,
      });
    }

    const order = await Order.create({
      user: req.user.id,
      products: orderItems,
      shippingAddress,
      paymentMethod,
      totalAmount: cart.totalPrice,
    });

    cart.items = [];
    cart.totalPrice = 0;

    await cart.save();

    res.status(201).json({
      success: true,
      message: "Order placed successfully.",
      order,
    });
  } catch (error) {
    console.error("Place Order Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};