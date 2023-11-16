import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

import { logger, logEvents } from "./middleware/logger";
import errorHandler from "./middleware/errorHandler";
import db from "./models";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["POST", "GET", "OPTIONS", "PUT"],
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

app.use(logger);
app.use(errorHandler);
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

const PORT = process.env.PORT || 3333;
console.log("E-commerce Server");

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running onn port ${PORT}`);
  });
});
