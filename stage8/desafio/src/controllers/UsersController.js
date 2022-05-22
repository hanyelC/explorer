class UsersController {
  async create(req, res) {
    const { name, email, password, avatar } = req.body

    //Salvar usuário no banco de dados

    return res.status(201).json()
  }

  async update(req, res) {
    const { user_id } = req.params
    const { name, email, password, avatar } = req.body

    //Atualizar dados do usuário no banco de dados


    return res.json()

  }
}

module.exports = UsersController