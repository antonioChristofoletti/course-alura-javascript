"use strict";

var _NegociacaoController = require("./controllers/NegociacaoController");

var negociacaoController = new _NegociacaoController.NegociacaoController();
var $ = document.querySelector.bind(document);

$("[data-click='carregarNegociacoes']").onclick = negociacaoController.carregarNegociacoes.bind(negociacaoController);
$("[data-click='removerNegociacoes']").onclick = negociacaoController.removeNegociacaoAll.bind(negociacaoController);
$("[data-submit='adicionarNegociacao']").onsubmit = negociacaoController.adicionar.bind(negociacaoController);
//# sourceMappingURL=boot.js.map