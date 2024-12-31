const express = require('express')
const app = express()
const port = 5000
const path = require('path')


// Configurar o diretório para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')))


app.get('/nailsmv', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/nailsmv`)
})