const Usuario = require("../models/Usuario");

module.exports = async (req, res, next) => {
  const usuario = await Usuario.findById(req.usuarioId);

  if (usuario.isAdmin) {
    return next();
  }

  return res.status(401).json({ error: "Usuário não autorizado!" });
};
