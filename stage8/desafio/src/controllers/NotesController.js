const sqliteConnection = require("../database/sqlite")
const AppError = require("../utils/AppError")

class NotesController {
  async index(req, res) {
    const db = await sqliteConnection()

    const { user_id } = req.body

    if(!user_id) throw new AppError("Forneça um id de usuário válido")

    const notes = await db.all("SELECT * FROM notes WHERE user_id = (?) ", [user_id])
 
    if(notes.length === 0) throw new AppError("Nenhuma nota encontrada", 404)
    
    const tags = await db.all("SELECT * FROM tags WHERE user_id = (?)",[user_id])
    
    const notesWithTags = notes.map(note => {
      
      const noteTags = tags.filter(tag => tag.note_id === note.id)
      
      return {
        ...note,
        tags: noteTags
      }
    })

    await db.close()

    return res.json(notesWithTags)
  }

  async create(req, res) {
    const db = await sqliteConnection()

    const { title, description, rating, user_id, tags } = req.body

    if (!rating.toString())
      throw new AppError("Avalie o filme com uma nota de 1 a 5")
    else if (rating < 1 || rating > 5) 
        throw new AppError("Nota inválida forneça um valor de 1 a 5")

    if (!user_id) throw new AppError("Forneça o id do usuário")


    await db.run("INSERT INTO notes (title, description, rating, user_id) VALUES (?,?,?,?)", [title, description, rating, user_id])

    if (tags) {
      const note = await db.get("SELECT * FROM notes WHERE id = (SELECT MAX(id) FROM notes WHERE user_id = (?))", [user_id])

      for (let tag of tags) {
        await db.run("INSERT INTO tags (note_id, user_id, name) VALUES (?,?,?)", [note.id, user_id, tag])
      }
    }

    await db.close()


    return res.status(201).json()
  }

  async show(req, res) {
    const db = await sqliteConnection()
    
    const { note_id } = req.params

    const note = await db.get("SELECT * FROM notes WHERE id = (?)", [note_id])

    await db.close()
    
    if(!note) throw new AppError("Nota não encontrada", 404)

    return res.json(note)
  }

  async update(req, res) {
    const db = await sqliteConnection()

    const { note_id } = req.params
    const { title, description, rating } = req.body

    if (rating.toString())
      if (rating < 1 || rating > 5) 
        throw new AppError("Nota inválida forneça um valor de 1 a 5")

    const note = await db.get("SELECT * FROM notes WHERE id = (?)", [note_id])

    note.title = title ?? note.title
    note.description = description ?? note.description
    note.rating = rating ?? note.rating

    await db.run("UPDATE notes SET title = ?, description = ?, rating = ?, updated_at = CURRENT_TIMESTAMP WHERE id = (?)", [note.title, note.description, note.rating, note.id])

    await db.close()
    
    return res.status(200).json()
  }

  async delete(req, res) {
    const db = await sqliteConnection()

    const { note_id } = req.params

    await db.run("DELETE FROM notes WHERE id = (?)", [note_id])

    await db.run("DELETE FROM tags WHERE note_id = (?)", [note_id])

    return res.status(200).json()
  }
}

module.exports = NotesController