export const authorize = (...roles) => {
  return (req, res, next) => {
    try {
      // Check if user exists
      if (!req.user) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized. Please login first.",
        });
      }

      // Check if user's role is allowed
      if (!roles.includes(req.user.role)) {
        return res.status(403).json({
          success: false,
          message: "Access denied. You do not have permission.",
        });
      }

      next();
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Server Error",
      });
    }
  };
};