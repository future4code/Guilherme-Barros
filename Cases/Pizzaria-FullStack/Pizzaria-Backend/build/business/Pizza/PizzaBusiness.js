"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PizzaBusiness = void 0;
const CustomError_1 = require("./../../error/CustomError");
const CustomError_2 = require("../../error/CustomError");
class PizzaBusiness {
    constructor(pizzaDatabase, userDatabase, authenticator, idGenerator) {
        this.pizzaDatabase = pizzaDatabase;
        this.userDatabase = userDatabase;
        this.authenticator = authenticator;
        this.idGenerator = idGenerator;
    }
    create(input, token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!token) {
                    throw new CustomError_2.CustomError(401, "Por favor, passe o token no header da requisição");
                }
                const { name, price, img_url, ingredients } = input;
                if (!name || !price || !ingredients || !img_url) {
                    throw new CustomError_2.CustomError(422, "Faltam parâmetros na requisição que devem ser completados para a criação da Pizza");
                }
                const pizzaByName = yield this.pizzaDatabase.getByName(name);
                if (pizzaByName) {
                    throw new CustomError_1.InvalidName();
                }
                const authData = this.authenticator.getData(token);
                if (!authData) {
                    throw new Error("Token inválido ou não passado");
                }
                if (authData.role !== "ADMIN") {
                    throw new Error("Usuário não autorizado");
                }
                const id = this.idGenerator.generate();
                const pizza = {
                    id,
                    name,
                    price,
                    img_url,
                    ingredients
                };
                yield this.pizzaDatabase.create(pizza);
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
    getAll(token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!token) {
                    throw new CustomError_2.CustomError(401, "Por favor, passe o token no header da requisição");
                }
                const pizzas = yield this.pizzaDatabase.getAll();
                if (!pizzas) {
                    throw new CustomError_2.CustomError(404, "Sem pizzas no momento!");
                }
                return pizzas;
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
    getById(id, token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!token) {
                    throw new CustomError_2.CustomError(401, "Por favor, passe o token no header da requisição");
                }
                const pizza = yield this.pizzaDatabase.getById(id);
                if (!pizza) {
                    throw new CustomError_2.CustomError(404, "Pizza não encontrada ou id inválido");
                }
                return pizza;
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
}
exports.PizzaBusiness = PizzaBusiness;
