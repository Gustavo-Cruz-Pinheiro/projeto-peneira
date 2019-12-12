const { Schema, model } = require("mongoose");

const PeneiraSchema = new Schema(
  {
    clube: {
      type: String,
      required: true
    },
    categorias: {
      type: String,
      required: true
    },
    data: {
      type: String,
      required: true
    },
    local: {
      type: String,
      required: true
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "Usuario"
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("Peneira", PeneiraSchema);
