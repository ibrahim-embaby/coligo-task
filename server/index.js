const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const { notFound, errorHandler } = require("./middlewares/error");
const connectToDb = require("./config/connectToDb");

app.use(express.json());
app.use(cors());

connectToDb();

app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/announcements", require("./routes/announcementRoutes"));
app.use("/api/v1/quizzes", require("./routes/quizRoutes"));
app.use("/api/v1/courses", require("./routes/courseRoutes"));

app.use(notFound);
app.use(errorHandler);

app.listen(process.env.PORT || 8000, () => {
  console.log("server is running");
});
