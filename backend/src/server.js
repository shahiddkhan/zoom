import express from "express";
import "dotenv/config"; // loads .env automatically
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import chatRoutes from "./routes/chat.route.js";

import { connectDB } from "./lib/db.js";

const app = express();

// Middleware (optional)
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, //allow frontend to send the cookies
  })
);
app.use(express.json()); // ai one
app.use(cookieParser()); //

// Use routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/chat", chatRoutes);

// Set PORT from .env or fallback
const PORT = process.env.PORT || 5001;

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectDB();
});
