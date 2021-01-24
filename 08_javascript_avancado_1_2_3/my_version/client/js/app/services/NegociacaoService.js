"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NegociacaoService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Negociacao = require("../models/Negociacao");

var _NegociacaoDao = require("../dao/NegociacaoDao");

var _ConnectionFactory = require("../factories/ConnectionFactory");

var _HttpRequest = require("../services/HttpRequest");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NegociacaoService = exports.NegociacaoService = function () {
    function NegociacaoService() {
        _classCallCheck(this, NegociacaoService);

        throw new Error("The class '" + this + "' can not be instances");
    }

    _createClass(NegociacaoService, null, [{
        key: "_get",
        value: function _get(url) {
            return new Promise(function (resolve, reject) {
                _HttpRequest.HttpRequest.get(url).then(function (response) {
                    var negociacoesList = response.map(function (objeto) {
                        return new _Negociacao.Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor);
                    });

                    resolve(negociacoesList);
                }).catch(function (rejection) {
                    reject(rejection);
                });
            });
        }
    }, {
        key: "getWeeklyNegociacoes",
        value: function getWeeklyNegociacoes() {
            return NegociacaoService._get("negociacoes/semana");
        }
    }, {
        key: "getLastWeekNegociacoes",
        value: function getLastWeekNegociacoes() {
            return NegociacaoService._get("negociacoes/anterior");
        }
    }, {
        key: "getRetreatedWeekNegociacoes",
        value: function getRetreatedWeekNegociacoes() {
            return NegociacaoService._get("negociacoes/retrasada");
        }
    }, {
        key: "adicionar",
        value: function adicionar(negociacao) {
            return _ConnectionFactory.ConnectionFactory.getConnection().then(function (connection) {
                return new _NegociacaoDao.NegociacaoDao(connection);
            }).then(function (negociacaoDao) {
                return negociacaoDao.add(negociacao);
            }).then(function (_) {
                return "Elemento inserido com sucesso";
            }).catch(function (erro) {
                throw new Error(erro);
            });
        }
    }, {
        key: "removeNegociacaoAll",
        value: function removeNegociacaoAll() {
            return _ConnectionFactory.ConnectionFactory.getConnection().then(function (connection) {
                return new _NegociacaoDao.NegociacaoDao(connection);
            }).then(function (negociacaoDao) {
                return negociacaoDao.removeAll();
            }).then(function (_) {
                return "Negociações removidas com sucesso";
            }).catch(function (erro) {
                throw new Error(erro);
            });
        }
    }, {
        key: "getNegociacaoList",
        value: function getNegociacaoList(filterNegociacaoList) {
            return _ConnectionFactory.ConnectionFactory.getConnection().then(function (connection) {
                return new _NegociacaoDao.NegociacaoDao(connection);
            }).then(function (negociacaoDao) {
                return negociacaoDao.findAll();
            }).then(function (foundNegociacaoLista) {
                return foundNegociacaoLista.filter(function (negociacaoFilter) {
                    return !filterNegociacaoList.some(function (negociacao) {
                        return negociacao.isEquals(negociacaoFilter);
                    });
                });
            }).catch(function (erro) {
                throw new Error(erro);
            });
        }
    }]);

    return NegociacaoService;
}();
//# sourceMappingURL=NegociacaoService.js.map