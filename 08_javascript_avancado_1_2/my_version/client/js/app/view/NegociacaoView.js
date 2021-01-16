class NegociacaoView extends View {
    constructor() {
        super(document.querySelector("#negociacaoView"))
    }

    model(negociacaoLista) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
                ${negociacaoLista.negociacaoLista.map(negociacao =>
            `
                    <tr>
                        <td>${DataHelper.dataParaTexto(negociacao.data)}</td>
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor}</td>
                        <td>${negociacao.quantidade * negociacao.valor}</td>
                    </tr>    
                    `).join("")
            }
            </tbody>

            <tfoot>
                <tr>
                    <td colspan="3"></td>
                    <td>
                        ${negociacaoLista.valorTotal}
                    </td>
                </tr>
            </tfoot>
        </table>
        `
    }
}