const express = require("express");
const router = express.Router();

const disciplinaCtrl = require('../controllers/disciplinaController');

/**
 * Mapeamento das rotas das disciplinas
 */

router.get("/", disciplinaCtrl.get);

router.post("/", disciplinaCtrl.criarDisciplina);

router.get("/:idDisciplina", disciplinaCtrl.get);

router.put("/:idDisciplina", disciplinaCtrl.atualizarDisciplina);

router.delete("/:idDisciplina", disciplinaCtrl.excluirDisciplina);

/**
 * Module exports.
 */

module.exports = router;
