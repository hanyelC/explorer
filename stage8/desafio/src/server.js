const express = require("express")
const routes = require("./routes")

const migrationsRun = require("./database/sqlite/migrations")

migrationsRun()

const app = express()

app.use(express.json())

app.use(routes)


app.listen(3030, console.log('server running on port 3030'))