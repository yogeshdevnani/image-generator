import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";

const PORT = 8080;

dotenv.config;

const app = express();
app.use(cors());
app.use(
  express.json({
    limit: "50mb",
  })
);
app.get("/", async (req, res) => {
  res.send("Hello my imaginative friend!");
});

const startServer = () => {
  app.listen(PORT);
  console.log(`Server started on port: ${PORT}`);
};

startServer();
