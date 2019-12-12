const Usuario = require("../models/Usuario");

module.exports = {
  async store(req, res) {
    const { email } = req.body;

    if (await Usuario.findOne({ email })) {
      return res.status(400).json({ error: "Usuário já existe!" });
    }

    const usuario = await Usuario.create(req.body);

    return res.json(usuario);
  },

  async index(req, res) {
    const usuario = await Usuario.findOne({
      email: req.params.email
    }).populate(["peneiras"]);
    if (usuario) {
      return res.json(usuario);
    }

    return res.status(400).json({ error: "Usuário não encontrado!" });
  },

  async destroy(req, res) {
    await Usuario.deleteOne({ _id: req.params.id });
    return res.json({ message: "Usuário excluído!" });
  }
};
