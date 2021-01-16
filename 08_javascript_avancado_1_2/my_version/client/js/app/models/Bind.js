class Bind {
    constructor(model, view, ...props) {
        const proxy = ProxyFactory.create(model, model => view.update(model), props)

        view.update(model)

        return proxy
    }
}