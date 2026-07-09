import Wishlist from "../models/Wishlist.js";
import Product from "../models/Product.js";

export const addToWishlist = async (req, res) => {
  try {
    const { productId } = req.body;

    const product = await Product.findById(productId);

    if (!product || !product.isActive) {
      return res.status(404).json({
        success: false,
        message: "Product not found.",
      });
    }

    let wishlist = await Wishlist.findOne({
      user: req.user.id,
    });

    if (!wishlist) {
      wishlist = new Wishlist({
        user: req.user.id,
        products: [],
      });
    }

    if (wishlist.products.includes(productId)) {
      return res.status(400).json({
        success: false,
        message: "Product already in wishlist.",
      });
    }

    wishlist.products.push(productId);

    await wishlist.save();

    res.status(200).json({
      success: true,
      message: "Added to wishlist.",
      wishlist,
    });
  } catch (error) {
    console.error("Add To Wishlist Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne({
      user: req.user.id,
    }).populate("products");

    if (!wishlist) {
      return res.status(200).json({
        success: true,
        wishlist: [],
      });
    }

    res.status(200).json({
      success: true,
      wishlist,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const removeFromWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne({
      user: req.user.id,
    });

    if (!wishlist) {
      return res.status(404).json({
        success: false,
        message: "Wishlist not found.",
      });
    }

    wishlist.products = wishlist.products.filter(
      (product) => product.toString() !== req.params.productId
    );

    await wishlist.save();

    res.status(200).json({
      success: true,
      message: "Removed from wishlist.",
      wishlist,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};