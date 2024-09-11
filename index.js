const express = require("express");
const userRoutes = require("./src/userRoutes");

// const cors = require("cors");
const app = express();
// app.use(cors());
const PORT = process.env.PORT || 4000;

// Middleware for parsing JSON data
app.use(express.json());

// app.use("/",(req, res)=>{
//     res.json({ message: "Please use like this format",
//         format:"https://geeks-for-geeks-api-five.vercel.app/api/user/Your_User_Name"
//      });
// })

// Routes
app.use("/api/user/", userRoutes);

// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
