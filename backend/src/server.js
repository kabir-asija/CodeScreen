import express from "express";
import path from "path";
import dotenv from "dotenv";
import { connectDb } from "./lib/db.js";
dotenv.config({quiet: true});

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}

connectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error starting the server: ", error);
  });
