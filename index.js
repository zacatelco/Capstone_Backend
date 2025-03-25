import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";


// Routers
// import { healthRouter } from "./HEALTH/health.js";
import friendRouter from "./routes/friendslist.js";
import postRouter from "./routes/posts.js";
import userRouter from "./routes/user.js";

dotenv.config();


// Connect to MongoDB
await mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((e) => console.error(e));

const PORT = process.env.PORT || 4000;
const app = express();

// view engine
app.set("views", "./views");
// app.set("view engine", "pug");

// Middleware
app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());

// Routes
// Root Route
app.get("/", (req, res) => {
  res.send("<h1>Welcome to MySpace Clone API</h1>");
});

// API Routes
// app.use("/api/health", healthRouter);
app.use("/api/friends", friendRouter);
app.use("/api/posts", postRouter);
app.use("/api/users", userRouter);

// Global error handling
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Seems like we messed up somewhere...");
});

app.listen(PORT, () => console.log(`Sever is running on port: ${PORT}`));
