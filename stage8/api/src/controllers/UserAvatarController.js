const sqliteConnection = require("../database/sqlite")
const knex = require("../database/knex")
const AppError = require("../utils/AppError")
const DiskStorage = require("../providers/DiskStorage")

class UserAvatarController {
  async update(req, res) {
    const user_id = req.user.id
    const avatarFilename = req.file.filename

    const diskStorage = new DiskStorage
    const db = await sqliteConnection()
    
    const user = await knex("users")
      .where({ id: user_id })

    if(!user) {
      throw new AppError("Somente usuários autenticados podem alterar o avatar", 401)
    }

    if(user.avatar) {
      await diskStorage.deleteFile(user.avatar)
    }

    const filename = await diskStorage.saveFile(avatarFilename)
    user.avatar = filename

    await db.run("UPDATE users SET avatar = ? WHERE id = ?", [user.avatar, user_id])

    return res.json(user)
  }
}

module.exports = UserAvatarController