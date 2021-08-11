import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import topratedRoutes from "./routes/topratedProducts.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import bodyparser from "body-parser";

dotenv.config();
connectDB();

const app = express();
// app.use(bodyparser.json);
app.use(express.json());

//parse requestas of content-type -application/json
// app.use(bodyparser.urlencoded({ extended: true }));

//Testing server
app.get("/", (req, res) => {
  res.send("API is running");
});

//routes middleware
app.use("/api/products", productRoutes);
app.use("/api/toprated", topratedRoutes);
app.use("/api/products/category", productRoutes);
app.use("/api/category", categoryRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Small e-commerce server is runing  in  ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
