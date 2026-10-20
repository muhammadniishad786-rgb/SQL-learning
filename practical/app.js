import express from "express";
import studentRoutes from "./routes/studentRoutes.js"

const app = express();

// Middleware
app.use(express.json());

// students routes
app.use("/api", studentRoutes)

// Test route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

export default app;
