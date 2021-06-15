import dotenv from "dotenv";
import products from "./data/products.js";
import categorys from "./data/categorys.js";
import Product from "./models/productModel.js";
import Category from "./models/categoryModel.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const importDataToDatabase = async () => {
  try {
    await Product.deleteMany();
    await Category.deleteMany();

    const categorySample = categorys.map((category) => {
      return {
        ...category,
      };
    });

    //const createdCategoryes = await Category.insertMany(categorys);
    // const createdCategoryId = createdCategoryes._id;

    const productSample = products.map((product) => {
      return {
        ...product,
      };
    });

    await Product.insertMany(productSample);
    await Category.insertMany(categorySample);

    console.log("Fake data imported");
    process.exit();
  } catch (e) {
    console.error(`${e}`);
    process.exit(1);
  }
};

const deleteDatafromDatabase = async () => {
  try {
    await Product.deleteMany();
    await Category.deleteMany();
    console.log("Data has been destroyed");
  } catch (e) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  deleteDatafromDatabase();
} else {
  importDataToDatabase();
}
