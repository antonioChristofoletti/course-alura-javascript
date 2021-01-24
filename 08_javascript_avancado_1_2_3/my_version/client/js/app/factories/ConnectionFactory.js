"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var dbVersion = 4;
var dbName = "aluraframe";
var storeList = ["negociacoes"];

var currentConnection = null;

var ConnectionFactory = exports.ConnectionFactory = function () {
    function ConnectionFactory() {
        _classCallCheck(this, ConnectionFactory);

        throw new Error("The class can not be instanced");
    }

    _createClass(ConnectionFactory, null, [{
        key: "getConnection",
        value: function getConnection() {
            return new Promise(function (resolve, reject) {
                if (currentConnection !== null) {
                    resolve(currentConnection);
                    return;
                }

                var openRequest = window.indexedDB.open(dbName, dbVersion);

                openRequest.onupgradeneeded = function (e) {
                    ConnectionFactory._addStores(e.target.result);
                };

                openRequest.onsuccess = function (e) {
                    currentConnection = e.target.result;

                    resolve(currentConnection);
                };

                openRequest.onerror = function (e) {
                    console.log(e);
                    reject("Conex\xE3o falhou. Erro: " + e);
                };
            });
        }
    }, {
        key: "_addStores",
        value: function _addStores(connection) {
            storeList.forEach(function (storeName) {
                if (connection.objectStoreNames.contains(storeName)) {
                    connection.deleteObjectStore(storeName);
                }

                connection.createObjectStore(storeName, {
                    autoIncrement: true
                });
            });
        }
    }]);

    return ConnectionFactory;
}();
//# sourceMappingURL=ConnectionFactory.js.map