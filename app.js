import express from 'express'
const app = express()
const port = 4000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('node app')
})

app.use('/login', (req, res) => {
  res.json('Loggeado')
})

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto http://localhost:${port}`)
})
