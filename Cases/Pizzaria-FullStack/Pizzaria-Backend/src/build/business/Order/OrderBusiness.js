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
exports.OrderBusiness = void 0;
const CustomError_1 = require("../../error/CustomError");
class OrderBusiness {
    constructor(orderDatabase, pizzaDatabase, itemDatabase, authenticator) {
        this.orderDatabase = orderDatabase;
        this.pizzaDatabase = pizzaDatabase;
        this.itemDatabase = itemDatabase;
        this.authenticator = authenticator;
    }
    create(input, token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!token) {
                    throw new CustomError_1.CustomError(401, "Por favor, passe o token no header da requisição");
                }
                const { orderId } = input;
                if (!orderId) {
                    throw new CustomError_1.CustomError(400, "Por favor, é necessário que se tenha o item para criar um pedido");
                }
                const userId = this.authenticator.getData(token);
                const pizzaId = yield this.itemDatabase.getPizzaIdByOrder(orderId);
                const price = yield this.pizzaDatabase.getPriceByOrder(pizzaId);
                const itemId = yield this.orderDatabase.getItemIdByOrder(orderId);
                const quantity = yield this.itemDatabase.getQuantity(orderId);
                const id = yield this.itemDatabase.getOrderId();
                const { order_id } = id;
                console.log(itemId);
                const createdAt = new Date();
                const order = {
                    id: orderId,
                    userId: userId.id,
                    total: Number(price) * Number(quantity),
                    createdAt
                };
                yield this.orderDatabase.create(order, itemId);
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
                    throw new CustomError_1.CustomError(401, "Por favor, passe o token no header da requisição");
                }
                const orders = yield this.orderDatabase.getAll();
                if (!orders) {
                    throw new CustomError_1.CustomError(404, "Sem pedidos realizados por enquanto...");
                }
                return orders;
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
                    throw new CustomError_1.CustomError(401, "Por favor, passe o token no header da requisição");
                }
                const order = yield this.orderDatabase.getById(id);
                if (!order) {
                    throw new CustomError_1.CustomError(404, "Id inválido ou Pedido não encontrado");
                }
                return order;
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
    getDetails(id, token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!token) {
                    throw new CustomError_1.CustomError(401, "Por favor, passe o token no header da requisição");
                }
                const details = yield this.orderDatabase.getDetails(id);
                if (!details) {
                    throw new CustomError_1.CustomError(404, "Detalhes não encontrados");
                }
                return details;
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
}
exports.OrderBusiness = OrderBusiness;
