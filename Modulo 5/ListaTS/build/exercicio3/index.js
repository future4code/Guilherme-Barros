"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GENERO;
(function (GENERO) {
    GENERO["ACAO"] = "a\u00E7\u00E3o";
    GENERO["DRAMA"] = "drama";
    GENERO["COMEDIA"] = "com\u00E9dia";
    GENERO["ROMANCE"] = "romance";
    GENERO["TERROR"] = "terror";
})(GENERO || (GENERO = {}));
const catalogo = (nome, ano, genero, pontuacao) => {
    const novoFilme = {
        nome,
        ano,
        genero,
        pontuacao
    };
    return novoFilme;
};
console.log(catalogo('Duna', 2021, GENERO.ACAO));
//# sourceMappingURL=index.js.map