"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NegociacaoDao = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Negociacao = require("../models/Negociacao");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NegociacaoDao = exports.NegociacaoDao = function () {
    function NegociacaoDao(connection) {
        _classCallCheck(this, NegociacaoDao);

        this._connection = connection;
    }

    _createClass(NegociacaoDao, [{
        key: "add",
        value: function add(negociacao) {
            var _this = this;

            return new Promise(function (resolve, reject) {
                var request = _this._connection.transaction(["negociacoes"], "readwrite").objectStore("negociacoes").add(negociacao);

                request.onsuccess = function (e) {
                    return resolve(negociacao);
                };

                request.onerror = function (e) {
                    reject("Negociacao n\xE3o includa. Erro: " + e);
                };
            });
        }
    }, {
        key: "findAll",
        value: function findAll() {
            var _this2 = this;

            return new Promise(function (resolve, reject) {
                var cursor = _this2._connection.transaction(["negociacoes"], "readonly").objectStore("negociacoes").openCursor();

                var negociacoes = [];

                cursor.onsuccess = function (e) {
                    var currentResult = e.target.result;

                    if (currentResult) {
                        var dado = currentResult.value;
                        negociacoes.push(new _Negociacao.Negociacao(dado._data, dado._quantidade, dado._valor));

                        currentResult.continue();
                    } else {
                        resolve(negociacoes);
                    }
                };

                cursor.onerror = function (e) {
                    reject("N\xE3o foi poss\xEDvel encontrar a lista de negociacoes. Erro: " + e);
                };
            });
        }
    }, {
        key: "removeAll",
        value: function removeAll() {
            var _this3 = this;

            return new Promise(function (resolve, reject) {
                var request = _this3._connection.transaction(["negociacoes"], "readwrite").objectStore("negociacoes").clear();

                request.onsuccess = function (_) {
                    return resolve();
                };

                request.onerror = function (e) {
                    reject("Negocia\xE7\xF5es n\xE3o foram removidas. Erro: " + e);
                };
            });
        }
    }]);

    return NegociacaoDao;
}();
//# sourceMappingURL=NegociacaoDao.js.map