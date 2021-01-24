"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var View = exports.View = function () {
    function View(negociacaoViewElement) {
        _classCallCheck(this, View);

        this._negociacaoViewElement = negociacaoViewElement;
    }

    _createClass(View, [{
        key: "model",
        value: function model(data) {
            throw new Exception("The method 'model' from the 'NegociacaoView' class was not implemented");
        }
    }, {
        key: "update",
        value: function update(data) {
            this._negociacaoViewElement.innerHTML = this.model(data);
        }
    }]);

    return View;
}();
//# sourceMappingURL=View.js.map