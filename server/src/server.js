const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
// Carregando rotas
const barbearias = require('./routes/barbearias')
const clientes = require('./routes/clientes')
app.use(barbearias)
app.use(clientes)



app.listen(8001, () => {
    console.log('server on')
})