export class HttpRequest {

    constructor() {
        throw new Error(`The class '${this}' can not be instances`)
    }

    static _handleErrors(resp) {
        if (resp.ok) {
            return resp
        } else {
            throw Error("Error getting the data.")
        }
    }

    static get(url) {
        return fetch(url)
            .then(resp => this._handleErrors(resp))
            .then(resp => resp.json())
    }

    static post(url, content) {
        return fetch.post(url, {
            headers: {
                "content-type": "applicaton/json"
            },
            method: "post",
            body: JSON.stringify(content)
        })
    }
}