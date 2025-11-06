import express from "express";
// import { login, logout, signup } from "../controllers/auth.controller.js";
import { signup, login, logout, onboard } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

// Signup route
router.post("/signup", signup);

// Login route
router.post("/login", login);

// Logout route
router.post("/logout", logout);

router.post("/onboarding", protectRoute, onboard);

//check if user is locked in or not
router.get("/me", protectRoute, (req, res) => {
    res.status(200).json({ success: true, user: req.user });
});

export default router;
