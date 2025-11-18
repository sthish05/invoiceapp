const express = require("express");
const connectDB = require("./config/db");

const app = express();
app.use(express.json());

// MongoDB connect
connectDB();

app.listen(5000, () => console.log("Server running on port 5000"));

app.use("/api/invoices", require("./routes/invoiceRoutes"));