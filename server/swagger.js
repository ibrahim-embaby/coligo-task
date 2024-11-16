const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const path = require("path");

const swaggerDocs = (app) => {
  const announcementDocs = YAML.load(
    path.join(__dirname, "./swaggerDocs/announcement.yaml")
  );
  const quizDocs = YAML.load(path.join(__dirname, "./swaggerDocs/quiz.yaml"));
  const courseDocs = YAML.load(
    path.join(__dirname, "./swaggerDocs/course.yaml")
  );
  const userDocs = YAML.load(path.join(__dirname, "./swaggerDocs/user.yaml"));

  // Merge all docs
  const docs = {
    openapi: "3.0.0",
    info: {
      title: "Coligo API",
      version: "1.0.0",
      description:
        "API for managing users, courses, quizzes, and announcements",
    },
    servers: [
      {
        url: "http://localhost:8000",
        description: "Development server",
      },
    ],
    paths: {
      ...announcementDocs.paths,
      ...quizDocs.paths,
      ...courseDocs.paths,
      ...userDocs.paths,
    },
    components: {
      schemas: {
        ...announcementDocs.components.schemas,
        ...quizDocs.components.schemas,
        ...courseDocs.components.schemas,
        ...userDocs.components.schemas,
      },
    },
  };

  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(docs));
};

module.exports = swaggerDocs;
