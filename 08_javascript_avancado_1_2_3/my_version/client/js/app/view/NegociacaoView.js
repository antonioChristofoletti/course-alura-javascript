"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NegociacaoView = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _View2 = require("./View");

var _DataHelper = require("../helpers/DataHelper");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NegociacaoView = exports.NegociacaoView = function (_View) {
    _inherits(NegociacaoView, _View);

    function NegociacaoView() {
        _classCallCheck(this, NegociacaoView);

        return _possibleConstructorReturn(this, (NegociacaoView.__proto__ || Object.getPrototypeOf(NegociacaoView)).call(this, document.querySelector("#negociacaoView")));
    }

    _createClass(NegociacaoView, [{
        key: "model",
        value: function model(negociacaoLista) {
            return "\n        <table class=\"table table-hover table-bordered\">\n            <thead>\n                <tr>\n                    <th onclick=\"negociacaoController.ordena('data')\">DATA</th>\n                    <th onclick=\"negociacaoController.ordena('quantidade')\">QUANTIDADE</th>\n                    <th onclick=\"negociacaoController.ordena('valor')\">VALOR</th>\n                    <th onclick=\"negociacaoController.ordena('volume')\">VOLUME</th>\n                </tr>\n            </thead>\n\n            <tbody>\n                " + negociacaoLista.negociacaoLista.map(function (negociacao) {
                return "\n                    <tr>\n                        <td>" + _DataHelper.DataHelper.dataParaTexto(negociacao.data) + "</td>\n                        <td>" + negociacao.quantidade + "</td>\n                        <td>" + negociacao.valor + "</td>\n                        <td>" + negociacao.quantidade * negociacao.valor + "</td>\n                    </tr>    \n                    ";
            }).join("") + "\n            </tbody>\n\n            <tfoot>\n                <tr>\n                    <td colspan=\"3\"></td>\n                    <td>\n                        " + negociacaoLista.valorTotal + "\n                    </td>\n                </tr>\n            </tfoot>\n        </table>\n        ";
        }
    }]);

    return NegociacaoView;
}(_View2.View);
//# sourceMappingURL=NegociacaoView.js.map