class HttpRequest {

    constructor() {
        throw new Error(`The class '${this}' can not be instances`)
    }

    static get(url) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest()

            xhr.open("get", url)
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.responseText))
                    } else {
                        reject(xhr.responseText)
                    }
                }
            }

            xhr.send()
        })
    }
}