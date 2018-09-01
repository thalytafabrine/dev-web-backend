const express = require("express");
const router = express.Router();

const listaEstudoCtrl = require('../controllers/listaEstudoController');

/**
 * Mapeamento das rotas das listas de estudo
 */

router.get("/", listaEstudoCtrl.get);

router.post("/", listaEstudoCtrl.criarLista);

router.get("/:idLista", listaEstudoCtrl.get);

router.put("/:idLista", listaEstudoCtrl.atualizarLista);

router.delete("/:idLista", listaEstudoCtrl.excluirLista);

/**
 * Module exports.
 */

module.exports = router;
