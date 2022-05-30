const bcrypt = require('bcryptjs')
const sqliteConnection = require("../database/sqlite")
const AppError = require("../utils/AppError")

class UsersController {
  async create(req, res) {
    const db = await sqliteConnection()

    const { name, email, password, avatar } = req.body

    const checkIfUserExists = await db.get("SELECT * FROM users WHERE email = (?)", [email])

    if (checkIfUserExists) {
      await db.close()
      throw new AppError("Email já cadastrado")
    }

    const hashedPassword = bcrypt.hashSync(password, 8)

    await db.run("INSERT INTO users (name, email, password, avatar) VALUES (?,?,?,?)", [name, email, hashedPassword, avatar])
    await db.close()

    return res.status(201).json()
  }

  async update(req, res) {
    const db = await sqliteConnection()

    const { name, email, password, avatar, old_password } = req.body
    const { id } = req.params

    const user = await db.get("SELECT * FROM users WHERE id = (?)", [id])

    if (!user) {
      await db.close()
      throw new AppError("Usuário não encontrado")
    }

    const userWithNewEmail = await db.get("SELECT * FROM users WHERE email = (?)", [email])

    if (userWithNewEmail && userWithNewEmail.id === id) {
      await db.close()
      throw new AppError("Email já está em uso")
    }

    if (password && !old_password) {
      await db.close()
      throw new AppError("Você precisa informar a senha antiga para alterar a sua senha")
    }

    let checkPasswordMatch
    if(password) checkPasswordMatch = bcrypt.compareSync(old_password, user.password)

    if (password && !checkPasswordMatch) {
      await db.close()
      throw new AppError("A senha antiga não confere")
    } else {
      user.password = password ? bcrypt.hashSync(password, 8) : user.password
    }

    user.name = name ?? user.name
    user.email = email ?? user.email
    user.avatar = avatar ?? user.avatar

    await db.run("UPDATE users SET name = ?, email = ?, password = ?, avatar = ?, updated_at = DATETIME('now')  WHERE id = ?", [user.name, user.email, user.password, user.avatar, id])
    await db.close()


    return res.json()

  }
}

module.exports = UsersController