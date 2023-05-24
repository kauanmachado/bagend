const express = require('express')
const app = express()

app.use(express.json())
// Carregando rotas
const barbearias = require('./routes/barbearias')
const clientes = require('./routes/clientes')
app.use(barbearias)
app.use(clientes)



app.listen(8001, () => {
    console.log('server on')
})