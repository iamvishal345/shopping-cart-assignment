import { Router } from "express";
const router = Router();
import products from "./products/index.get.json";
import banners from "./banners/index.get.json";
import categories from "./categories/index.get.json";

router.get("/products", (req, res) => {
  res.json(products);
});
router.get("/banners", (req, res) => {
  console.log("HERE");
  res.json(banners);
});

router.get("/categories", (req, res) => {
  res.json(categories);
});

router.post("/login", (req, res) => {
  //Validate request body and generate JWT token
  res.json(categories);
});

router.post("/register", (req, res) => {
  //Validate request body
  res.json(categories);
});
module.exports = router;
