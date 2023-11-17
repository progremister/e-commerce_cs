import express from "express";
import cors from "cors";
import path from "path";
import sequelize from "./config/connection";

import { logger, logEvents } from "./middleware/logger";
import errorHandler from "./middleware/errorHandler";
const apiRoutes = require('./api');

const app = express();

/* MIDDLEWARES */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

/* ROUTES */

app.use('/api', apiRoutes);

app.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

/* SERVER */

const PORT = process.env.PORT || 3333;
console.log("E-commerce Server");

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running onn port ${PORT}`);
  });
});
