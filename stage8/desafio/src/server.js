const express = require("express")
const routes = require("./routes")

const app = express()

app.use(express.json())

app.use(routes)

// app.use('/', (req, res) => { 
//   return res.send('Hello from server')
// })

app.listen(3030, console.log('server running on port 3030'))