"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DataHelper = exports.DataHelper = function () {
    function DataHelper() {
        _classCallCheck(this, DataHelper);

        throw new Error("A classe DataHelper não pode ser instanciada");
    }

    _createClass(DataHelper, null, [{
        key: "dataParaTexto",
        value: function dataParaTexto(data) {
            return data.getDate() + "/" + data.getMonth() + "/" + data.getFullYear();
        }
    }, {
        key: "textoParaData",
        value: function textoParaData(texto) {

            if (!/([0-3]?\d)\/([0-1]?[0-2])\/(\d)+/.test(texto)) {
                throw new Error("Deve estar no formato aaaa-mm-dd");
            }

            return new (Function.prototype.bind.apply(Date, [null].concat(_toConsumableArray(texto.split('/').map(function (item, indice) {
                return item - indice % 2;
            }).reverse()))))();
        }
    }]);

    return DataHelper;
}();
//# sourceMappingURL=DataHelper.js.map