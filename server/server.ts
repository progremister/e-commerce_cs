import express from "express";
import session from "express-session";
import cors from "cors";
import path from "path";
import bodyParser from "body-parser";

import sequelize from "./config/connection";
import { logger } from "./middleware/logger";
import errorHandler from "./middleware/errorHandler";
import apiRoutes from "./routes/api";

const app = express();

/* MIDDLEWARES */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:5174",
    methods: ["POST", "GET", "OPTIONS", "PUT"],
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

app.use(logger);
app.use(errorHandler);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


/* ROUTES */
app.use("/assets", express.static(path.join(__dirname, "public/assets")));
app.use("/api", apiRoutes);

/* SESSION FOR CART */

app.use(
  session({
    secret: process.env.SESSION_KEY!, // Change this to a secure secret
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

/* SERVER */

const PORT = process.env.PORT || 3333;
console.log("E-commerce Server");

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
