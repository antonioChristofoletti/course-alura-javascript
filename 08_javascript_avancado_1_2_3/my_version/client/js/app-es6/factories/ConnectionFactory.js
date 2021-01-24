const dbVersion = 4
const dbName = "aluraframe"
const storeList = ["negociacoes"]

let currentConnection = null

export class ConnectionFactory {
    constructor() {
        throw new Error("The class can not be instanced")
    }

    static getConnection() {
        return new Promise((resolve, reject) => {
            if (currentConnection !== null) {
                resolve(currentConnection)
                return
            }

            var openRequest = window.indexedDB.open(dbName, dbVersion)

            openRequest.onupgradeneeded = e => {
                ConnectionFactory._addStores(e.target.result)
            }

            openRequest.onsuccess = e => {
                currentConnection = e.target.result

                resolve(currentConnection)
            }

            openRequest.onerror = e => {
                console.log(e)
                reject(`Conexão falhou. Erro: ${e}`)
            }

        })
    }

    static _addStores(connection) {
        storeList.forEach(storeName => {
            if (connection.objectStoreNames.contains(storeName)) {
                connection.deleteObjectStore(storeName)
            }

            connection.createObjectStore(storeName, {
                autoIncrement: true
            })
        })

    }
}