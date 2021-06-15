import express from "express";
const router = express.Router();

import { create, getCategoryes } from "../controllers/categoryController.js";
import {
    getProducts,
    getProductsByCategoryName,
    getProductById,
  } from "../controllers/productController.js";

router.route("/").get(getCategoryes);
router.route("/create").post(create);
router.route("/:category").get(getProductsByCategoryName);


export default router;
