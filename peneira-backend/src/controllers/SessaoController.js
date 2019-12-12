const Usuario = require("../models/Usuario");

module.exports = {
  async store(req, res) {
    const { email, password } = req.body;

    const usuario = await Usuario.findOne({ email });

    if (!usuario) {
      return res.status(400).json({ error: "Usuário não encontrado!" });
    }

    if (!(await usuario.compareHash(password))) {
      return res.json({ error: "Senha inválida!" });
    }

    const { _id, nome, isAdmin } = usuario;

    return res.json({
      usuario: { _id, nome, isAdmin, email },
      token: Usuario.generateToken(usuario)
    });
  }
};
