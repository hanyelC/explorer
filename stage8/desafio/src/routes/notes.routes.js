const { Router } = require("express")
const NotesController = require("../controllers/NotesController")

const notesRouter = Router()

const notesController = new NotesController()

notesRouter.get('/', notesController.index)
notesRouter.get('/:note_id', notesController.show)
notesRouter.post('/', notesController.create)
notesRouter.put('/:note_id', notesController.update)
notesRouter.delete('/:note_id', notesController.delete)


module.exports = notesRouter