const { Router } = require("express")

const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const UsersController = require("../controllers/UsersController")

const usersController = new UsersController()

const usersRouter = Router()

usersRouter.post('/', usersController.create )

usersRouter.use(ensureAuthenticated)

usersRouter.put('/', usersController.update)

module.exports = usersRouter