"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NegociacaoController = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MensagemView = require("../view/MensagemView");

var _NegociacaoView = require("../view/NegociacaoView");

var _NegociacaoLista = require("./NegociacaoLista");

var _Mensagem = require("../models/Mensagem");

var _Bind = require("../models/Bind");

var _Negociacao = require("../models/Negociacao");

var _NegociacaoService = require("../services/NegociacaoService");

var _DataHelper = require("../helpers/DataHelper");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NegociacaoController = exports.NegociacaoController = function () {
    function NegociacaoController() {
        _classCallCheck(this, NegociacaoController);

        this._ordemAtual = '';

        var $ = document.querySelector.bind(document);

        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");

        this._mensagemView = new _MensagemView.MensagemView($("#mensagemView"));
        this._negociacaoView = new _NegociacaoView.NegociacaoView($("#negociacaoView"));

        this._negociacaoLista = new _Bind.Bind(new _NegociacaoLista.NegociacaoLista(), this._negociacaoView, "addAll", "add", "removeAll", "ordena", "ordenaReversa");

        this._mensagem = new _Bind.Bind(new _Mensagem.Mensagem(), this._mensagemView, "texto");

        this._init();
    }

    _createClass(NegociacaoController, [{
        key: "_init",
        value: function _init() {
            var _this = this;

            setInterval(function (_) {
                return _this._carregarLista();
            }, 3000);
        }
    }, {
        key: "_carregarLista",
        value: function _carregarLista() {
            var _this2 = this;

            var addedNegociacaoLista = this._negociacaoLista.negociacaoLista;

            _NegociacaoService.NegociacaoService.getNegociacaoList(addedNegociacaoLista).then(function (negociacaoLista) {
                _this2._negociacaoLista.addAll(negociacaoLista);
                _this2._mensagem.texto = "Elementos carregados com sucesso";
            }).catch(function (erro) {
                return _this2._mensagem.texto = erro;
            });
        }
    }, {
        key: "adicionar",
        value: function adicionar(evento) {
            var _this3 = this;

            evento.preventDefault();

            var newNegociacao = this._criarNegociacao();

            _NegociacaoService.NegociacaoService.adicionar(newNegociacao).then(function (mensagem) {
                _this3._negociacaoLista.add(newNegociacao);
                _this3._limparCampos();

                _this3._mensagem.texto = mensagem;
            }).catch(function (erro) {
                return _this3._mensagem.texto = erro;
            });
        }
    }, {
        key: "_criarNegociacao",
        value: function _criarNegociacao() {
            return new _Negociacao.Negociacao(_DataHelper.DataHelper.textoParaData(this._inputData.value), parseInt(this._inputQuantidade.value), parseInt(this._inputValor.value));
        }
    }, {
        key: "_limparCampos",
        value: function _limparCampos() {
            this._inputData.value = "";
            this._inputQuantidade.value = "";
            this._inputValor.value = "";
            this._inputData.focus();
        }
    }, {
        key: "carregarNegociacoes",
        value: function carregarNegociacoes() {
            var _this4 = this;

            var promise = Promise.all([_NegociacaoService.NegociacaoService.getWeeklyNegociacoes(), _NegociacaoService.NegociacaoService.getLastWeekNegociacoes(), _NegociacaoService.NegociacaoService.getRetreatedWeekNegociacoes()]);

            promise.then(function (response) {
                var negociacoeslist = response.reduce(function (concatList, iterationList) {
                    return concatList.concat(iterationList);
                }, []);

                _this4._negociacaoLista.addAll(negociacoeslist);
                _this4._mensagem.texto = "Lista atualizada com sucesso";
            }).catch(function (rejection) {
                console.error("Error getting the negociacao list. Error: " + rejection);
                _this4._mensagem.texto = "Erro ao obter a lista de negociacoes";
            });
        }
    }, {
        key: "ordena",
        value: function ordena(coluna) {
            if (this._ordemAtual === coluna) {
                this._negociacaoLista.ordenaReversa();
            } else {
                this._negociacaoLista.ordena(function (a, b) {
                    return a[coluna] - b[coluna];
                });
                this._ordemAtual = coluna;
            }
        }
    }, {
        key: "removeNegociacaoAll",
        value: function removeNegociacaoAll() {
            var _this5 = this;

            _NegociacaoService.NegociacaoService.removeNegociacaoAll().then(function (mensagem) {
                _this5._negociacaoLista.removeAll();
                _this5._mensagem.texto = mensagem;
            }).catch(function (erro) {
                return _this5._mensagem.texto = erro;
            });
        }
    }]);

    return NegociacaoController;
}();
//# sourceMappingURL=NegociacaoController.js.map