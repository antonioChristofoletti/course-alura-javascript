"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HttpRequest = exports.HttpRequest = function () {
    function HttpRequest() {
        _classCallCheck(this, HttpRequest);

        throw new Error("The class '" + this + "' can not be instances");
    }

    _createClass(HttpRequest, null, [{
        key: "_handleErrors",
        value: function _handleErrors(resp) {
            if (resp.ok) {
                return resp;
            } else {
                throw Error("Error getting the data.");
            }
        }
    }, {
        key: "get",
        value: function get(url) {
            var _this = this;

            return fetch(url).then(function (resp) {
                return _this._handleErrors(resp);
            }).then(function (resp) {
                return resp.json();
            });
        }
    }, {
        key: "post",
        value: function post(url, content) {
            return fetch.post(url, {
                headers: {
                    "content-type": "applicaton/json"
                },
                method: "post",
                body: JSON.stringify(content)
            });
        }
    }]);

    return HttpRequest;
}();
//# sourceMappingURL=HttpRequest.js.map