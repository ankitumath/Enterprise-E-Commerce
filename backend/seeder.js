import dotenv from "dotenv";

import connectDB from "./config/database.js";

import User from "./models/User.js";
import Category from "./models/Category.js";
import Product from "./models/Product.js";

import users from "./data/users.js";
import categories from "./data/categories.js";
import products from "./data/products.js";

dotenv.config();

await connectDB();

const importData = async () => {
  try {
    console.log("🗑️ Deleting existing data...");

    await Product.deleteMany();
    await Category.deleteMany();
    await User.deleteMany();

    console.log("👤 Creating users...");

    const createdUsers = await User.create(users);

    const adminUser = createdUsers.find(
      (user) => user.role === "admin"
    );

    console.log("📂 Creating categories...");

const createdCategories = [];

for (const category of categories) {
  const newCategory = await Category.create(category);
  createdCategories.push(newCategory);
}
    const categoryMap = {};

    createdCategories.forEach((category) => {
      categoryMap[category.name] = category._id;
    });

    console.log("📦 Creating products...");

    const preparedProducts = products.map((product) => ({
      ...product,
      createdBy: adminUser._id,
      category: categoryMap[product.category],
    }));

for (const product of preparedProducts) {
  await Product.create(product);
}
    console.log("🎉 Database Seeded Successfully!");

    process.exit(0);
  } catch (error) {
    console.error("❌ Seeder Error");
    console.error(error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Product.deleteMany();
    await Category.deleteMany();
    await User.deleteMany();

    console.log("🗑️ Database Cleared Successfully");

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}