import { protect } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/roleMiddleware.js";

import express from "express";
import {
  registerUser,
  loginUser,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/profile", protect, (req, res) => {
  res.status(200).json({
    success: true,
    message: "Protected Route Accessed Successfully",
    user: req.user,
  });
});

router.get(
  "/admin",
  protect,
  authorize("admin"),
  (req, res) => {
    res.json({
      success: true,
      message: "Welcome Admin!",
    });
  }
);

export default router;