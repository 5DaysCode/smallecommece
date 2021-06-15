import express from "express";
import {
  getProducts,
  getProductsByCategoryName,
  getProductById,
  getTopRatedProducts,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/top", getTopRatedProducts);

export default router;
