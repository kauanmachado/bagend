const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')

const cookieParser = require('cookie-parser');

app.use('/uploads', express.static(path.join(__dirname, './uploads')))
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true, 
  }));
app.use(express.json())

// Carregando rotas
const barbearias = require('./routes/barbearias')
const clientes = require('./routes/clientes')
app.use(barbearias)
app.use(clientes)



app.listen(8001, () => {
    console.log('server on')
})