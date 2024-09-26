const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 5001;
const contactRoutes = require("./routes/contactsRoutes");

app.use(express.json());
app.use("/api/contacts", contactRoutes);
app.use(errorHandler);
app.listen(port, () => {
  console.log(`Server running on port  http://localhost:${port}`);
});
