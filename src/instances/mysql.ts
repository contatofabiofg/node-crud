//Aqui eu estou conectando meu node ao banco de dados sql, através do sequelize
// e usando as informações salvas do .env

import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize(
  process.env.MYSQL_DB as string,
  process.env.MYSQL_USER as string,
  process.env.MYSQL_PASSWORD as string,
  {
    dialect: "mysql",
    port: parseInt(process.env.MYSQL_PORT as string)

  }
);