import express from "express";
import {
  getProducts,
  getProductsByCategoryName,
  getProductById,
  getTopRatedProducts,
} from "../controllers/productController.js";

const router = express.Router();
router.route("/").get(getProducts);
router.route("/category").get(getProductsByCategoryName);

router.route("/:id").get(getProductById);

export default router;
