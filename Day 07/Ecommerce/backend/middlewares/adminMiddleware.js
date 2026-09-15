export function adminMiddleware(req, res, next) {
  if (req.user.role === "admin") {
    next();
  } else {
    return res.status(403).json({
      success: false,
      message: "User Forbidden",
    });
  }
}
