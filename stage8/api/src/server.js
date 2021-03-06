require("express-async-errors")
const migrationsRun = require("./database/sqlite/migrations")
const AppError = require("./utils/AppError")
const uploadConfig = require("./configs/upload")

const cors = require("cors")
const express = require("express")
const routes = require('./routes')

migrationsRun()

const app = express()
app.use(cors())
app.use(express.json())

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER))

app.use(routes)

app.use((error, req, res, next) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: "error",
      message: error.message
    })
  }

  console.error(error)

  return res.status(500).json({
    status: "Error",
    message: "Internal server error"
  })
})

app.use((req, res) => {
  res.status(404).send("<h1 style='font-family:sans-serif'>404! Página não encontrada</h1>")
})

const PORT = 3333
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))