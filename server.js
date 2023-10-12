const express = require("express");
const app = express();
const authRoute = require("./routers/auth");
const postsRoute = require("./routers/posts");
const userRoute = require("./routers/users");
const cors = require("cors");

app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
  });

require("dotenv").config();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());
app.use("/api/auth",authRoute);
app.use("/api/posts",postsRoute);
app.use("/api/users",userRoute);

app.listen(PORT, () => console.log(`server is running on Port ${PORT}`));
