const DiskStorage = require("../providers/DiskStorage")
const sqliteConnection = require("../database/sqlite")

class UserAvatarController {
  async update(req, res) {
    const { user_id } = req.body

    const diskStorage = new DiskStorage()
    const db = await sqliteConnection()

    const user = await db.get("SELECT * FROM users WHERE id = (?)", [user_id])

    if (user.avatar)
      diskStorage.deleteFile(user.avatar)

    const file = diskStorage.saveFile(req.file.filename)

    if (file)
      await db.run("UPDATE users SET avatar = ? WHERE id = ?", [req.file.filename, user_id])

    res.json({ "filename": req.file.filename })
  }
}

module.exports = UserAvatarController