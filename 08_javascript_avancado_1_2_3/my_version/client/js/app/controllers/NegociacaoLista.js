"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NegociacaoLista = exports.NegociacaoLista = function () {
    function NegociacaoLista() {
        _classCallCheck(this, NegociacaoLista);

        this._negociacaoLista = [];
    }

    _createClass(NegociacaoLista, [{
        key: "add",
        value: function add(negociacao) {
            this._negociacaoLista.push(negociacao);
        }
    }, {
        key: "addAll",
        value: function addAll(listaNegociacao) {
            var _negociacaoLista;

            (_negociacaoLista = this._negociacaoLista).push.apply(_negociacaoLista, _toConsumableArray(listaNegociacao));
        }
    }, {
        key: "removeAll",
        value: function removeAll() {
            this._negociacaoLista.length = 0;
        }
    }, {
        key: "ordena",
        value: function ordena(criterio) {
            this._negociacaoLista.sort(criterio);
        }
    }, {
        key: "ordenaReversa",
        value: function ordenaReversa() {
            this._negociacaoLista.reverse();
        }
    }, {
        key: "negociacaoLista",
        get: function get() {
            return [].concat(this._negociacaoLista);
        }
    }, {
        key: "valorTotal",
        get: function get() {
            return this._negociacaoLista.reduce(function (total, negociacao) {
                return total + negociacao.valor;
            }, 0.0);
        }
    }]);

    return NegociacaoLista;
}();
//# sourceMappingURL=NegociacaoLista.js.map