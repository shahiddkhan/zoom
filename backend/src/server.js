import express from "express";
import "dotenv/config"; // loads .env automatically
import authRoutes from "./routes/auth.route.js";

const app = express();

// Middleware (optional)
app.use(express.json());

// Use routes
app.use("/api/auth", authRoutes);

// Set PORT from .env or fallback
const PORT = process.env.PORT || 5001;

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
