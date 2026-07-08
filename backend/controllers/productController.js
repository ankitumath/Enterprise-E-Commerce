import Product from "../models/Product.js";

export const createProduct = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      discount,
      category,
      brand,
      stock,
      images,
    } = req.body;

    // Validate required fields
    if (!title || !description || price == null || stock == null) {
      return res.status(400).json({
        success: false,
        message: "Title, description, price and stock are required.",
      });
    }

    // Check if slug already exists
    const slug = title
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");

    const existingProduct = await Product.findOne({ slug });

    if (existingProduct) {
      return res.status(409).json({
        success: false,
        message: "A product with the same title already exists.",
      });
    }

    const product = await Product.create({
      title,
      description,
      price,
      discount,
      category,
      brand,
      stock,
      images,
      createdBy: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: "Product created successfully.",
      product,
    });
  } catch (error) {
    console.error("Create Product Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({
  isActive: true,
})
.populate("category", "name slug")
.populate("createdBy", "name email");

    res.status(200).json({
      success: true,
      count: products.length,
      products,
    });
  } catch (error) {
    console.error("Get Products Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getProductBySlug = async (req, res) => {
  try {
    const product = await Product.findOne({
      slug: req.params.slug,
      isActive: true,
    });

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found.",
      });
    }

    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    console.error("Get Product Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product updated successfully.",
      product: updatedProduct,
    });
  } catch (error) {
    console.error("Update Product Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      {
        isActive: false,
      },
      {
        new: true,
      }
    );

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product deleted successfully.",
    });
  } catch (error) {
    console.error("Delete Product Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

