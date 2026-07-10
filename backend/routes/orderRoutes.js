import express from "express";

import {
  placeOrder,
  getMyOrders,
  getOrderById,
  getAllOrders,
  updateOrderStatus,
  cancelOrder,
} from "../controllers/orderController.js";

import { protect } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/roleMiddleware.js";

const router = express.Router();

// Customer Routes
router.post("/", protect, placeOrder);

router.get("/my-orders", protect, getMyOrders);

router.get("/:id", protect, getOrderById);

router.put("/:id/cancel", protect, cancelOrder);

// Admin Routes
router.get("/", protect, authorize("admin"), getAllOrders);

router.put(
  "/:id/status",
  protect,
  authorize("admin"),
  updateOrderStatus
);

export default router;