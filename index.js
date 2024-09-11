const express = require("express");
const userRoutes = require("./src/userRoutes");

// const cors = require("cors");
const app = express();
// app.use(cors());
const PORT = process.env.PORT || 4000;

// Middleware for parsing JSON data
app.use(express.json());

// Routes
app.use("/api/user", userRoutes);

// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
