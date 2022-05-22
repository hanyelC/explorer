class NotesController {
  async index(req, res) {
    res.json({"rota":"Notes controller index"})
  }

  async create(req, res) { 

    //@TODO create note on database

    return res.status(201).json({"rota": "notes controller create"})
  }

  async show(req, res) {
    const { note_id } = req.params

    //@TODO show the note

    return res.json({"rota": "notes controller show"})
  }

  async update(req, res) {
    //@TODO update note on database

    return res.status(200).json({"rota": "notes controller update"})
  }

  async delete(req, res) {
    //@TODO delete note on database

    return res.status(200).json({"rota": "notes controller delete"})
  }
}

module.exports = NotesController