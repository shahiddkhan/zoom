import express from "express";
import "dotenv/config"; // loads .env automatically
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";

import { connectDB } from "./lib/db.js";

const app = express();

// Middleware (optional)
app.use(express.json()); // ai one 
app.use(cookieParser()); //

// Use routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

// Set PORT from .env or fallback
const PORT = process.env.PORT || 5001;

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectDB();
});
