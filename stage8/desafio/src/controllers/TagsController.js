class TagsController {
  async index(req, res) {
    //Get all tags of a user
    res.json({"rota": "tags controller index"})
  }

}

module.exports = TagsController