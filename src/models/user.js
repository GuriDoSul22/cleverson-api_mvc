const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Usar ../ em vez de /src/

const User = sequelize.define("User", {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = User;