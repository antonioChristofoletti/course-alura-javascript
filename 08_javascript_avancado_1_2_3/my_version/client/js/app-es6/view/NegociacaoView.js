import { View } from "./View";
import { DataHelper } from "../helpers/DataHelper";

export class NegociacaoView extends View {
    constructor() {
        super(document.querySelector("#negociacaoView"))
    }

    model(negociacaoLista) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th onclick="negociacaoController.ordena('data')">DATA</th>
                    <th onclick="negociacaoController.ordena('quantidade')">QUANTIDADE</th>
                    <th onclick="negociacaoController.ordena('valor')">VALOR</th>
                    <th onclick="negociacaoController.ordena('volume')">VOLUME</th>
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