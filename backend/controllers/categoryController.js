import asyncHandler from "express-async-handler";
import Category from "../models/categoryModel.js";

const create = asyncHandler(async (req, res) => {
  const category = new Category(req.body);
  category.save((err, data) => {
    if (err) {
      console.error( err);
    }
    res.json({ data });
  });
});

const getCategoryes = asyncHandler(async (req, res) => {
  const categoryes = await Category.find({});
  res.json(categoryes);
});

export { create, getCategoryes };
