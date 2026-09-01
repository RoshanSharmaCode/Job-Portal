import jwt from "jsonwebtoken";
import Compnay from "../models/Compnay.js";

export const protectCompnay = async (req, res, next) => {
  const token = req.headers.token;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Not authorized, Login again",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.company = await Compnay.findById(decoded.id).select("-password");
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Not authorized, token is invalid",
    });
  }
};
