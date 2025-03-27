const express = require("express");
const app = express();
const productRoutes = require("./routes/productRoutes");
app.use(express.json());
app.use("/", productRoutes);

app.all("*", (req, res) => {
  res.status(400).json({
    status: "fail",
    message: err.message,
  });
});
module.exports = app;
