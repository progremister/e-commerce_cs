import { Sequelize } from "sequelize";

import dotenv from "dotenv";
dotenv.config();

// create connection to our db
let sequelize;

sequelize = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USER!,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
  }
);

export default sequelize;