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
exports.ItemBusiness = void 0;
const CustomError_1 = require("../../error/CustomError");
const Item_1 = require("../../model/Item");
class ItemBusiness {
    constructor(pizzaDatabase, itemDatabase, idGenerator) {
        this.pizzaDatabase = pizzaDatabase;
        this.itemDatabase = itemDatabase;
        this.idGenerator = idGenerator;
    }
    create(input, token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!token) {
                    throw new CustomError_1.CustomError(401, "Por favor, passe o token no header da requisição");
                }
                let { pizzaId, quantity } = input;
                if (!pizzaId || !quantity) {
                    throw new CustomError_1.CustomError(401, "Faltam parâmetros na requisição para a criação de item");
                }
                const pizza = yield this.pizzaDatabase.getById(pizzaId);
                if (!pizza) {
                    throw new CustomError_1.CustomError(404, "Id da pizza inválido ou Pizza não encontrada");
                }
                const status = Item_1.Status.ACTIVE;
                const id = this.idGenerator.generate();
                let order_id = yield this.itemDatabase.getOrderId();
                if (!order_id) {
                    order_id = this.idGenerator.generate();
                }
                const item = {
                    id,
                    pizzaId,
                    status,
                    order_id,
                    quantity
                };
                yield this.itemDatabase.create(item);
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
    deleteItem(itemId, token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!token) {
                    throw new CustomError_1.CustomError(401, "Por favor, passe o token no header da requisição");
                }
                if (!itemId) {
                    throw new CustomError_1.CustomError(400, "Por favor, passe o id do item que deseja deletar");
                }
                const item = this.itemDatabase.getById(itemId);
                if (!item) {
                    throw new CustomError_1.CustomError(404, "Item não encontrado ou id inválido");
                }
                yield this.itemDatabase.deleteItem(itemId);
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
    getActives(token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!token) {
                    throw new CustomError_1.CustomError(401, "Por favor, passe o token no header da requisição");
                }
                const itens = this.itemDatabase.getActives();
                if (!itens) {
                    throw new CustomError_1.CustomError(404, "Carrinho vazio");
                }
                return itens;
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
}
exports.ItemBusiness = ItemBusiness;
