const express = require('express');
const app = express();
const sequelize = require('./src/config/database');
const userRoutes = require('./src/routes/userRoutes');
const cors = require('cors');


app.use(cors());
app.use(express.json());


app.use('/api', userRoutes);


sequelize
    .authenticate()
    .then(() => {
        console.log('Banco de dados conectado com sucesso!');
       
        return sequelize.sync({ alter: true });
    })
    .then(() => {
        console.log('Tabelas sincronizadas com sucesso!');
        app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
    })
    .catch(err => {
        console.error('Erro ao conectar ou sincronizar o banco de dados:', err);
    });