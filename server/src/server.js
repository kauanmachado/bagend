const express = require('express')
const cors = require('cors')
const app = express()
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173', // Substitua com o URL do seu frontend
    credentials: true, // Permite o uso de cookies e cabeçalhos personalizados
  }));
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Credentials', 'true'); // Permitir credenciais (cookies)
//     next();
//   });
app.use(express.json())

// Carregando rotas
const barbearias = require('./routes/barbearias')
const clientes = require('./routes/clientes')
app.use(barbearias)
app.use(clientes)



app.listen(8001, () => {
    console.log('server on')
})