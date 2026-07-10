import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

const productStorage = new CloudinaryStorage({
  cloudinary,

  params: async (req, file) => ({
    folder: "enterprise-ecommerce/products",

    allowed_formats: ["jpg", "jpeg", "png", "webp"],

    public_id: `product-${Date.now()}`,
  }),
});

export const uploadProduct = multer({
  storage: productStorage,
});