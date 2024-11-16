// Create a web service that will be used to retrieve all announcement data.
// Create a web service that will be used to retrieve all of the quiz data.
// Make all of the CRUD operations for the announcement and quiz

const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const connectToDb = require("./config/connectToDb");
const swaggerDocs = require("./swagger");

app.use(express.json());
app.use(cors());

connectToDb();

app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/users", require("./routes/userRoutes"));
app.use("/api/v1/announcements", require("./routes/announcementRoutes"));
app.use("/api/v1/quizzes", require("./routes/quizRoutes"));
app.use("/api/v1/courses", require("./routes/courseRoutes"));

swaggerDocs(app);

app.listen(process.env.PORT || 8000, () => {
  console.log("server is running");
});
