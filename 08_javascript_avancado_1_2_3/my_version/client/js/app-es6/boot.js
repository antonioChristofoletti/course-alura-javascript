import { NegociacaoController } from "./controllers/NegociacaoController";

const negociacaoController = new NegociacaoController()
const $ = document.querySelector.bind(document)

$("[data-click='carregarNegociacoes']").onclick = negociacaoController.carregarNegociacoes.bind(negociacaoController)
$("[data-click='removerNegociacoes']").onclick = negociacaoController.removeNegociacaoAll.bind(negociacaoController)
$("[data-submit='adicionarNegociacao']").onsubmit = negociacaoController.adicionar.bind(negociacaoController)