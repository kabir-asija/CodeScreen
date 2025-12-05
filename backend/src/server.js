import express from "express";
import path from "path";
import dotenv from "dotenv";
import { connectDb } from "./lib/db.js";
import cors from 'cors'
import {serve } from 'inngest/express'
import {inngest,functions} from './lib/inngest.js'
import { clerkMiddleware } from '@clerk/express'
import chatRoutes from './routes/chatRoutes.js'


dotenv.config({quiet: true});

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

app.use(express.json())
app.use(cors({origin:process.env.CLIENT_URL, credentials:true}))
app.use(clerkMiddleware())

app.get("/hello", (req, res) => {
  res.send("Hello, World!");
});


app.use("/api/inngest", serve({client:inngest, functions}))
app.use("/api/chat",chatRoutes)

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
