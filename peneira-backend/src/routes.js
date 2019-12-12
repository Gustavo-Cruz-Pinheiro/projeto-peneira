const { Router } = require("express");

const UsuarioController = require("./controllers/UsuarioController");
const SessaoController = require("./controllers/SessaoController");
const PeneiraController = require("./controllers/PeneiraController");
const authMiddleware = require("./middlewares/auth");

const routes = Router();

routes.get("/usuarios/:email", UsuarioController.index);
routes.post("/sessoes", SessaoController.store);
routes.post("/usuarios", UsuarioController.store);

routes.use(authMiddleware);
routes.delete("/usuarios/:id", UsuarioController.destroy);

routes.post("/peneiras", PeneiraController.store);
routes.get("/peneiras", PeneiraController.list);
routes.get("/peneiras/:id", PeneiraController.index);

module.exports = routes;
