const express = require('express')
const imageRoutes = require('./src/image/routes')

const app = express()
const port=3000

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/v1/images', imageRoutes);

app.listen(port,  () =>
  console.log(`Server listening on port ${port}`)
)