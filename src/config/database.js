const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize( // <-- Adicione 'new' aqui
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT || process.env.DB_CONNECTION || "mysql"
    }
);

module.exports = sequelize;