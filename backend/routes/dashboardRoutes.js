import express from "express";

import {
  getDashboardSummary,
  getLatestOrders,
  getLowStockProducts,
} from "../controllers/dashboardController.js";

import { protect } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.get(
  "/summary",
  protect,
  authorize("admin"),
  getDashboardSummary
);

router.get(
  "/latest-orders",
  protect,
  authorize("admin"),
  getLatestOrders
);

router.get(
  "/low-stock",
  protect,
  authorize("admin"),
  getLowStockProducts
);

export default router;