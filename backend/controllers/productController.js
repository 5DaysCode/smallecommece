import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

const getProducts = asyncHandler(async (req, res) => {
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  const products = await Product.find({ ...keyword });
  res.json(products);
});


const getProductById = asyncHandler(async (req, res) => {
  console.log("getting product by id");
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
      throw new Error("Product not found");
  }
});



const getProductsByCategoryName = asyncHandler(async (req, res) => {
  const categoryKeyword = req.query.category;

  var condition = categoryKeyword
    ? { category: { $regex: new RegExp(categoryKeyword), $options: "i" } }
    : {};

  Product.find(condition)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
});

const getTopRatedProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}).sort({ rating: -1 }).limit(3);
  res.json(products);
});

export {
  getProducts,
  getProductsByCategoryName,
  getProductById,
  getTopRatedProducts,
};
