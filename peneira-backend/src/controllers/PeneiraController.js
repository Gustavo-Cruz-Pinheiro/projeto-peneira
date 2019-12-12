const Peneira = require("../models/Peneira");
const Usuario = require("../models/Usuario");

module.exports = {
  async store(req, res) {
    const peneira = await Peneira.create(req.body);
    await Usuario.updateOne(
      { _id: peneira.user },
      { $push: { peneira: peneira._id } }
    );

    return res.json(peneira);
  },

  async index(req, res) {
    const peneiraId = req.params.id;
    const peneira = await Peneira.findOne({ _id: peneiraId }).populate([
      "user"
    ]);

    return res.json(peneira);
  },

  async list(req, res) {
    const peneira = await Peneira.find({}).populate(["user"]);
    return res.json(peneira);
  }
};
