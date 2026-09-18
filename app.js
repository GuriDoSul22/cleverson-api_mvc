const express = require('express');
const app = express();
const sequelize = require('./src/config/database');
const userRoutes = require('./src/routes/userRoutes');
const cors = require('cors');

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api', userRoutes);

// Conexão com o banco e sincronização dos modelos
sequelize
    .authenticate()
    .then(() => {
        console.log('Banco de dados conectado com sucesso!');
        // O sync cria a tabela 'Users' no MySQL se ela ainda não existir
        return sequelize.sync({ alter: true });
    })
    .then(() => {
        console.log('Tabelas sincronizadas com sucesso!');
        app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
    })
    .catch(err => {
        console.error('Erro ao conectar ou sincronizar o banco de dados:', err);
    });